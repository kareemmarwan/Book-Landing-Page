// shared/schema.ts (Frontend-only)
import { z } from "zod";

// Mock insert schema
export const insertClickLogSchema = z.object({
    element: z.string(),
    page: z.string(),
    timestamp: z.string().optional(),
});

// Mock clickLogs object
export const clickLogs = {
    $inferSelect: () => ({}), // فقط لتجنب الأخطاء
};
