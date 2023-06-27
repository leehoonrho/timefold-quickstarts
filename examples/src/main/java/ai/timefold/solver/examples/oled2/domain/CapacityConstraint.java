package ai.timefold.solver.examples.oled2.domain;

import java.util.ArrayList;
import java.util.List;

public class CapacityConstraint {

    private CapacityConstraintType constraintType;
    private TimeBucket timeBucket;
    private Chamber chamber;
    private List<Activity> activityList = new ArrayList<>();

    private void evaluate() {

    }

    public int getActivityCount() {
        return activityList.size();
    }

}
