package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.variable.ShadowVariable;
import ai.timefold.solver.examples.common.domain.AbstractPersistable;
import ai.timefold.solver.examples.common.swingui.components.Labeled;
import ai.timefold.solver.examples.oled.domain.solver.CapacittyUpdatingVariableListener;

import java.util.ArrayList;
import java.util.List;

@PlanningEntity
public class ChamberAssign extends AbstractPersistable implements Labeled {

    private Chamber chamber;
    private TimeBucket timeBucket;
    private List<Activity> activityList = new ArrayList<>();
    private List<Chamber> otherChamberList = new ArrayList<>();
    private CapacityConstraintType chamberMaxCapacity = CapacityConstraintType.LARGE;

    public ChamberAssign() {
        // do nothing
    }

    public ChamberAssign(Chamber chamber) {
        this.chamber = chamber;
        this.otherChamberList = chamber.getPhase().getChamberList().stream().filter(otherChamber ->
                otherChamber.getName().equals(this.chamber.getName())).toList();
    }

    public Chamber getChamber() {
        return chamber;
    }

    public TimeBucket getTimeBucket() {
        return timeBucket;
    }

    public void decreaseCapacity() {
        this.chamberMaxCapacity = CapacityConstraintType.SMALL;
    }

    public void increaseCapacity() {
        this.chamberMaxCapacity = CapacityConstraintType.LARGE;
    }

}
