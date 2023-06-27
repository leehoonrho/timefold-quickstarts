package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.examples.common.domain.AbstractPersistable;

import java.time.LocalDate;

public class TimeBucket {extends AbstractPersistable implements Labeled {

    private LocalDate date;

    public TimeBucket(LocalDate date) {
        this.date = date;
    }

    public LocalDate getDate() {
        return date;
    }

}
