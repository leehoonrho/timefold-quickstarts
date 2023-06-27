package org.acme.optimizer.domain;

import ai.timefold.solver.core.api.domain.solution.PlanningEntityCollectionProperty;
import ai.timefold.solver.core.api.domain.solution.PlanningScore;
import ai.timefold.solver.core.api.domain.solution.PlanningSolution;
import ai.timefold.solver.core.api.domain.solution.ProblemFactCollectionProperty;
import ai.timefold.solver.core.api.domain.valuerange.ValueRangeProvider;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;

import java.util.List;

@PlanningSolution
public class PlanResult {

    @ProblemFactCollectionProperty
    @ValueRangeProvider
    private List<TimeBucket> timeBucketList;
    @ProblemFactCollectionProperty
    @ValueRangeProvider
    private List<Resource> resourceList;
    @PlanningEntityCollectionProperty
    private List<Activity> activityList;

    @PlanningScore
    private HardSoftScore score;

    // No-arg constructor required for OptaPlanner
    public PlanResult() {
        // do nothing
    }

    public PlanResult(List<TimeBucket> timeBucketList, List<Resource> resourceList, List<Activity> activityList) {
        this.timeBucketList = timeBucketList;
        this.resourceList = resourceList;
        this.activityList = activityList;
    }

    public List<TimeBucket> getTimeBucketList() {
        return timeBucketList;
    }

    public List<Resource> getResourceList() {
        return resourceList;
    }

    public List<Activity> getActivityList() {
        return activityList;
    }

    public HardSoftScore getScore() {
        return score;
    }

}
