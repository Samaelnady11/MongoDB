import { getDB } from "../connection.js";

export function getAuthorsCollection() {
  return getDB().collection("authors");
}