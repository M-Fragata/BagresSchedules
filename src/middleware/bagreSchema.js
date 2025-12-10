import mongoose from "mongoose";

const bagreSchema = mongoose.Schema({
    when: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

export const bagreSchedule = mongoose.model("bagreSchedule", bagreSchema)