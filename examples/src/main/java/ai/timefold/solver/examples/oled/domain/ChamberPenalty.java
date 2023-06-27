package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.examples.common.domain.AbstractPersistable;

public class ChamberPenalty extends AbstractPersistable {
    private ChamberPenaltyType chamberPenaltyType;
    private Project project;

    public ChamberPenaltyType getRoomPenaltyType() {
        return chamberPenaltyType;
    }

    public void setRoomPenaltyType(ChamberPenaltyType roomPenaltyType) {
        this.chamberPenaltyType = chamberPenaltyType;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    @Override
    public String toString() {
        return chamberPenaltyType + "@" + project.getId();
    }

    // ************************************************************************
    // With methods
    // ************************************************************************

    public ChamberPenalty withId(long id) {
        this.setId(id);
        return this;
    }

    public ChamberPenalty withRoomPenaltyType(ChamberPenaltyType type) {
        this.setRoomPenaltyType(type);
        return this;
    }

    public ChamberPenalty withProject(Project project) {
        this.setProject(project);
        return this;
    }

}
