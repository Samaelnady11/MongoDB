import { getDB } from "../../DB/connection.js";

const booksValidator = {
  $jsonSchema: {
    bsonType: "object",
    required: ["title"],
    properties: {
      title: {
        bsonType: "string",
        pattern: "\\S",
        description: "title must be a non-empty string",
      },
    },
  },
};

export async function createBooksCollection() {
  const db = getDB();

  const exists = await db
    .listCollections({ name: "books" })
    .hasNext();

  if (exists) {
    await db.command({
      collMod: "books",
      validator: booksValidator,
      validationLevel: "strict",
      validationAction: "error",
    });

    return {
      message: "Books collection already exists; validator updated",
    };
  }

  await db.createCollection("books", {
    validator: booksValidator,
    validationLevel: "strict",
    validationAction: "error",
  });

  return { message: "Books collection created with validation" };
}

export async function createAuthor() {
  const db = getDB();

  const result = await db.collection("authors").insertOne({
    name: "George Orwell",
    country: "United Kingdom",
  });

  return {
    message: "Author inserted; authors collection is created implicitly",
    insertedId: result.insertedId,
  };
}

export async function createCappedLogs() {
  const db = getDB();

  const exists = await db
    .listCollections({ name: "logs" })
    .hasNext();

  if (exists) {
    return {
      message: "Logs collection already exists",
    };
  }

  await db.createCollection("logs", {
    capped: true,
    size: 1024 * 1024,
  });

  return { message: "Capped logs collection created (1 MB)" };
}

export async function createBooksTitleIndex() {
  const db = getDB();

  const indexName = await db
    .collection("books")
    .createIndex({ title: 1 });

  return {
    message: "Index created on books.title",
    indexName,
  };
}