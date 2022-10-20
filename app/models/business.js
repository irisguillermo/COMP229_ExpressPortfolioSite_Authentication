import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
    contactName: String,
    contactNumber: Number,
    emailAddress: String
}, {
    timestamps: true,
    collection: 'business'
});
export default mongoose.model('Business', BusinessSchema);