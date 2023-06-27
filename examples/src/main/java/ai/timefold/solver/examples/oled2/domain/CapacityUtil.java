package ai.timefold.solver.examples.oled2.domain;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CapacityUtil {

    private CapacityUtil() {
        // private constructor
    }

    public static boolean anotherChamberInUse(ChamberAssign chamberAssign) {
        Chamber chamber = chamberAssign.getChamber();
        List<Chamber> otherChamberList = chamber.getPhase().getChamberList().stream().filter(otherChamber ->
                !otherChamber.getName().equals(chamber.getName())).toList();
        TimeBucket timeBucket = chamberAssign.getTimeBucket();
        Map<TimeBucket, List<ChamberAssign>> map = new HashMap<>();

        for (Chamber c : otherChamberList) {
            for (ChamberAssign ca : c.getChamberAssignList()) {
                List<ChamberAssign> assignList =  map.get(ca.getTimeBucket());

                if (assignList == null) {
                    assignList = new ArrayList<>();
                }

                assignList.add(ca);
                map.put(ca.getTimeBucket(), assignList);
            }
        }

        return map.get(timeBucket).size() > 0;
    }

    public static List<ChamberAssign> getMyChamberAssignList(ChamberAssign chamberAssign) {
        return chamberAssign.getChamber().getChamberAssignList();
    }

    public static List<ChamberAssign> getOtherChamberAssignList(ChamberAssign chamberAssign) {
        Chamber chamber = chamberAssign.getChamber();
        List<Chamber> otherChamberList = chamber.getPhase().getChamberList().stream().filter(otherChamber ->
                !otherChamber.getName().equals(chamber.getName())).toList();
        TimeBucket timeBucket = chamberAssign.getTimeBucket();
        Map<TimeBucket, List<ChamberAssign>> map = new HashMap<>();

        for (Chamber c : otherChamberList) {
            for (ChamberAssign ca : c.getChamberAssignList()) {
                List<ChamberAssign> assignList =  map.get(ca.getTimeBucket());

                if (assignList == null) {
                    assignList = new ArrayList<>();
                }

                assignList.add(ca);
                map.put(ca.getTimeBucket(), assignList);
            }
        }

        return map.get(timeBucket);
    }

    public static void updateCapacity(ChamberAssign chamberAssign) {
        if (anotherChamberInUse(chamberAssign)) {
            chamberAssign.decreaseCapacity();
            getOtherChamberAssignList(chamberAssign).forEach(ChamberAssign::decreaseCapacity);
        } else {
            chamberAssign.increaseCapacity();
        }
    }

}
