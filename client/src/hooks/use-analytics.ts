import { useMutation } from "@tanstack/react-query";
import { api, type InsertClickLog } from "@shared/routes";

export function useTrackClick() {
  return useMutation({
    mutationFn: async (data: InsertClickLog) => {
      // Fire and forget - we don't block navigation on this
      try {
        await fetch(api.analytics.trackClick.path, {
          method: api.analytics.trackClick.method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
          credentials: "include",
        });
      } catch (error) {
        // Silently fail for analytics to not disrupt user experience
        console.error("Failed to track click:", error);
      }
    },
  });
}
