import { db } from "./db";
import { clickLogs, type InsertClickLog, type ClickLog } from "@shared/schema";

export interface IStorage {
  logClick(log: InsertClickLog): Promise<ClickLog>;
}

export class DatabaseStorage implements IStorage {
  async logClick(insertLog: InsertClickLog): Promise<ClickLog> {
    const [log] = await db.insert(clickLogs).values(insertLog).returning();
    return log;
  }
}

export const storage = new DatabaseStorage();
