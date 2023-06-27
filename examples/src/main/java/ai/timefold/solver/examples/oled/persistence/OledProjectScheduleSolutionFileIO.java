package ai.timefold.solver.examples.oled.persistence;

import ai.timefold.solver.examples.oled.domain.OledProjectSchedule;
import ai.timefold.solver.jackson.impl.domain.solution.JacksonSolutionFileIO;

public class OledProjectScheduleSolutionFileIO extends JacksonSolutionFileIO<OledProjectSchedule> {

    public OledProjectScheduleSolutionFileIO() {
        super(OledProjectSchedule.class);
    }
}
