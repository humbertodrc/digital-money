
import { Card } from "@/interfaces/card";
import { httpDelete, httpGet, httpPost } from "./common/http";

export async function getCards(id: number, token: string, options = {}): Promise<Card[]> {
	return httpGet(`/accounts/${id}/cards`, token, {
		headers: {
			"Content-Type": "application/json",
		},
		...options,
	})
		.then((data) => data as any)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}

export async function postCards(id: number, body: any, options = {}): Promise<any> {
	return httpPost(`/accounts/${id}/cards`, body, {
		headers: {
			"Content-Type": "application/json",
		},
		...options,
	})
		.then((data) => data as any)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}


export async function deleteCard(id: number, cardId: number, options = {}): Promise<any> {
	return httpDelete(`/accounts/${id}/cards/${cardId}`, {
		headers: {
			"Content-Type": "application/json",
		},
		...options,
	})
		.then((data) => data as any)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}

export async function getCardById(id: number = 0, token: string, cardId: string, options = {}): Promise<Card> {
	return httpGet(`/accounts/${id}/cards/${cardId}`, token, {
		headers: {
			"Content-Type": "application/json",
		},
		...options,
	})
		.then((data) => data as any)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}