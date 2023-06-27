package ai.timefold.solver.examples.oled2.domain;

public class Activity {

    private ChamberAssign chamberAssign;
    private Order order;
    private int maxCapacity;

    public Activity() {

    }

    public Activity(ChamberAssign chamberAssign, Order order) {
        this.chamberAssign = chamberAssign;
        this.order = order;
    }

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
