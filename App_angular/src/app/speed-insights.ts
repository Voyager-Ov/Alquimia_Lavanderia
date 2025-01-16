// src/app/speed-insights.ts
import { injectSpeedInsights } from '@vercel/speed-insights';

export const initializeSpeedInsights = () => {
  injectSpeedInsights();
};
