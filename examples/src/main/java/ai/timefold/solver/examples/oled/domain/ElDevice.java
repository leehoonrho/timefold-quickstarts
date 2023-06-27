package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.examples.common.domain.AbstractPersistable;
import ai.timefold.solver.examples.common.swingui.components.Labeled;

import java.util.List;

public class ElDevice extends AbstractPersistable implements Labeled {

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
