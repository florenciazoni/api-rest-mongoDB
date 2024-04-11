import mongoose from "mongoose"
const { Schema, model } = "mongoose"


const userShema = new Schema({

email:{
type: String,
required: true,
trim: true,
unique:true,
lowercase: true,
index:{unique: true}


},
passpord:{
type:String,
required:true

}





})


export const User = model('user',userShema)





