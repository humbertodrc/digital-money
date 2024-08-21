// Identificar si el error es por la expiración de la cookie
const errorResponse = {
	error: "token is expired by 2h3m54s",
};

interface Error{
  error: string;
}

// Validar si la cookie expiró
export default function errorForExpireCookie({error}: Error) {
  if (error === errorResponse.error) {
    return true;
  }
  return false;
}