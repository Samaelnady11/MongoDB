import { MongoClient } from "mongodb";

const uri =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017";

const dbName = process.env.DB_NAME || "assignment7";

const client = new MongoClient(uri);

let db;

export async function connectDB() {
  await client.connect();
  db = client.db(dbName);

  console.log(`Connected to MongoDB database: ${dbName}`);
  return db;
}

export function getDB() {
  if (!db) {
    throw new Error("Database is not connected yet");
  }

  return db;
}