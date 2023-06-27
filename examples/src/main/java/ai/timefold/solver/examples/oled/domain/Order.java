package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.examples.common.domain.AbstractPersistable;
import ai.timefold.solver.examples.common.swingui.components.Labeled;

import java.time.LocalDate;

public class Order extends AbstractPersistable implements Labeled {

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
