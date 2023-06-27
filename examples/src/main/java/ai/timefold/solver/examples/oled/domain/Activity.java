package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.variable.ShadowVariable;
import ai.timefold.solver.examples.common.domain.AbstractPersistable;
import ai.timefold.solver.examples.common.swingui.components.Labeled;
import ai.timefold.solver.examples.oled.domain.solver.CapacittyUpdatingVariableListener;

@PlanningEntity
public class Activity extends AbstractPersistable implements Labeled {

    private ChamberAssign chamberAssign;
    private Order order;
    private Integer quantity;

    public Activity() {

    }

    public Activity(ChamberAssign chamberAssign, Order order) {
        this.chamberAssign = chamberAssign;
        this.order = order;
    }

    @Override
    @ShadowVariable(variableListenerClass = CapacittyUpdatingVariableListener.class,
            sourceVariableName = "chamberAssign")
    public ChamberAssign getChamberAssign() {
        return chamberAssign;
    }

    public Order getOrder() {
        return order;
    }

    public void beforeAssign() {

    }

    public void afterAssign() {

    }

}
