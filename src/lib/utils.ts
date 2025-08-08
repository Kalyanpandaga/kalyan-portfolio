import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Wake up all Render-hosted backend services to avoid cold start delays.
 *
 * Render puts free-tier services to sleep when idle, causing a delay on first request.
 * This function preemptively pings each backend to "wake" them up during the initial app load,
 * so that user interactions later on feel instant and snappy.
 */
export const wakeUpProjectsBackendServices = () => {
  const urls = [
    "https://dev-tinder-backend-rli0.onrender.com/health-check",
    "https://meds-buddy-check-kzkr.onrender.com/health-check",
    "https://ai-assistant-backend-o11p.onrender.com/health-check",
    "https://project-management-tool-7rui.onrender.com/health-check",
    "https://candidate-manager-backend.onrender.com/health-check",
    "https://personal-finance-visualizer-lime.vercel.app/health-check",
  ];

  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};
