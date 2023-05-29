/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import axios, { AxiosInstance } from "axios";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { checkTokenExpiration, refreshToken } from "@/utils/token";

let sessionPromise: Promise<Session | null> | null = null;
let refreshedToken: string | null = null;

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

axiosClient.interceptors.request.use(
  async (config) => {
    console.log("[axiosClient] config", config);

    if (!sessionPromise) {
      sessionPromise = getSession();
    }
    const session = await sessionPromise;
    if (!session) return config;

    let token = session?.user.token;
    if (refreshedToken) {
      // Utiliser le token rafraîchi s'il existe
      token = refreshedToken;
    }

    const isExpired = await checkTokenExpiration(token);
    if (isExpired) {
      // Rafraîchir le token uniquement s'il est expiré
      token = await refreshToken(token);
      refreshedToken = token; // Stocker le token rafraîchi pour les prochaines requêtes
    }

    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
export type { AxiosInstance };
