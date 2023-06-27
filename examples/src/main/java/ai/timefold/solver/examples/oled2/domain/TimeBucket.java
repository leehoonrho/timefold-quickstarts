package ai.timefold.solver.examples.oled2.domain;

import java.time.LocalDate;

public class TimeBucket {

    private LocalDate date;

    public TimeBucket(LocalDate date) {
        this.date = date;
    }

    public LocalDate getDate() {
        return date;
    }

}
