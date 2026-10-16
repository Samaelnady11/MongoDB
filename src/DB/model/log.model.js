import { getDB } from "../connection.js";

export function getLogsCollection() {
  return getDB().collection("logs");
}