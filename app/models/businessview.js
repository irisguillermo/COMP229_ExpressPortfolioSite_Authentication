import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const BusinessListSchema = new Schema({
    contactName: String,
    contactNumber: Number,
    emailAddress: String
}, {
    collection: 'business'
});
export default mongoose.model('Business List', BusinessListSchema);