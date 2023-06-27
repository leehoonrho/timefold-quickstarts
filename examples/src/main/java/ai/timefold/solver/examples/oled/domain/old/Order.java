package ai.timefold.solver.examples.oled.domain.old;

import ai.timefold.solver.examples.common.domain.AbstractPersistable;

import java.time.LocalDate;

public class Order extends AbstractPersistable {

    private Project project;
    private int qty;
    private LocalDate dueDate;

}
