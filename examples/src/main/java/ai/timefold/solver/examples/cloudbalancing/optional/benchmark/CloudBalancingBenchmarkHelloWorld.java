package ai.timefold.solver.examples.cloudbalancing.optional.benchmark;

import java.util.Arrays;
import java.util.List;

import ai.timefold.solver.benchmark.api.PlannerBenchmark;
import ai.timefold.solver.benchmark.api.PlannerBenchmarkFactory;
import ai.timefold.solver.benchmark.impl.aggregator.swingui.BenchmarkAggregatorFrame;
import ai.timefold.solver.examples.cloudbalancing.app.CloudBalancingHelloWorld;
import ai.timefold.solver.examples.cloudbalancing.persistence.CloudBalancingGenerator;

/**
 * @see CloudBalancingHelloWorld
 */
public class CloudBalancingBenchmarkHelloWorld {

    public static void main(String[] args) {
        List<String> argList = Arrays.asList(args);
        boolean advanced = argList.contains("--advanced");
        if (!advanced) {
            runBasicBenchmark();
        } else {
            boolean aggregator = argList.contains("--aggregator");
            runAdvancedBenchmark(aggregator);
        }
    }

    /**
     * Basic (no benchmark XML): just benchmark the solver config
     */
    public static void runBasicBenchmark() {
        // Build the PlannerBenchmark
        PlannerBenchmarkFactory benchmarkFactory = PlannerBenchmarkFactory.createFromSolverConfigXmlResource(
                "ai/timefold/solver/examples/cloudbalancing/cloudBalancingSolverConfig.xml");

        CloudBalancingGenerator generator = new CloudBalancingGenerator();
        PlannerBenchmark benchmark = benchmarkFactory.buildPlannerBenchmark(
                generator.createCloudBalance(200, 600),
                generator.createCloudBalance(400, 1200));

        // Benchmark the problem and show it
        benchmark.benchmarkAndShowReportInBrowser();
    }

    /**
     * Advanced (benchmark XML): benchmark multiple solver configurations
     */
    public static void runAdvancedBenchmark(boolean aggregator) {
        // Build the PlannerBenchmark
        PlannerBenchmarkFactory benchmarkFactory = PlannerBenchmarkFactory.createFromXmlResource(
                "ai/timefold/solver/examples/cloudbalancing/optional/benchmark/cloudBalancingBenchmarkConfig.xml");

        PlannerBenchmark benchmark = benchmarkFactory.buildPlannerBenchmark();
        // Benchmark the problem and show it
        benchmark.benchmarkAndShowReportInBrowser();

        // Show aggregator to aggregate multiple reports
//        Exception in thread "main" java.lang.NullPointerException: Cannot invoke "java.io.File.equals(Object)" because "this.problemFile" is null
//        at ai.timefold.solver.benchmark.impl.loader.FileProblemProvider.equals(FileProblemProvider.java:60)
//        at ai.timefold.solver.benchmark.impl.result.ProblemBenchmarkResult.equals(ProblemBenchmarkResult.java:478)
//        at ai.timefold.solver.benchmark.impl.aggregator.swingui.BenchmarkAggregatorFrame.initSingleBenchmarkNodes(BenchmarkAggregatorFrame.java:482)
//        at ai.timefold.solver.benchmark.impl.aggregator.swingui.BenchmarkAggregatorFrame.initBenchmarkHierarchy(BenchmarkAggregatorFrame.java:458)
//        at ai.timefold.solver.benchmark.impl.aggregator.swingui.BenchmarkAggregatorFrame.createCheckBoxTree(BenchmarkAggregatorFrame.java:217)
//        at ai.timefold.solver.benchmark.impl.aggregator.swingui.BenchmarkAggregatorFrame.createBenchmarkTreePanel(BenchmarkAggregatorFrame.java:200)
//        at ai.timefold.solver.benchmark.impl.aggregator.swingui.BenchmarkAggregatorFrame.createContentPane(BenchmarkAggregatorFrame.java:149)
//        at ai.timefold.solver.benchmark.impl.aggregator.swingui.BenchmarkAggregatorFrame.init(BenchmarkAggregatorFrame.java:141)
//        at ai.timefold.solver.benchmark.impl.aggregator.swingui.BenchmarkAggregatorFrame.createAndDisplay(BenchmarkAggregatorFrame.java:109)
//        at ai.timefold.solver.benchmark.impl.aggregator.swingui.BenchmarkAggregatorFrame.createAndDisplayFromXmlResource(BenchmarkAggregatorFrame.java:74)
//        at ai.timefold.solver.examples.cloudbalancing.optional.benchmark.CloudBalancingBenchmarkHelloWorld.runAdvancedBenchmark(CloudBalancingBenchmarkHelloWorld.java:59)
//        at ai.timefold.solver.examples.cloudbalancing.optional.benchmark.CloudBalancingBenchmarkHelloWorld.main(CloudBalancingBenchmarkHelloWorld.java:24)
        if (aggregator) {
            BenchmarkAggregatorFrame.createAndDisplayFromXmlResource(
                    "ai/timefold/solver/examples/cloudbalancing/optional/benchmark/cloudBalancingBenchmarkConfig.xml");
        }
    }

}
