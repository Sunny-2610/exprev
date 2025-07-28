import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  userOrder: { type: Object, default: { test: 'test value' } }
}, { timestamps: true }); // ← moved inside Schema() constructor

export const Person = mongoose.model("Person", personSchema);
