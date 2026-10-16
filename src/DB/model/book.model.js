import { getDB } from "../connection.js";

export function getBooksCollection() {
  return getDB().collection("books");
}