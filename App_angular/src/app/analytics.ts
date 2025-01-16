// src/app/analytics.ts
import { inject } from '@vercel/analytics';

export const initializeAnalytics = () => {
  inject();  // Llama a la función inject() para activar el seguimiento
};
