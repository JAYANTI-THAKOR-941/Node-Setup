import User from "../models/User.js";

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