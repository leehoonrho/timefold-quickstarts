package ai.timefold.solver.examples.oled.app;

import ai.timefold.solver.examples.cloudbalancing.app.CloudBalancingHelloWorld;
import ai.timefold.solver.examples.cloudbalancing.persistence.CloudBalanceSolutionFileIO;
import ai.timefold.solver.examples.cloudbalancing.swingui.CloudBalancingPanel;
import ai.timefold.solver.examples.common.app.CommonApp;
import ai.timefold.solver.examples.oled.domain.OledProjectSchedule;
import ai.timefold.solver.examples.oled.swingui.OledSchedulePanel;
import ai.timefold.solver.persistence.common.api.domain.solution.SolutionFileIO;

/**
 * For an easy example, look at {@link CloudBalancingHelloWorld} instead.
 */
public class OledSchedulingApp extends CommonApp<OledProjectSchedule> {

    public static final String SOLVER_CONFIG = "ai/timefold/solver/examples/oled/oledSolverConfigSimple.xml";
    public static final String DATA_DIR_NAME = "oled";

    public static void main(String[] args) {
        prepareSwingEnvironment();
        new OledSchedulingApp().init();
    }

    public OledSchedulingApp() {
        super("OLED Scheduling",
                "Schedule OLED projects to Phase/Chamber/TimeBuckets.\n\n" +
                        "Each project must have enough time buckets to complete orders.\n" +
                        "Each used phase/chamber have dedicated EL device/capacity constraints based on dual chamber uaage.",
                SOLVER_CONFIG, DATA_DIR_NAME,
                CloudBalancingPanel.LOGO_PATH);
    }

    @Override
    protected OledSchedulePanel createSolutionPanel() {
        return new OledSchedulePanel();
    }

    @Override
    public SolutionFileIO<OledProjectSchedule> createSolutionFileIO() {
        return new CloudBalanceSolutionFileIO();
    }

}
