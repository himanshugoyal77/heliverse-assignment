import express from "express";
import { createTeam, getTeamById } from "../controllers/team.controller.js";

const router = express.Router();

router.post("/", createTeam);
router.get("/:id", getTeamById);

export default router;
