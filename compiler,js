import { callAI } from "./aiService.js";

export async function generateWorkflow(userInput) {
  const prompt = `
You are an AI Workflow Compiler.

Convert the user intent into a structured JSON workflow.

Rules:
- Break into clear steps
- Each step must have: id, action, description
- Keep it executable

User Input:
"${userInput}"

Output ONLY JSON:
`;

  const response = await callAI(You are an AI Intent-to-Workflow Compiler.

Your job is to convert a user's goal into a structured, executable workflow in JSON format.

STRICT RULES:
- Return ONLY valid JSON (no text, no explanation, no markdown)
- Do NOT include code blocks (no ```json)
- Output must be directly parsable with JSON.parse()

WORKFLOW REQUIREMENTS:
- Break the goal into clear logical steps
- Each step must include:
  - id (number)
  - action (must be from allowed actions)
  - description (clear explanation of the step)

ALLOWED ACTIONS:
- search → for finding places, items, or information
- schedule → for creating routines, plans, or timetables
- plan_day → for planning or organizing a full day

IMPORTANT:
- Choose actions carefully based on the user's intent
- Do NOT invent new actions
- Keep steps minimal but meaningful (3–6 steps ideal)

OUTPUT FORMAT:
{
  "goal": "user goal here",
  "steps": [
    {
      "id": 1,
      "action": "search",
      "description": "..."
    }
  ]
}

USER GOAL:
"{{user_input}}");

  return JSON.parse(response);
}
