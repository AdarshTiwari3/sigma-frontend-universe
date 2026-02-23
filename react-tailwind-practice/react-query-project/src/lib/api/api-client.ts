import axios from "axios";

/**
 * Centralized Axios client used across the application.
 *
 * This ensures consistent configuration such as:
 * - Base URL
 * - Headers
 * - Timeouts
 * - Interceptors (auth, refresh tokens, error handling)
 *
 * All API calls should use this client instead of creating new axios instances.
 */

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_URL ?? "",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
