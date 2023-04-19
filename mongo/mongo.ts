import { MongoClient } from "mongodb";
import { Form } from "../models/form";

const uri = process.env.MONGO_URL || "mongodb://0.0.0.0:27017";
const client = new MongoClient(uri);
client.connect();
const db = client.db(process.env.DB_NAME || "vdnh");

export const formsCol = db.collection<Form>("forms");

export { db };
