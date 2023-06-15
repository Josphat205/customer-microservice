import mongoose from "mongoose";
const { Schema } = mongoose;
const bookSchema = new Schema({
     name:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true
        },
        address:{
            type: String,
            required: true
        }
});
const Customer = mongoose.model('Customer', bookSchema);
export default Customer;