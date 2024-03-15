import mongoose from 'mongoose'

const  OrderItemsSchema = new mongoose.Schema({
    productID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

const OrderSchema = new mongoose.Schema(
    {
        orderPrce:{
            type:Number,
            required:true
        },
        customer:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        },
        OrderItems:{
            type:[OrderItemsSchema]
        },
        address:{
            type:String,
            required:true
        },
        status:{
            type:String,
            required:true,
            enum:["pending","cancelled","delivered"],
            default:"pending"
        }
    }
    ,{
        timestamps:true
    }
)

export const Order =  mongoose.model('Order',OrderSchema)