"use server";
import {Cookie} from "@/interfaces/cookie";
import {cookies} from "next/headers";

export const setCookieAuth = ({name, value, days}: Cookie) => {
	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	cookies().set(name, value, {
		expires: date,
	});
};

export const removeCookieAuth = (name: string) => {
	cookies().delete(name);
};

export const getCookieAuth = (name: string) => {
	return cookies().get(name);
};


export const setCookieRegisterSuccess = () => {
  const date = new Date();
  date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000); // 1 día de expiración cambiar este valor si es necesario
  cookies().set("signupSuccess", "true", {
    expires: date,
  });
}

export const removeCookieRegisterSuccess = () => {
  cookies().delete("signupSuccess");
}