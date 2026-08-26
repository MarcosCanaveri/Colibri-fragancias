import mongoose from "mongoose";

import { ROLES } from "../constants/index.js";

const userSchema = new mongoose.Schema(
    {
        firstName: { 
            type: String,
            required: true,
        },

        lastName: { 
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            enum: Object.values(ROLES), 
            default: ROLES.CUSTOMER 
        },

        documents: {
            type: Array,
            default: []
        }
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
