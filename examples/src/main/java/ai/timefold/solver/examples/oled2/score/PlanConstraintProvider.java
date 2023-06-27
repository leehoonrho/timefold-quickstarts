package ai.timefold.solver.examples.oled2.score;

import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.stream.Constraint;
import ai.timefold.solver.core.api.score.stream.ConstraintFactory;
import ai.timefold.solver.core.api.score.stream.ConstraintProvider;
import ai.timefold.solver.examples.oled2.domain.Activity;
import ai.timefold.solver.examples.oled2.domain.Chamber;

import static ai.timefold.solver.core.api.score.stream.ConstraintCollectors.sumLong;
import static ai.timefold.solver.core.api.score.stream.Joiners.equal;

public class PlanConstraintProvider implements ConstraintProvider {

    @Override
    public Constraint[] defineConstraints(ConstraintFactory constraintFactory) {
        return new Constraint[] {
                // Hard constraints
                producibleProject(constraintFactory),
                chamberCapacity(constraintFactory),
                simultaneousProductionResourceCapacity(constraintFactory),
                dueDateFence(constraintFactory)
                // Medium constraints
//                orderContinuousProduction(constraintFactory),
//                oneOrderProduction(constraintFactory),
//                itemConflict(constraintFactory),
//                // Soft constraints
//                minJCT(constraintFactory),
//                continuousProduction(constraintFactory),
//                leastStockKeepingDay(constraintFactory)
        };
    }

    Constraint producibleProject(ConstraintFactory constraintFactory) {
        // A project can be produced using specific EL device
        return constraintFactory
                .forEach(Activity.class)
                .filter(activity -> !activity.getChamberAssign().getChamber().getPhase().getElDeviceList().contains(activity.getOrder().getProject().getRecipe().getElDevice()))
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("Producible item");
    }

    Constraint chamberCapacity(ConstraintFactory constraintFactory) {
        // A chamber has capacity limitation
        return constraintFactory
                .forEach(Activity.class)
                .join(Chamber.class, equal(activity -> activity.getChamberAssign().getChamber().getName(), Chamber::getName), equal())
                .groupBy((activity, chamber) -> activity.getTimeBucket(), (activity, resource) -> resource, sumLong((activity, resource) -> activity.getCapacity()))
                .filter((timeBucket, resource, usedCapacity) -> resource.getCapacity() < usedCapacity)
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("Resource capacity");
    }

    // EL device는 계획에 영향을 미치지 않는 것으로 보임
    // 동시 생산 제약은 하나의 Manufacturing Area에서 같은 일자에 2개 이상의 설비를 가동할 때 적용
    Constraint simultaneousProductionResourceCapacity(ConstraintFactory constraintFactory) {
        // A resource capacity is decreased when production two items in same bucket
        return constraintFactory
                .forEach(Activity.class)
                .groupBy(Activity::getTimeBucket, Activity::getResource, sumLong(Activity::getCapacity), toSet(Activity::getItem))
                .filter((timeBucket, resource, usedCapacity, itemList) -> itemList.size() > 1 && resource.getSimultaneousProductionCapacity() < usedCapacity)
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("Simultaneous production resource capacity");
    }

    Constraint dueDateFence(ConstraintFactory constraintFactory) {
        // Production should be finished before due date
        return constraintFactory
                .forEach(Activity.class)
                .filter(activity -> activity.getTimeBucket().getIndex() > activity.getDueDate())
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("Due date");
    }

    Constraint orderContinuousProduction(ConstraintFactory constraintFactory) {
        // An order must be produced continuously
        return constraintFactory
                .forEachUniquePair(Activity.class, equal(Activity::getOrder), equal(Activity::getResource))
                .filter((activity1, activity2) -> {
                    int term = activity1.getTimeBucket().getIndex() - activity2.getTimeBucket().getIndex();
                    return term == 1 || term == -1;
                })
                .reward(HardSoftScore.ONE_SOFT)
                .asConstraint("Order continuous production");
    }

    Constraint oneOrderProduction(ConstraintFactory constraintFactory) {
        // An order must be produced by a single resource
        return constraintFactory
                .forEachUniquePair(Activity.class, equal(Activity::getOrder))
                .filter((activity1, activity2) -> !activity1.getResource().equals(activity2.getResource()))
                .penalize(HardSoftScore.ONE_SOFT)
                .asConstraint("Order production");
    }

    Constraint itemConflict(ConstraintFactory constraintFactory) {
        // An item can not be produced by several resources in one time bucket
        return constraintFactory
                .forEachUniquePair(Activity.class, equal(Activity::getTimeBucket), equal(Activity::getItem))
                .penalize(HardSoftScore.ONE_SOFT)
                .asConstraint("Item conflict");
    }

    Constraint minJCT(ConstraintFactory constraintFactory) {
        // MIN J/C
        return constraintFactory
                .forEachUniquePair(Activity.class,
                        equal(Activity::getItem))
                .filter((activity1, activity2) -> activity1.getResource() == activity2.getResource())
                .reward(HardSoftScore.ONE_SOFT)
                .asConstraint("Min JCT");
    }

    Constraint continuousProduction(ConstraintFactory constraintFactory) {
        // It is good to produce same item continuously
        return constraintFactory
                .forEach(Activity.class)
                .join(Activity.class, equal(Activity::getItem))
                .filter((activity1, activity2) -> {
                    int between = activity1.getTimeBucket().getIndex() - activity2.getTimeBucket().getIndex();
                    return -1 <= between && between <= 1;
                })
                .reward(HardSoftScore.ONE_SOFT)
                .asConstraint("Continuous production");
    }

    Constraint leastStockKeepingDay(ConstraintFactory constraintFactory) {
        // It is good to reduce stock cost
        return constraintFactory
                .forEach(Activity.class)
                .filter(activity -> 0 < activity.getDueDate() - activity.getTimeBucket().getIndex())
                .penalize(HardSoftScore.ONE_SOFT, activity -> activity.getDueDate() - activity.getTimeBucket().getIndex())
                .asConstraint("Least stock keeping day");
    }

}
