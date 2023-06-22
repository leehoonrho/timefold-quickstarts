package org.acme.optimizer.domain;

import java.time.LocalDate;

public class TimeBucket {

    private int index;
    private LocalDate date;

    public TimeBucket(int index, LocalDate date) {
        this.index = index;
        this.date = date;
    }

    @Override
    public String toString() {
        return index + " " + date;
    }

    public int getIndex() {
        return index;
    }

    public LocalDate getDate() {
        return date;
    }

}
