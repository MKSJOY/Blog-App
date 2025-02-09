import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        minLenght:[10, "Blog title must contain at least 10 characters!"],
        maxLenght:[60, "Blog title cannot be exceed 60 characters!"],
    },
    mainImage:{
        public_id:{
            type: String,
            required: true,
        },
        url:{
            type: String,
            required: true,
        },
    },
    intro:{
        type: String,
        required: true,
        minLenght:[100, "Blog intro must contain at least 100 characters!"],
    },
    paraOneImage:{
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    },
    paraOneDescription:{
        type: String,
    },
    paraOneTitle:{
        type: String,
    },

    paraTwoImage:{
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    },
    paraTwoDescription:{
        type: String,
    },
    paraTwoTitle:{
        type: String,
    },

    paraThreeImage:{
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    },
    paraThreeDescription:{
        type: String,
    },
    paraThreeTitle:{
        type: String,
    },
    category:{
        type: String,
        required: true
    },
    createdBy:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },

    authorNmae:{
        type: String,
        required: true
    },
    authorAvatar:{
        type: String,
        required: true
    },
});


export const Blog = mongoose.model("Blog", blogSchema);