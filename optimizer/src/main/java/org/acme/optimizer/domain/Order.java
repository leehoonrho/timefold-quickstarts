package org.acme.optimizer.domain;

import java.time.LocalDate;

public class Order {

    private String id;
    private Item item;
    private int qty;
    private LocalDate dueDate;

    // No-arg constructor required for OptaPlanner
    public Order() {
    }

    public Order(String id, Item item, int qty, LocalDate dueDate) {
        this.id = id;
        this.item = item;
        this.qty = qty;
        this.dueDate = dueDate;
    }

    @Override
    public String toString() {
        return id + " : " + item + " * " + qty + "QTY";
    }

    public String getId() {
        return id;
    }

    public Item getItem() {
        return item;
    }

    public int getQty() {
        return qty;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        } else if (o instanceof Order) {
            Order other = (Order) o;
            return getId().equals(other.getId());
        } else {
            return false;
        }
    }

}
