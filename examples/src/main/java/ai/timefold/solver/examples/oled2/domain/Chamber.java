package ai.timefold.solver.examples.oled2.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;

import java.util.ArrayList;
import java.util.List;

@PlanningEntity
public class Chamber {

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

}
