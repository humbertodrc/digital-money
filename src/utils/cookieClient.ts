"use client";
import { Cookie } from "@/interfaces/cookie";
import { setCookie, deleteCookie, getCookie } from 'cookies-next';

// Una hora de duración por defecto
export const setCookieClient = ({name, value, hours}: Cookie) => {
  setCookie(name, value, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * (hours || 1)),
  });
}

export const removeCookieClient = (name: string) => {
  deleteCookie(name);
}

export const getCookieClient = (name: string) => {
  return getCookie(name);
}

export const hasCookieClient = (name: string) => {
  return !!getCookie(name);
}

export const setCookieClientRegisterSuccess = () => {
  setCookie("signupSuccess", "true", {
    expires: new Date(Date.now() + 1000 * 60 * 2),
  });
}

export const removeCookieClientRegisterSuccess = () => {
  deleteCookie("signupSuccess");
}
