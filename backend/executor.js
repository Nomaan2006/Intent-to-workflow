import { runPlanner } from "../tools/planner.js";
import { runSearch } from "../tools/search.js";
import { runScheduler } from "../tools/scheduler.js";

export async function executeWorkflow(workflow) {
  let results = [];

  for (const step of workflow.steps) {
    let output;

    switch (step.action) {
      case "plan_day":
        output = await runPlanner(step);
        break;

      case "search":
        output = await runSearch(step);
        break;

      case "schedule":
        output = await runScheduler(step);
        break;

      default:
        output = `No handler for action: ${step.action}`;
    }

    results.push({
      step: step.id,
      action: step.action,
      output
    });
  }

  return results;
}
