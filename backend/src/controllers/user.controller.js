import jwt from "jsonwebtoken"
import {User} from "../models/users.models.js"
import bcrypt from "bcrypt"


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
        // else{
        //     if(typeof(phoneNumber)!='number'){
        //         return res.status(400).json({
        //             message:"Please enter mob no in correct format"
        //         })
        //     }
        // }

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

        let user = await User.findOne({email})
        if(!user){
            return res.status(400)
            .json({
                message:"User does not exist",
                success:false
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(400) 
            .json({
               message:"Invalid user credentials",
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
           phoneNumber:user.email,  
           role:user.role
        }
        const expiretime = {
            expiresIn: process.env.EXPIRE_TOKEN,
        };
        const accessToken= jwt.sign(userData, process.env.SECRET_KEY, expiretime)

        const options = {
            httpOnly: true,
            secure: true
        }

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
         secure: true
        }

      return res
      .status(200)
      .clearCookie("accessToken", options)
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
        const { fullName, phoneNumber, bio, skills } = req.body;
        
        // const file = req.file;
        // // cloudinary ayega idhar
        // const fileUri = getDataUri(file);
        // const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

        let skillsArray;
        if(skills){
            skillsArray = skills.split(",");
        }
        const userId = req.id; // middleware authentication
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User not found.",
                success: false
            })
        }
        // updating data
        if(fullName) user.fullName = fullName
        if(phoneNumber)  user.phoneNumber = phoneNumber
        if(bio) user.profile.bio = bio
        if(skills) user.profile.skills = skillsArray
      
        // resume comes later here...
        // if(cloudResponse){
        //     user.profile.resume = cloudResponse.secure_url // save the cloudinary url
        //     user.profile.resumeOriginalName = file.originalname // Save the original file name
        // }

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

