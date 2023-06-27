package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.examples.common.domain.AbstractPersistable;
import ai.timefold.solver.examples.common.swingui.components.Labeled;

public class Recipe extends AbstractPersistable implements Labeled {

    private ElDevice elDevice;
    private Project project;

    public Recipe(ElDevice elDevice, Project project) {
        this.elDevice = elDevice;
        this.project = project;
    }

    public ElDevice getElDevice() {
        return elDevice;
    }

    public Project getProject() {
        return project;
    }

}
