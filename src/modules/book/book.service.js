import { getBooksCollection } from "../../DB/model/book.model.js";

export async function addBook(bookData) {
  if (!bookData.title || !bookData.title.trim()) {
    throw new Error("Book title is required");
  }

  const result = await getBooksCollection().insertOne(bookData);

  return {
    message: "Book added successfully",
    insertedId: result.insertedId,
  };
}

export async function addBooksBatch(books) {
  if (!Array.isArray(books) || books.length < 3) {
    throw new Error("You must provide at least 3 books in an array");
  }

  for (const book of books) {
    if (
      typeof book.title !== "string" ||
      !book.title.trim()
    ) {
      throw new Error("Every book must have a non-empty title");
    }
  }

  const result = await getBooksCollection().insertMany(books);

  return {
    message: "Books added successfully",
    insertedCount: result.insertedCount,
    insertedIds: result.insertedIds,
  };
}

export async function updateFutureBook() {
  const result = await getBooksCollection().updateOne(
    { title: "Future" },
    { $set: { year: 2022 } }
  );

  return {
    message: result.matchedCount
      ? "Book updated successfully"
      : "No book found with title Future",
    matchedCount: result.matchedCount,
    modifiedCount: result.modifiedCount,
  };
}

export async function findBookByTitle(title) {
  return getBooksCollection().find({ title }).toArray();
}

export async function findBooksByYear(from, to) {
  return getBooksCollection()
    .find({
      year: {
        $gte: from,
        $lte: to,
      },
    })
    .toArray();
}

export async function findBooksByGenre(genre) {
  return getBooksCollection()
    .find({ genres: genre })
    .toArray();
}

export async function findBooksSkipLimit() {
  return getBooksCollection()
    .find({})
    .sort({ year: -1 })
    .skip(2)
    .limit(3)
    .toArray();
}

export async function findBooksWithIntegerYear() {
  return getBooksCollection()
    .find({ year: { $type: "int" } })
    .toArray();
}

export async function findBooksExcludingGenres() {
  return getBooksCollection()
    .find({
      genres: {
        $nin: ["Horror", "Science Fiction"],
      },
    })
    .toArray();
}