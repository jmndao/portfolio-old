import mongoose from "mongoose";
import bcryptjs from "bcryptjs";


const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
}, { timestamps: true });

userSchema.methods.comparePassword = async(pwd) => {
    return await bcryptjs.compare(pwd, this.password);
}

const User = mongoose.model('User', userSchema);

export default User;