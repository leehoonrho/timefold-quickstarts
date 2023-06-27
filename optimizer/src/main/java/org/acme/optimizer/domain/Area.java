package org.acme.optimizer.domain;

public class Area {

    private String name;

    public Area(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        } else if (o instanceof Area) {
            Area other = (Area) o;
            return getName().equals(other.getName());
        } else {
            return false;
        }
    }

}
