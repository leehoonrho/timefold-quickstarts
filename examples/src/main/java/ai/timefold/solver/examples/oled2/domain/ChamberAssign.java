package ai.timefold.solver.examples.oled2.domain;

import java.util.ArrayList;
import java.util.List;

public class ChamberAssign {

    private Chamber chamber;
    private TimeBucket timeBucket;
    private List<Activity> activityList = new ArrayList<>();
    private List<Chamber> otherChamberList = new ArrayList<>();
    private int chamberMaxCapacity = CapacityConstraintType.LARGE;

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
