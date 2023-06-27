package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.examples.common.domain.AbstractPersistable;
import ai.timefold.solver.examples.common.swingui.components.Labeled;

public class Project extends AbstractPersistable implements Labeled {

    private String name;
    private Recipe recipe;

    public Project(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public Recipe getRecipe() {
        return recipe;
    }

}
