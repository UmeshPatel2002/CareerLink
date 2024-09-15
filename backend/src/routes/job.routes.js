import express from "express";
import {createJob, getAllJobs, getJobById, getjobsCreatedByAdmin} from "../controllers/job.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router=express.Router();

router.route("/post").post(isAuthenticated,createJob);
router.route("/get").get(getAllJobs);
router.route("/getjobCreatedByAdmin").get(isAuthenticated,getjobsCreatedByAdmin);
router.route("/get/:id").get(getJobById);

export default router;