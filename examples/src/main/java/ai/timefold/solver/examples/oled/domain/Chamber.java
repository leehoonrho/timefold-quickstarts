package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.examples.common.domain.AbstractPersistable;
import ai.timefold.solver.examples.common.swingui.components.Labeled;

import java.util.ArrayList;
import java.util.List;

public class Chamber extends AbstractPersistable implements Labeled {

    private Phase phase;
    private String name;
    private List<ChamberAssign> chamberAssignList = new ArrayList<>();
    private CapacityConstraint constraint; // slack variable

    public Chamber(String name, Phase phase) {
        this.name = name;
        this.phase = phase;
    }

    public String getName() {
        return name;
    }

    public Phase getPhase() {
        return phase;
    }

    public void setChamberAssignList(List<ChamberAssign> chamberAssignList) {
        this.chamberAssignList = chamberAssignList;
    }

    public List<ChamberAssign> getChamberAssignList() {
        return chamberAssignList;
    }


    @Override
    public String getLabel() {
        return Long.toString(id);
    }

    @Override
    public String toString() {
        return Long.toString(id);
    }
}
