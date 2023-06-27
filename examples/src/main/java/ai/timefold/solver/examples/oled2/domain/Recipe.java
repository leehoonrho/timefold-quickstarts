package ai.timefold.solver.examples.oled2.domain;

public class Recipe {

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
