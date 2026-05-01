import User from "../models/User.js";
import genrateToken from "../utils/genrateToken.js";

export const register = async(req,res)=>{
    try{
        const {name,email,password} = req.body;

        const exitingUser = await User.findOne({email});

        if(exitingUser){
            return res.status(400).json({message:"User already exits.!"});
        }

        const newUser = {
            name,
            email,
            password
        }

        await User.create(newUser);
        res.status(201).json({message:"User Register Successfully.!"});
    }
    catch(err){
        res.status(501).json({message:"Internal server error"}); 
    }
}

export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            res.status(401).json({message:"User not found.!"});
        }

        const token = genrateToken(user);
        res.status(200).json({message:"User login successfully.",token});
    }
    catch(err){
        res.status(501).json({message:"Internal server error.!"})
    }
}