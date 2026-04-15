import { runPlanner } from "../tools/planner.js";
import { runSearch } from "../tools/search.js";

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
      default:
        output = "No handler for this action";
    }

    results.push({ step: step.id, output });
  }

  return results;
}
