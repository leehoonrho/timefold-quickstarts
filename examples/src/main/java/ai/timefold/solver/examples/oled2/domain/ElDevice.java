package ai.timefold.solver.examples.oled2.domain;

import java.util.List;

public class ElDevice {

    private String name;
    private List<Recipe> recipeList;

    public ElDevice(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setRecipeList(List<Recipe> recipeList) {
        this.recipeList = recipeList;
    }

    public List<Recipe> getRecipeList() {
        return recipeList;
    }

}
