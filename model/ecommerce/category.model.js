import mongoose from "mongoose";

const categorySchema = new Schema({
    name:{
        type:String,
        required:true
    }
},

{
    timestamps: true
}
);


export const category = mongoose.model('Category', categorySchema); 