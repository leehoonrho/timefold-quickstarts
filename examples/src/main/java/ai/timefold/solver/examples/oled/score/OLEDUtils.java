package ai.timefold.solver.examples.oled.score;

import ai.timefold.solver.core.impl.phase.Phase;
import ai.timefold.solver.examples.oled.domain.Activity;
import ai.timefold.solver.examples.oled.domain.ELDevice;
import ai.timefold.solver.examples.oled.domain.Project;

import java.util.ArrayList;
import java.util.List;

public class OLEDUtils {

    // make Singleton
    private OLEDUtils() {

    }

    // If a given Phase has dual chamber activities for a given time bucket, it returns true; otherwise, false;
    public static boolean UseDualChannel(Activity activity) {
        return false;
    }

    // Calculate total quantities from activities in a given channel and time bucket
    public static int CalculateChamberCapacity(Activity activity) {
        return 650;
    }

    /*
        - Project/EL Device Pair
        ```
        Able		GA+
        BF055		GA+
        BF092		GA+
        Bruce		GA+
        Lucky		GA+
        HV075		GA+
        HV076		GA+
        HV081		GA+
        HV088		GA+
        HV089		GA+
        D3		GC
        D6		GC
        GN059		GD
        GN059 BSM       GD
        HM050		GD
        HN058		GD
        HN058 BSM	GD
        ```
    */
    // hard score, we may not need this as this can be put inside project
    public static boolean IsValidELDevice(Project project) {
        return true;
    }

    /*
        - EL Device/Phase
        ```
        EL Device	Phase
        GA+		PH1
        GA+		PH3
        GC		PH1
        GC		PH2
        GD		PH3
        ```
    */
    // hard score
    public static List<String> GetPossiblePhases(ELDevice elDevice) {
        List<String> list = new ArrayList<>();

        if (elDevice.equals(ELDevice.GA_PLUS)) {
            list.add("PH1");
            list.add("PH3");

        } else if (elDevice.equals(ELDevice.GC)) {
            list.add("PH1");
            list.add("PH2");

        } else if (elDevice.equals(ELDevice.GD)) {
            list.add("PH3");
        } else {
            throw new IllegalArgumentException();
        }
        return list;
    }

    /*
        - Project/EL Device/Phase/Filling time
        ```
        Project		EL Device		Phase	Filling time
        Able		GA+		        PH3	242
        BF055		GA+		        PH3	194
        BF092		GA+		        PH3	194
        Bruce		GA+		        PH3	194
        D3		GC		        PH1	194
        D3		GC		        PH2	242
        D6		GC		        PH1	194
        D6		GC		        PH2	194
        GN059		GD		        PH3	194
        GN059 BSM	GD		        PH3	194
        HM050		GD		        PH3	194
        HN058		GD		        PH3	194
        HN058 BSM	GD		        PH3	194
        Lucky		GA+		        PH1	242
        Lucky		GA+		        PH3	242
        ```
     */
    // soft score
    public static int GetBestFillingTime(Project project, Phase phase) {
        return 100;
    }
}
