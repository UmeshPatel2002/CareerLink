import express from "express";
import {applyForJob, getAppliedJobs, getApplicants, updateStatus } from "../controllers/application.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { senMail } from "../utils/nodeMailerSetup.js";

const router=express.Router();

router.route("/apply/:id").post(isAuthenticated,applyForJob);
router.route("/getAppliedJobs").get(isAuthenticated,getAppliedJobs);
router.route("/getApplicants/:id").get(isAuthenticated,getApplicants);
router.route("/statusupdate/:id").post(isAuthenticated,updateStatus);
router.route("/send").get(senMail);

export default router;