package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.examples.common.domain.AbstractPersistable;

public class PeriodPenalty extends AbstractPersistable {

    public PeriodPenalty() {
    }

    public PeriodPenalty(long id, Project leftProject, Project rightProject, PeriodPenaltyType periodPenaltyType) {
        super(id);
        this.leftProject = leftProject;
        this.rightProject = rightProject;
        this.periodPenaltyType = periodPenaltyType;
    }

    private PeriodPenaltyType periodPenaltyType;
    private Project leftProject;
    private Project rightProject;

    public PeriodPenaltyType getPeriodPenaltyType() {
        return periodPenaltyType;
    }

    public void setPeriodPenaltyType(PeriodPenaltyType periodPenaltyType) {
        this.periodPenaltyType = periodPenaltyType;
    }

    public Project getLeftTopic() {
        return leftProject;
    }

    public void setLeftTopic(Project leftTopic) {
        this.leftProject = leftTopic;
    }

    public Project getRightTopic() {
        return rightProject;
    }

    public void setRightTopic(Project rightTopic) {
        this.rightProject = rightTopic;
    }

    @Override
    public String toString() {
        return periodPenaltyType + "@" + leftProject.getId() + "&" + rightProject.getId();
    }

}
