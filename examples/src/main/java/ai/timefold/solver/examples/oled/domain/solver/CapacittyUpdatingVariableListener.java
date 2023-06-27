package ai.timefold.solver.examples.oled.domain.solver;

import ai.timefold.solver.core.api.domain.variable.VariableListener;
import ai.timefold.solver.core.api.score.director.ScoreDirector;
import ai.timefold.solver.examples.oled.domain.ChamberAssign;
import ai.timefold.solver.examples.oled.domain.old.ProjectSchedule;

public class CapacittyUpdatingVariableListener implements VariableListener<ProjectSchedule, ChamberAssign> {

    @Override
    public void beforeEntityAdded(ScoreDirector<ProjectSchedule> scoreDirector, ChamberAssign chamberAssign) {
        // Do nothing
    }

    @Override
    public void afterEntityAdded(ScoreDirector<ProjectSchedule> scoreDirector, ChamberAssign chamberAssign) {
        updateCapacity(scoreDirector, chamberAssign);
    }

    @Override
    public void beforeVariableChanged(ScoreDirector<ProjectSchedule> scoreDirector, ChamberAssign chamberAssign) {
        // Do nothing
    }

    @Override
    public void afterVariableChanged(ScoreDirector<ProjectSchedule> scoreDirector, ChamberAssign chamberAssign) {
        updateCapacity(scoreDirector, chamberAssign);
    }

    @Override
    public void beforeEntityRemoved(ScoreDirector<ProjectSchedule> scoreDirector, ChamberAssign chamberAssign) {
        // Do nothing
    }

    @Override
    public void afterEntityRemoved(ScoreDirector<ProjectSchedule> scoreDirector, ChamberAssign chamberAssign) {
        // Do nothing
    }

    protected void updateCapacity(ScoreDirector<ProjectSchedule> scoreDirector, ChamberAssign chamberAssign) {
        scoreDirector.beforeVariableChanged(chamberAssign, "capacity");
        CapacityUtil.updateCapacity(chamberAssign);
        scoreDirector.afterVariableChanged(chamberAssign, "capacity");
    }

}
