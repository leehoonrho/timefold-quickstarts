package ai.timefold.solver.examples.oled2.domain;

import java.util.List;

public class Project {

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
