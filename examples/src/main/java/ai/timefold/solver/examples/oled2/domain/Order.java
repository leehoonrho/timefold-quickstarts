package ai.timefold.solver.examples.oled2.domain;

import java.time.LocalDate;

public class Order {

    private Project project;
    private LocalDate dueDate;

    public Order() {
        // do nothing
    }

    public Order(Project project, LocalDate dueDate) {
        this.project = project;
        this.dueDate = dueDate;
    }

    public Project getProject() {
        return project;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }
}
