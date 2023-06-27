package org.acme.optimizer;

import ai.timefold.solver.core.config.constructionheuristic.ConstructionHeuristicPhaseConfig;
import ai.timefold.solver.core.config.constructionheuristic.ConstructionHeuristicType;
import ai.timefold.solver.core.config.localsearch.LocalSearchPhaseConfig;
import ai.timefold.solver.core.config.localsearch.LocalSearchType;
import org.acme.optimizer.domain.*;
import org.acme.optimizer.solver.PlanConstraintProvider;
import ai.timefold.solver.core.api.solver.Solver;
import ai.timefold.solver.core.api.solver.SolverFactory;
import ai.timefold.solver.core.config.solver.SolverConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.Duration;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

public class PlanResultApp {

    private static final Logger LOGGER = LoggerFactory.getLogger(PlanResultApp.class);

    public static void main(String[] args) {
        boolean useMultipleAlgorithm = false;
        SolverFactory<PlanResult> solverFactory;

        if (useMultipleAlgorithm) {
            SolverConfig solverConfig = new SolverConfig();
            solverConfig.withSolutionClass(PlanResult.class);
            solverConfig.withEntityClasses(Activity.class);
            solverConfig.withConstraintProviderClass(PlanConstraintProvider.class);
            // Configure multiple algorithms
            solverConfig.withPhases(createConstructionHeuristicPhaseConfig(), createLocalSearchPhaseConfig());
            solverConfig.withTerminationSpentLimit(Duration.ofSeconds(10));

            solverFactory = SolverFactory.create(solverConfig);
        } else {
            solverFactory = SolverFactory.create(new SolverConfig()
                    .withSolutionClass(PlanResult.class)
                    .withEntityClasses(Activity.class)
                    .withConstraintProviderClass(PlanConstraintProvider.class)
                    .withTerminationSpentLimit(Duration.ofSeconds(10)));
        }

        // Load the problem
        PlanResult problem = generateDemoData();

        // Solve the problem
        Solver<PlanResult> solver = solverFactory.buildSolver();
        PlanResult solution = solver.solve(problem);

        // Visualize the solution
        printTimetable(solution);
    }

    private static ConstructionHeuristicPhaseConfig createConstructionHeuristicPhaseConfig() {
        ConstructionHeuristicPhaseConfig constructionHeuristicPhaseConfig = new ConstructionHeuristicPhaseConfig();
        constructionHeuristicPhaseConfig.setConstructionHeuristicType(ConstructionHeuristicType.FIRST_FIT);
        return constructionHeuristicPhaseConfig;
    }

    private static LocalSearchPhaseConfig createLocalSearchPhaseConfig() {
        LocalSearchPhaseConfig localSearchPhaseConfig = new LocalSearchPhaseConfig();
        localSearchPhaseConfig.setLocalSearchType(LocalSearchType.TABU_SEARCH);
        return localSearchPhaseConfig;
    }

    public static PlanResult generateDemoData() {
        List<TimeBucket> timeBucketList = new ArrayList<>(10);
        timeBucketList.add(new TimeBucket(0, LocalDate.of(2023, 1, 1)));
        timeBucketList.add(new TimeBucket(1, LocalDate.of(2023, 1, 2)));
        timeBucketList.add(new TimeBucket(2, LocalDate.of(2023, 1, 3)));
        timeBucketList.add(new TimeBucket(3, LocalDate.of(2023, 1, 4)));
        timeBucketList.add(new TimeBucket(4, LocalDate.of(2023, 1, 5)));
        timeBucketList.add(new TimeBucket(5, LocalDate.of(2023, 1, 6)));
        timeBucketList.add(new TimeBucket(6, LocalDate.of(2023, 1, 7)));
        timeBucketList.add(new TimeBucket(7, LocalDate.of(2023, 1, 8)));
        timeBucketList.add(new TimeBucket(8, LocalDate.of(2023, 1, 9)));
        timeBucketList.add(new TimeBucket(9, LocalDate.of(2023, 1, 10)));

        Map<LocalDate, Integer> timeBucketMap = new HashMap<>();
        for (TimeBucket timeBucket : timeBucketList) {
            timeBucketMap.put(timeBucket.getDate(), timeBucket.getIndex());
        }

        Area area1 = new Area("PH1");
        Area area2 = new Area("PH2");
        Area area3 = new Area("PH3");

        Item item1 = new Item("Lucky");
        Item item2 = new Item("D3");
        Item item3 = new Item("D6");
        Item item4 = new Item("HV051");
        Item item5 = new Item("HV052");
        Item item6 = new Item("HN058");
        Item item7 = new Item("HN058 BSM");
        Item item8 = new Item("HN059");
        Item item9 = new Item("HN059 BSM");
        Item item10 = new Item("HM050");
        Item item11 = new Item("Boston");
        Item item12 = new Item("Barret");
        Item item13 = new Item("BF092");
        Item item14 = new Item("BF055");
        Item item15 = new Item("Bruce");
        Item item16 = new Item("Able");

        List<Resource> resourceList = new ArrayList<>();

        Resource resource1 = new Resource("AB", area1, 700, 650);
        List<Item> resource1ItemList = new ArrayList<>();
        resource1ItemList.add(item1);
        resource1ItemList.add(item2);
        resource1ItemList.add(item3);
        resource1.setItemList(resource1ItemList);
        resourceList.add(resource1);

        Resource resource2 = new Resource("CD", area1, 700, 650);
        List<Item> resource2ItemList = new ArrayList<>();
        resource2ItemList.add(item2);
        resource2ItemList.add(item3);
        resource2.setItemList(resource2ItemList);
        resourceList.add(resource2);

        Resource resource3 = new Resource("AB", area2, 700, 650);
        List<Item> resource3ItemList = new ArrayList<>();
        resource3ItemList.add(item3);
        resource3.setItemList(resource3ItemList);
        resourceList.add(resource3);

        Resource resource4 = new Resource("CD", area2, 700, 650);
        List<Item> resource4ItemList = new ArrayList<>();
        resource4ItemList.add(item2);
        resource4ItemList.add(item3);
        resource4.setItemList(resource4ItemList);
        resourceList.add(resource4);

        Resource resource5 = new Resource("AB", area3, 700, 650);
        List<Item> resource5ItemList = new ArrayList<>();
        resource5ItemList.add(item4);
        resource5ItemList.add(item5);
        resource5ItemList.add(item6);
        resource5ItemList.add(item7);
        resource5ItemList.add(item8);
        resource5ItemList.add(item9);
        resource5ItemList.add(item10);
        resource5ItemList.add(item11);
        resource5ItemList.add(item12);
        resource5.setItemList(resource5ItemList);
        resourceList.add(resource5);

        Resource resource6 = new Resource("CD", area3, 700, 650);
        List<Item> resource6ItemList = new ArrayList<>();
        resource6ItemList.add(item1);
        resource6ItemList.add(item13);
        resource6ItemList.add(item14);
        resource6ItemList.add(item15);
        resource6ItemList.add(item16);
        resource6.setItemList(resource6ItemList);
        resourceList.add(resource6);

        List<Order> orderList = new ArrayList<>();
        orderList.add(new Order("SO1", new Item("D6"), 2000, LocalDate.of(2023, 1, 3)));
        orderList.add(new Order("SO2", new Item("D3"), 3100, LocalDate.of(2023, 1, 10)));
        orderList.add(new Order("SO3", new Item("D6"), 1900, LocalDate.of(2023, 1, 5)));

        List<Activity> activityList = new ArrayList<>();

        int sequence = 0;

        for (Order order : orderList) {
            int qty = order.getQty();
            int lotSize = 50;

            int partialActivity = qty / lotSize;
            int remainActivity = qty % lotSize;

            for (int i = 0; i < partialActivity; i++) {
                activityList.add(new Activity(sequence++, order.getItem(), order, timeBucketMap.get(order.getDueDate()), lotSize, lotSize));
            }

            if (remainActivity > 0) {
                activityList.add(new Activity(sequence++, order.getItem(), order, timeBucketMap.get(order.getDueDate()), remainActivity, remainActivity));
            }
        }

        return new PlanResult(timeBucketList, resourceList, activityList);
    }

    private static void printTimetable(PlanResult planResult) {
        LOGGER.info("");
        List<TimeBucket> timeBucketList = planResult.getTimeBucketList();
        List<Resource> resourceList = planResult.getResourceList();
        List<Activity> activityList = planResult.getActivityList();
        Map<Resource, Map<TimeBucket, List<Activity>>> activityMap = activityList.stream()
                .filter(activity -> activity.getItem() != null && activity.getOrder() != null)
                .collect(Collectors.groupingBy(Activity::getResource, Collectors.groupingBy(Activity::getTimeBucket)));
        LOGGER.info("│            │ " + timeBucketList.stream().map(timeBucket -> String.format("%-10s", "Index " + timeBucket.getIndex())).collect(Collectors.joining(" │ ")) + " │");
        LOGGER.info("│            │ " + timeBucketList.stream().map(timeBucket -> String.format("%-10s", timeBucket.getDate())).collect(Collectors.joining(" │ ")) + " │");
        LOGGER.info("├" + "────────────│".repeat(timeBucketList.size() + 1));

        for (Resource resource : resourceList) {
            List<Map<Order, Integer>> cellList = timeBucketList.stream().map(timeBucket -> {
                Map<TimeBucket, List<Activity>> byTimeBucketMap = activityMap.get(resource);

                if (byTimeBucketMap == null) {
                    return Collections.<Order, Integer>emptyMap();
                }

                List<Activity> cellActivityList = byTimeBucketMap.get(timeBucket);

                if (cellActivityList == null) {
                    return Collections.<Order, Integer>emptyMap();
                }

                Map<Order, Integer> cellActivityMap = new HashMap<>();

                for (Activity activity : cellActivityList) {
                    if (!cellActivityMap.containsKey(activity.getOrder())) {
                        cellActivityMap.put(activity.getOrder(), activity.getQty());
                        continue;
                    }

                    int totalQty = cellActivityMap.get(activity.getOrder());
                    totalQty += activity.getQty();
                    cellActivityMap.put(activity.getOrder(), totalQty);
                }

                return cellActivityMap;
            }).toList();

            LOGGER.info("│ " + String.format("%-10s", resource.getArea().getName() + " | " + resource.getName()) + " │ " + cellList.stream().map(cellActivityList -> String.format("%-10s", cellActivityList.entrySet().stream().map(cellData ->
                    cellData.getKey().getId() + " : " + cellData.getKey().getItem().getName()).collect(Collectors.joining(", ")))).collect(Collectors.joining(" │ ")) + " │");
            LOGGER.info("│ " + String.format("%-10s", " ") + " │ " + cellList.stream().map(cellActivityList -> String.format("%-10s", cellActivityList.entrySet().stream().map(cellData ->
                    cellData.getValue().toString()).collect(Collectors.joining(", ")))).collect(Collectors.joining(" │ ")) + " │");
            LOGGER.info("├" + "────────────│".repeat(timeBucketList.size() + 1));
        }

        List<Activity> unassignedActivities = activityList.stream().filter(activity -> activity.getItem() == null || activity.getOrder() == null).toList();
        if (!unassignedActivities.isEmpty()) {
            LOGGER.info("");
            LOGGER.info("Unassigned activities");
            for (Activity activity : unassignedActivities) {
                LOGGER.info(" - " + activity.getItem() + " - " + activity.getOrder());
            }
        }
    }

}
