package org.acme.schooltimetabling;

import ai.timefold.solver.core.api.score.ScoreExplanation;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.solver.SolutionManager;
import ai.timefold.solver.core.api.solver.Solver;
import ai.timefold.solver.core.api.solver.SolverFactory;
import ai.timefold.solver.core.config.constructionheuristic.ConstructionHeuristicPhaseConfig;
import ai.timefold.solver.core.config.constructionheuristic.ConstructionHeuristicType;
import ai.timefold.solver.core.config.localsearch.LocalSearchPhaseConfig;
import ai.timefold.solver.core.config.localsearch.LocalSearchType;
import ai.timefold.solver.core.config.phase.PhaseConfig;
import ai.timefold.solver.core.config.solver.SolverConfig;
import ai.timefold.solver.core.config.solver.termination.TerminationConfig;
import org.acme.schooltimetabling.domain.Lesson;
import org.acme.schooltimetabling.domain.Room;
import org.acme.schooltimetabling.domain.TimeTable;
import org.acme.schooltimetabling.domain.Timeslot;
import org.acme.schooltimetabling.solver.TimeTableConstraintProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.DayOfWeek;
import java.time.Duration;
import java.time.LocalTime;
import java.util.*;
import java.util.stream.Collectors;

public class TimeTableApp2 {

    private static final Logger LOGGER = LoggerFactory.getLogger(TimeTableApp2.class);

    public static void main(String[] args) {
        boolean createFromXmlResource = true; boolean usePhaseConfig = false;
//        boolean createFromXmlResource = false; boolean usePhaseConfig = true;
        boolean explainScore = false;

        SolverFactory<TimeTable> solverFactory;
        if (createFromXmlResource) {
            // https://timefold.ai/xsd/solver/solver.xsd
            solverFactory = SolverFactory.createFromXmlResource(
                    "org/acme/schooltimetabling/solver/solverConfig.xml"
//                    "org/acme/schooltimetabling/solver/solverConfigNoChangePhase.xml"
            );
        } else {
            if (usePhaseConfig) {
                SolverConfig solverConfig = new SolverConfig();
                solverConfig.withSolutionClass(TimeTable.class);
                solverConfig.withEntityClasses(Lesson.class);
                solverConfig.withConstraintProviderClass(TimeTableConstraintProvider.class);

                // Configure multiple algorithms
                solverConfig.withPhases(
                        createConstructionHeuristicPhaseConfig(
                                ConstructionHeuristicType.FIRST_FIT,
                                new TerminationConfig().withSecondsSpentLimit(Long.valueOf("5"))
                        ),

                        createLocalSearchPhaseConfig(
                                LocalSearchType.LATE_ACCEPTANCE,
                                new TerminationConfig().withMinutesSpentLimit(Long.valueOf("1"))
                        ),
                        createLocalSearchPhaseConfig(
                                LocalSearchType.TABU_SEARCH,
                                new TerminationConfig().withMinutesSpentLimit(Long.valueOf("1"))
                        )
                );

//                List<PhaseConfig> phaseConfigList = new ArrayList<>();
//                phaseConfigList.add(
//                        createConstructionHeuristicPhaseConfig(
//                                ConstructionHeuristicType.FIRST_FIT,
//                                new TerminationConfig().withSecondsSpentLimit(Long.valueOf("5"))
//                        ));
//                phaseConfigList.add(
//                        createLocalSearchPhaseConfig(
//                                LocalSearchType.LATE_ACCEPTANCE,
//                                new TerminationConfig().withMinutesSpentLimit(Long.valueOf("1"))
//                        ));
//                phaseConfigList.add(
//                        createLocalSearchPhaseConfig(
//                                LocalSearchType.TABU_SEARCH,
//                                new TerminationConfig().withMinutesSpentLimit(Long.valueOf("1"))
//                        ));
//                solverConfig.withPhaseList(phaseConfigList);

                // It's recommended to run for at least 5 minutes ("5m") otherwise.
//                solverConfig.withTerminationSpentLimit(Duration.ofSeconds(5));
                solverConfig.withTerminationSpentLimit(Duration.ofMinutes(5));
//                solverConfig.withTerminationSpentLimit(Duration.ofMinutes(20));
                solverFactory = SolverFactory.create(solverConfig);
            }
            else {
                solverFactory = SolverFactory.create(new SolverConfig()
                        .withSolutionClass(TimeTable.class)
                        .withEntityClasses(Lesson.class)
                        .withConstraintProviderClass(TimeTableConstraintProvider.class)
                        // The solver runs only for 5 seconds on this small dataset.
                        // It's recommended to run for at least 5 minutes ("5m") otherwise.
                        .withTerminationSpentLimit(Duration.ofSeconds(5))
//                        .withTerminationSpentLimit(Duration.ofMinutes(5))
                );
            }
        }

        // Load the problem
        TimeTable problem = generateDemoData();
        if (problem.getScore() != null) {
            LOGGER.info("|" + "------------ problem score|");
            LOGGER.info(problem.getScore().toString());
        }

        // Solve the problem
        Solver<TimeTable> solver = solverFactory.buildSolver();
        TimeTable solution = solver.solve(problem);

        // Visualize the solution
        printTimetable(solution);

        if (solution.getScore() != null) {
            LOGGER.info("");
            LOGGER.info("|" + "------------ solution feasible|");
            LOGGER.info(Boolean.toString(solution.getScore().isFeasible()));
            LOGGER.info("|" + "------------ solution score|");
            LOGGER.info(solution.getScore().toString());
            if (explainScore) {
                SolutionManager<TimeTable, HardSoftScore> scoreManager = SolutionManager.create(solverFactory);
                ScoreExplanation<TimeTable, HardSoftScore> scoreExplanation = scoreManager.explain(solution);
                LOGGER.info("|" + "------------ score summary|");
                LOGGER.info(scoreExplanation.getSummary());
            }
        }

    }
    private static ConstructionHeuristicPhaseConfig createConstructionHeuristicPhaseConfig(
            ConstructionHeuristicType constructionHeuristicType,
            TerminationConfig terminationConfig) {
        ConstructionHeuristicPhaseConfig constructionHeuristicPhaseConfig = new ConstructionHeuristicPhaseConfig();
        constructionHeuristicPhaseConfig.setConstructionHeuristicType(constructionHeuristicType);
        constructionHeuristicPhaseConfig.setTerminationConfig(terminationConfig);
        return constructionHeuristicPhaseConfig;
    }
    private static LocalSearchPhaseConfig createLocalSearchPhaseConfig(
            LocalSearchType localSearchType,
            TerminationConfig terminationConfig) {
        LocalSearchPhaseConfig localSearchPhaseConfig = new LocalSearchPhaseConfig();
        localSearchPhaseConfig.setLocalSearchType(localSearchType);
        localSearchPhaseConfig.setTerminationConfig(terminationConfig);
        return localSearchPhaseConfig;
    }
    private static List<Timeslot> getTimeslotList() {
        List<Timeslot> timeslotList = new ArrayList<>(10);
        timeslotList.add(new Timeslot(DayOfWeek.MONDAY, LocalTime.of(8, 30), LocalTime.of(9, 30)));
        timeslotList.add(new Timeslot(DayOfWeek.MONDAY, LocalTime.of(9, 30), LocalTime.of(10, 30)));
        timeslotList.add(new Timeslot(DayOfWeek.MONDAY, LocalTime.of(10, 30), LocalTime.of(11, 30)));
        timeslotList.add(new Timeslot(DayOfWeek.MONDAY, LocalTime.of(13, 30), LocalTime.of(14, 30)));
        timeslotList.add(new Timeslot(DayOfWeek.MONDAY, LocalTime.of(14, 30), LocalTime.of(15, 30)));

        timeslotList.add(new Timeslot(DayOfWeek.TUESDAY, LocalTime.of(8, 30), LocalTime.of(9, 30)));
        timeslotList.add(new Timeslot(DayOfWeek.TUESDAY, LocalTime.of(9, 30), LocalTime.of(10, 30)));
        timeslotList.add(new Timeslot(DayOfWeek.TUESDAY, LocalTime.of(10, 30), LocalTime.of(11, 30)));
        timeslotList.add(new Timeslot(DayOfWeek.TUESDAY, LocalTime.of(13, 30), LocalTime.of(14, 30)));
        timeslotList.add(new Timeslot(DayOfWeek.TUESDAY, LocalTime.of(14, 30), LocalTime.of(15, 30)));

        return timeslotList;
    }
    private static List<Room> getRoomList() {
        List<Room> roomList = new ArrayList<>(3);
        roomList.add(new Room("Room A"));
        roomList.add(new Room("Room B"));
        roomList.add(new Room("Room C"));

        return roomList;
    }
    private static List<Lesson> getLessonList() {
        List<Lesson> lessonList = new ArrayList<>();
        long id = 0;
        lessonList.add(new Lesson(id++, "Math", "A. Turing", "9th grade"));
        lessonList.add(new Lesson(id++, "Math", "A. Turing", "9th grade"));
        lessonList.add(new Lesson(id++, "Physics", "M. Curie", "9th grade"));
        lessonList.add(new Lesson(id++, "Chemistry", "M. Curie", "9th grade"));
        lessonList.add(new Lesson(id++, "Biology", "C. Darwin", "9th grade"));
        lessonList.add(new Lesson(id++, "History", "I. Jones", "9th grade"));
        lessonList.add(new Lesson(id++, "English", "I. Jones", "9th grade"));
        lessonList.add(new Lesson(id++, "English", "I. Jones", "9th grade"));
        lessonList.add(new Lesson(id++, "Spanish", "P. Cruz", "9th grade"));
        lessonList.add(new Lesson(id++, "Spanish", "P. Cruz", "9th grade"));

        lessonList.add(new Lesson(id++, "Math", "A. Turing", "10th grade"));
        lessonList.add(new Lesson(id++, "Math", "A. Turing", "10th grade"));
        lessonList.add(new Lesson(id++, "Math", "A. Turing", "10th grade"));
        lessonList.add(new Lesson(id++, "Physics", "M. Curie", "10th grade"));
        lessonList.add(new Lesson(id++, "Chemistry", "M. Curie", "10th grade"));
        lessonList.add(new Lesson(id++, "French", "M. Curie", "10th grade"));
        lessonList.add(new Lesson(id++, "Geography", "C. Darwin", "10th grade"));
        lessonList.add(new Lesson(id++, "History", "I. Jones", "10th grade"));
        lessonList.add(new Lesson(id++, "English", "P. Cruz", "10th grade"));
        lessonList.add(new Lesson(id++, "Spanish", "P. Cruz", "10th grade"));

        return lessonList;
    }
    public static TimeTable generateDemoData() {
        List<Timeslot> timeslotList = getTimeslotList();
        List<Room> roomList = getRoomList();
        List<Lesson> lessonList = getLessonList();

        return new TimeTable(timeslotList, roomList, lessonList);
    }
    private static void printTimetable(TimeTable timeTable) {
       LOGGER.info("");
        List<Room> roomList = timeTable.getRoomList();
        List<Lesson> lessonList = timeTable.getLessonList();
        Map<Timeslot, Map<Room, List<Lesson>>> lessonMap = lessonList.stream()
                .filter(lesson -> lesson.getTimeslot() != null && lesson.getRoom() != null)
                .collect(Collectors.groupingBy(Lesson::getTimeslot, Collectors.groupingBy(Lesson::getRoom)));
        LOGGER.info("|            | " + roomList.stream()
                .map(room -> String.format("%-10s", room.getName())).collect(Collectors.joining(" | ")) + " |");
        LOGGER.info("|" + "------------|".repeat(roomList.size() + 1));
        for (Timeslot timeslot : timeTable.getTimeslotList()) {
            List<List<Lesson>> cellList = roomList.stream()
                    .map(room -> {
                        Map<Room, List<Lesson>> byRoomMap = lessonMap.get(timeslot);
                        if (byRoomMap == null) {
                            return Collections.<Lesson>emptyList();
                        }
                        List<Lesson> cellLessonList = byRoomMap.get(room);
                        return Objects.requireNonNullElse(cellLessonList, Collections.<Lesson>emptyList());
                    }).toList();

            LOGGER.info("| " + String.format("%-10s",
                    timeslot.getDayOfWeek().toString().substring(0, 3) + " " + timeslot.getStartTime()) + " | "
                    + cellList.stream().map(cellLessonList -> String.format("%-10s",
                            cellLessonList.stream().map(Lesson::getSubject).collect(Collectors.joining(", "))))
                            .collect(Collectors.joining(" | "))
                    + " |");
            LOGGER.info("|            | "
                    + cellList.stream().map(cellLessonList -> String.format("%-10s",
                            cellLessonList.stream().map(Lesson::getTeacher).collect(Collectors.joining(", "))))
                            .collect(Collectors.joining(" | "))
                    + " |");
            LOGGER.info("|            | "
                    + cellList.stream().map(cellLessonList -> String.format("%-10s",
                            cellLessonList.stream().map(Lesson::getStudentGroup).collect(Collectors.joining(", "))))
                            .collect(Collectors.joining(" | "))
                    + " |");
            LOGGER.info("|" + "------------|".repeat(roomList.size() + 1));
        }
        List<Lesson> unassignedLessons = lessonList.stream()
                .filter(lesson -> lesson.getTimeslot() == null || lesson.getRoom() == null)
                .toList();
        if (!unassignedLessons.isEmpty()) {
            LOGGER.info("");
            LOGGER.info("Unassigned lessons");
            for (Lesson lesson : unassignedLessons) {
                LOGGER.info("  " + lesson.getSubject() + " - " + lesson.getTeacher() + " - " + lesson.getStudentGroup());
            }
        }
    }

}
