import { getLogsCollection } from "../../DB/model/log.model.js";

export async function addLog(logData) {
  const log = {
    message: logData.message,
    level: logData.level || "info",
    createdAt: new Date(),
  };

  if (
    typeof log.message !== "string" ||
    !log.message.trim()
  ) {
    throw new Error("Log message is required");
  }

  const result = await getLogsCollection().insertOne(log);

  return {
    message: "Log added successfully",
    insertedId: result.insertedId,
  };
}