import * as service from "./logs.service.js";

export async function addLog(req, res, next) {
  try {
    const result = await service.addLog(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}