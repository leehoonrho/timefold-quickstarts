package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.examples.common.domain.AbstractPersistable;
import ai.timefold.solver.examples.common.swingui.components.Labeled;

import java.util.List;

public class Phase extends AbstractPersistable implements Labeled {

    private String name;
    private List<Chamber> chamberList;
    private List<ElDevice> elDeviceList;
    private List<Activity> activityList;

    public Phase(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setChamberList(List<Chamber> chamberList) {
        this.chamberList = chamberList;
    }

    public List<Chamber> getChamberList() {
        return chamberList;
    }

    public void setElDeviceList(List<ElDevice> elDeviceList) {
        this.elDeviceList = elDeviceList;
    }

    public List<ElDevice> getElDeviceList() {
        return elDeviceList;
    }

    public void setActivityList(List<Activity> activityList) {
        this.activityList = activityList;
    }

    public List<Activity> getActivityList() {
        return activityList;
    }

}
