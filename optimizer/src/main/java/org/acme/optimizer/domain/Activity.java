package org.acme.optimizer.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.lookup.PlanningId;
import ai.timefold.solver.core.api.domain.variable.PlanningVariable;

@PlanningEntity
public class Activity {

    @PlanningId
    private Long id;

    private Item item;
    private Order order;
    private int dueDate;
    private int qty;
    private int capacity;

    @PlanningVariable
    private TimeBucket timeBucket;
    @PlanningVariable
    private Resource resource;

    // No-arg constructor required for OptaPlanner
    public Activity() {
        // do nothing
    }

    public Activity(long id, Item item, Order order, int dueDate, int qty, int capacity) {
        this.id = id;
        this.item = item;
        this.order = order;
        this.dueDate = dueDate;
        this.qty = qty;
        this.capacity = capacity;
    }

    public Activity(long id, Item item, Order order, int dueDate, int qty, int capacity, TimeBucket timeBucket, Resource resource) {
        this(id, item, order, dueDate, qty, capacity);
        this.timeBucket = timeBucket;
        this.resource = resource;
    }

    @Override
    public String toString() {
        return "Activity" + id + " : " + order.getId() + " - " + item.getName();
    }

    public Long getId() {
        return id;
    }

    public Item getItem() {
        return item;
    }

    public Order getOrder() {
        return order;
    }

    public int getDueDate() {
        return dueDate;
    }

    public int getQty() {
        return qty;
    }

    public int getCapacity() {
        return capacity;
    }

    public TimeBucket getTimeBucket() {
        return timeBucket;
    }

    public void setTimeBucket(TimeBucket timeBucket) {
        this.timeBucket = timeBucket;
    }

    public Resource getResource() {
        return resource;
    }

    public void setResource(Resource resource) {
        this.resource = resource;
    }

    public String getResourceName() {
        return resource.getName();
    }

}
