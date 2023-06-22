package org.acme.optimizer.domain;

import java.util.List;

public class Resource {

    private String name;
    private Area area; // PH1, PH2, PH3
    private List<Item> itemList;
    private int capacity;
    private int simultaneousProductionCapacity;

    public Resource(String name, Area area, int capacity, int simultaneousProductionCapacity) {
        this.name = name;
        this.area = area;
        this.capacity = capacity;
        this.simultaneousProductionCapacity = simultaneousProductionCapacity;
    }

    @Override
    public String toString() {
        return name + "@" + area.getName();
    }

    public String getName() {
        return name;
    }

    public Area getArea() {
        return area;
    }

    public List<Item> getItemList() {
        return itemList;
    }

    public void setItemList(List<Item> itemList) {
        this.itemList = itemList;
    }

    public int getCapacity() {
        return capacity;
    }

    public int getSimultaneousProductionCapacity() {
        return simultaneousProductionCapacity;
    }

}
