"use server";
import {Cookie} from "@/interfaces/cookie";
import {cookies} from "next/headers";

export const setCookieServerAuth = ({name, value, hours = 1}: Cookie) => {
	const date = new Date();
	date.setTime(date.getTime() + hours * 60 * 60 * 1000);
	cookies().set(name, value, {
		expires: date,
	});
};

export const removeCookieServerAuth = (name: string) => {
	cookies().delete(name);
};

export const getCookieServeAuth = (name: string) => {
	return cookies().get(name);
};


export const setCookieServerRegisterSuccess = () => {
  const date = new Date();
  date.setTime(date.getTime() + 1 * 60 * 1000); // 1 minuto de expiración
  cookies().set("signupSuccess", "true", {
    expires: date,
  });
}

export const removeCookieServerRegisterSuccess = () => {
  cookies().delete("signupSuccess");
}