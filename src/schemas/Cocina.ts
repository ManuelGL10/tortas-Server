import mongoose, { Schema, Document } from "mongoose";

interface IPetSchema extends Document {
    nombre: string;
    tipoCocina: string;
    ingredientes: string;
    precio: number;
    userId: mongoose.Schema.Types.ObjectId; 
  }

const CocinaSchema = new Schema({
    nombre: { type: String, required: true },
    tipoCocina: { type: String, required: true }, 
    ingredientes: { type: String, required: true },
    precio: { type: Number, required: true }, 
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, 
}, { collection: "Cocina" }); 

export default mongoose.model<IPetSchema>("Cocina", CocinaSchema);
