package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.lookup.PlanningId;
import ai.timefold.solver.core.api.domain.variable.PlanningVariable;

@PlanningEntity
public class Activity {


    @PlanningId
    private Long id;


    private Project project;
    private int qty;

    @PlanningVariable
    private Period period;
    @PlanningVariable
    private Chamber chamger;
}
