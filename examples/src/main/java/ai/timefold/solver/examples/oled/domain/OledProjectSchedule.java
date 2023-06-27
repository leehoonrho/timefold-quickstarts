package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.core.api.domain.solution.PlanningSolution;
import ai.timefold.solver.examples.oled.domain.old.Chamber;
import ai.timefold.solver.examples.oled.domain.old.Phase;
import ai.timefold.solver.examples.oled.domain.old.Project;

import java.util.List;

@PlanningSolution
public class OledProjectSchedule {

    private List<TimeBucket> timeBucketList;

    private List<Project> projectList;

    private List<Phase> phaseList;

    private List<Chamber> chamberList;


}
