package ai.timefold.solver.examples.oled.domain;

public enum CapacityConstraintType {

    LARGE(700),
    SMALL(650);

    private int capacitySize;

    CapacityConstraintType(int capacitySize) {
        this.capacitySize = capacitySize;
    }

    int getCapacitySize() {
        return this.capacitySize;
    }
}
