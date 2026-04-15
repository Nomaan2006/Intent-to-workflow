import express from "express";
import { generateWorkflow } from "../services/compiler.js";
import { executeWorkflow } from "../services/executor.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { input } = req.body;

  try {
    const workflow = await generateWorkflow(input);
    const result = await executeWorkflow(workflow);

    res.json({ workflow, result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
