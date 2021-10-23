import mongoose from "mongoose";
import connection from "@db/connection";

const PostSchema = async () => {
    await connection();
    return new mongoose.Schema({
        title: {
            type: String,
            required: [true, "É preciso adicionar o titulo do artigo."],
            maxlength: [20, "O titulo precisa ter no máximo 20 carácter."],
        },
        article: {
            type: String,
            required: [true, "É necessário adicionar um artigo."],
        },
    });
};
export default mongoose.models.Post ||
    mongoose.model("Post", await PostSchema());
