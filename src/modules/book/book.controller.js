import * as service from "./book.service.js";

export async function addBook(req, res, next) {
  try {
    const result = await service.addBook(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

export async function addBooksBatch(req, res, next) {
  try {
    const result = await service.addBooksBatch(req.body.books);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

export async function updateFutureBook(req, res, next) {
  try {
    const result = await service.updateFutureBook();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

export async function findBookByTitle(req, res, next) {
  try {
    const { title } = req.query;

    if (!title) {
      return res.status(400).json({
        message: "Please provide the title query parameter",
      });
    }

    const books = await service.findBookByTitle(title);
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
}

export async function findBooksByYear(req, res, next) {
  try {
    const from = Number(req.query.from);
    const to = Number(req.query.to);

    if (
      req.query.from === undefined ||
      req.query.to === undefined ||
      !Number.isFinite(from) ||
      !Number.isFinite(to) ||
      from > to
    ) {
      return res.status(400).json({
        message: "Provide valid from and to years",
      });
    }

    const books = await service.findBooksByYear(from, to);
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
}

export async function findBooksByGenre(req, res, next) {
  try {
    const { genre } = req.query;

    if (!genre) {
      return res.status(400).json({
        message: "Please provide the genre query parameter",
      });
    }

    const books = await service.findBooksByGenre(genre);
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
}

export async function findBooksSkipLimit(req, res, next) {
  try {
    const books = await service.findBooksSkipLimit();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
}

export async function findBooksWithIntegerYear(req, res, next) {
  try {
    const books = await service.findBooksWithIntegerYear();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
}

export async function findBooksExcludingGenres(req, res, next) {
  try {
    const books = await service.findBooksExcludingGenres();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
}