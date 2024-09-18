import { httpPost } from "./common/http";

interface Transactions {
  amount: number;
  dated: string;
  description: string;
}

interface TransactionsResponse {
  id: number;
  account_id: number;
  type: string;
  description: string;
  amount: number;
  dated: string;
}

export async function postTransactions(id: number, body: Transactions, options = {}): Promise<TransactionsResponse> {
	return httpPost(`/accounts/${id}/transactions`, body, {
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