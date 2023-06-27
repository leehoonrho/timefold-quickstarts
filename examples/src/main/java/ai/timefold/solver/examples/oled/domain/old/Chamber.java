package ai.timefold.solver.examples.oled.domain.old;

import ai.timefold.solver.examples.common.domain.AbstractPersistable;
import ai.timefold.solver.examples.common.swingui.components.Labeled;

public class Chamber extends AbstractPersistable implements Labeled {

    private int capacity;
    private int penalty;

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public int getPenalty() {
        return penalty;
    }

    public void setPenalty(int penalty) {
        this.penalty = penalty;
    }

    @Override
    public String getLabel() {
        return Long.toString(id);
    }

    @Override
    public String toString() {
        return Long.toString(id);
    }

    // ************************************************************************
    // With methods
    // ************************************************************************

    public Chamber withId(long id) {
        this.setId(id);
        return this;
    }

    public Chamber withCapacity(int capacity) {
        this.setCapacity(capacity);
        return this;
    }

    public Chamber withPenalty(int penalty) {
        this.setPenalty(penalty);
        return this;
    }

}
