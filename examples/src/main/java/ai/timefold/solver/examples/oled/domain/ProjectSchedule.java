package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.core.api.domain.solution.PlanningSolution;
import ai.timefold.solver.examples.examination.domain.Period;

import java.util.List;

@PlanningSolution
public class ProjectSchedule {

    private List<Period> periodList;

    private List<Project> projectList;

    private List<Phase> phaseList;

    private List<Chamber> chamberList;


}
