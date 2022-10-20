import mongoose from "mongoose";
import passportLocalMongoose from 'passport-local-mongoose';
const {PassportLocalSchema } = mongoose;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    showName: String,
    username: String,
    emailAddress: String
},{
    collection: 'users'
});

UserSchema.plugin(passportLocalMongoose);

export default mongoose.model('Login', UserSchema);