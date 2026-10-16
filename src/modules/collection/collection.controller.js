import * as service from "./collection.service.js";

export async function createBooksCollection(req, res, next) {
  try {
    const result = await service.createBooksCollection();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

export async function createAuthor(req, res, next) {
  try {
    const result = await service.createAuthor();
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

export async function createCappedLogs(req, res, next) {
  try {
    const result = await service.createCappedLogs();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

export async function createBooksTitleIndex(req, res, next) {
  try {
    const result = await service.createBooksTitleIndex();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}