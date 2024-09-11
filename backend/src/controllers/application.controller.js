import { Application } from "../models/application.models.js";
import { Job } from "../models/job.models.js";
import {User} from '../models/users.models.js'
import {Company} from '../models/company.models.js'
import {sendApplicationEmail,sendAcceptanceEmail} from '../utils/nodeMailerSetup.js'

const applyForJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;

        if (!jobId) {
            return res.status(400).json({
                message: "Job id is required.",
                success: false
            });
        }

        const existingApplication = await Application.findOne({ job: jobId, applicant: userId });

        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this job",
                success: false
            });
        }

        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            });
        }

        const newApplication = await Application.create({
            job: jobId,
            applicant: userId,
        });

        job.applications.push(newApplication._id);
        await job.save();
        
        const user= await User.findOne({_id:userId})

        await sendApplicationEmail(user.email,job.title)

        
        return res.status(201).json({
            message: "Job applied successfully.",
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message,
        });
    }
}


const getAppliedJobs = async (req,res) => {
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'job',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'company',
                options:{sort:{createdAt:-1}},
            }
        });
        if(!application){
            return res.status(404).json({
                message:"No Applications",
                success:false
            })
        };
        return res
           .status(200)
           .json({
            application,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}


const getApplicants = async (req,res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:'applications',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant'
            }
        });
        if(!job){
            return res.status(404).json({
                message:'Job not found.',
                success:false
            })
        };
        return res.status(200).json({
            job, 
            succees:true
        });
    } catch (error) {
        console.log(error);
    }
}


const updateStatus = async (req,res) => {
    try {
        const {status} = req.body;
        const applicationId = req.params.id;
        if(!status){
            return res.status(400).json({
                message:'status is required',
                success:false
            })
        };

    
        const application = await Application.findOne({_id:applicationId});
        if(!application){
            return res.status(404).json({
                message:"Application not found.",
                success:false
            })
        };

        
        application.status = status.toLowerCase();
        await application.save();
        
        const user=await User.findById(application.applicant);
        const job=await Job.findById(application.job);
        const company =await Company.findById(job.company);

        await sendAcceptanceEmail(user.email,job.title,status,company.name);


        return res.status(200).json({
            message:"Status updated successfully.",
            success:true
        });

    } catch (error) {
        console.log(error);
    }
}

export {applyForJob, getAppliedJobs, getApplicants, updateStatus }