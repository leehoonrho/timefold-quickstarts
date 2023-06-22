package org.acme.optimizer.domain;

public class Item {

    private String name;

    public Item(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return name;
    }

    public String getName() {
        return name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        } else if (o instanceof Item) {
            Item other = (Item) o;
            return getName().equals(other.getName());
        } else {
            return false;
        }
    }

}
