import jwt from "jsonwebtoken"
import {User} from "../models/users.models.js"
import bcrypt from "bcrypt"
import { uploadOnCloudinary } from "../utils/cloudinary.js"


const registerUser = async (req, res) => {
    try{
        const {fullName, email, phoneNumber, password, role } = req.body

       if (!fullName || !email || !phoneNumber || !password || !role){
           return res.status(400)
           .json({
               message:"All fields are required",
               success:false
            })
        }
        

        const existedUser = await User.findOne({ email })

        if (existedUser) {
            return res.status(400)
            .json({
                message:"User with email or username already exists",
                success:false
            })
        }

        const hashedPassword=await bcrypt.hash(password,10)

        await User.create({
            email, 
            fullName, 
            password:hashedPassword, 
            phoneNumber, 
            role
        })

        return res.status(201)
        .json({
            message:"Account created successfully",
            success:true
        })
    }
    catch(error){
        console.log(error)
    }
}
    
const loginUser = async (req, res) =>{

    try{
        const {email, password, role} = req.body

        if ( !email || !password || !role) {
           return res.status(400)
            .json({
                message:"Something is missing",
                success:false
            })  
        }

        let user = await User.findOne({email}).lean();
        if(!user){
            return res.status(404)
            .json({
                message:"User does not exist",
                success:false
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(400) 
            .json({
               message:"Incorrect password",
               success:false
            })
        }

        if(role!== user.role){
            return res.status(400) 
            .json({
               message:"Account does not exist with current role",
               success:false
            })
        }

        const userData={
           userId:user._id
        }
    
        user={
           _id:user._id,
           fullName:user.fullName, 
           email:user.email, 
           phoneNumber:user.phoneNumber,  
           role:user.role
        }
        const expiretime = {
            expiresIn: process.env.EXPIRE_TOKEN,
        };
        const accessToken= jwt.sign(userData, process.env.SECRET_KEY, expiretime)

        const options = {
            httpOnly: true,
            // secure: true,
            maxAge: 24 * 60 * 60 * 1000,
            // path: '/', 
        }

        // console.log('accessToken',accessToken);
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .json({
          message:`Login successfully `,
          user,
          success:true
        })
    }
    catch(error){
         console.log(error)
    }
}

const logoutUser = async(req, res) => {
    try {
        const options = {
         httpOnly: true,
        //  secure: true,
        //  path: '/',
        //  domain:'localhost'
        }
  if(req.cookie){
   
  }
      return res
      .status(200)
      .clearCookie("accessToken",options)
      .json({
           message:"User logged Out",
           success:true
        })
    }
    catch(error){
        console.log(error)
    }
}

const updateProfile = async (req, res) => {
    try {
        const { phoneNumber, bio, skills } = req.body;
        console.log(phoneNumber, bio, skills)
        const file=req.file
        let skillsArray 
        if (skills) {
            if (typeof skills === 'string') {
                 skillsArray = skills.split(',').map(skill => skill.trim());
            } else if (Array.isArray(skills)) {
                skillsArray = skills;
            } else {
                console.error('Unexpected type for skills:', skills);
                return res.status(400).send({ message: 'Invalid skills format' });
            }
        } else {
            console.error('Skills is null or undefined');
            return res.status(400).send({ message: 'Skills cannot be empty' });
        }

        const userId = req.id; 
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User not found.",
                success: false
            })
        }

        if(phoneNumber)  user.phoneNumber = phoneNumber
        if(bio) user.profile.bio = bio
        if(skills) user.profile.skills = skillsArray
        if(file?.path){
            console.log(file.path)
           const resumeUrl=await uploadOnCloudinary(file.path)
           console.log('resumeUrl:', resumeUrl.url); 
           user.profile.resume=resumeUrl?.url
        }
      

        await user.save();

        user = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).json({
            message:"Profile updated successfully.",
            user,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}


export {registerUser,
        loginUser,
        logoutUser,
        updateProfile,
    }

