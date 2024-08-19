"use client";
import { Cookie } from "@/interfaces/cookie";
import { setCookie, deleteCookie, getCookie } from 'cookies-next';

export const setCookieClient = ({name, value, days}: Cookie) => {
  setCookie(name, value, {
    expires: new Date(Date.now() + days * 24 * 60 * 60 * 1000),
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
