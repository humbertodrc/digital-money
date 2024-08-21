const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export class HttpError extends Error {
  response: Response;

  /**
   * Crea una instancia de HttpError.
   * @param {Response} response - La respuesta de la solicitud HTTP.
   */
  constructor(response: Response) {
    super(`HTTP error! Status: ${response.status}`);
    this.response = response;
  }
}

/**
 * Maneja la respuesta de una solicitud HTTP.
 * @param {Response} response - La respuesta de la solicitud HTTP.
 * @returns {Promise<unknown>} - Una promesa que se resuelve con los datos parseados de la respuesta.
 * @throws {HttpError} - Error si la respuesta no es exitosa.
 */
const handleResponse = async (response: Response): Promise<unknown> => {
  if (!response.ok) {
    throw new HttpError(response);
  }
  return response.json();
};

/**
 * Realiza una solicitud HTTP GET.
 * @param {string} endpoint - El endpoint de la solicitud.
 * @param {RequestInit} [options={}] - Opciones adicionales para la solicitud.
 * @returns {Promise<unknown>} - Una promesa que se resuelve con los datos de la respuesta.
 * @throws {HttpError} - Error si la solicitud falla.
 */
interface HttpGetOptions extends RequestInit {
  headers?: HeadersInit;
}

export const httpGet = async (endpoint: string, token: string , options: HttpGetOptions = {}): Promise<unknown> => {
  const headers = {
    Authorization: token,
    ...defaultHeaders,
    ...getUserConfigHeaders(),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    method: 'GET',
    headers
  });
  return handleResponse(response);
};

export const httpGetRevalidate = async (endpoint: string, token: string, revalidateTag: string, options: HttpGetOptions = {}): Promise<unknown> => {
  const headers = {
    Authorization: token,
    ...defaultHeaders,
    ...getUserConfigHeaders(),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    method: 'GET',
    headers,
    next: {
      tags: ["user-info"],
    }
  });
  return handleResponse(response);
};


/**
 * Realiza una solicitud HTTP POST.
 * @param {string} endpoint - El endpoint de la solicitud.
 * @param {object} body - Los datos del cuerpo de la solicitud.
 * @param {RequestInit} [options={}] - Opciones adicionales para la solicitud.
 * @returns {Promise<unknown>} - Una promesa que se resuelve con los datos de la respuesta.
 * @throws {HttpError} - Error si la solicitud falla.
 */
export const httpPost = async (endpoint: string, body: object, options: HttpGetOptions = {}): Promise<unknown> => {
  const headers: HeadersInit = {
    ...defaultHeaders,
    ...getUserConfigHeaders(),
    ...options.headers,
  } as { [key: string]: string };

  let processedBody;
  if (body instanceof FormData) {
    delete headers['Content-Type'];
    processedBody = body;
  } else {
    processedBody = JSON.stringify(body);
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    method: 'POST',
    headers,
    body: processedBody,
  });
  return handleResponse(response);
};

/**
 * Realiza una solicitud HTTP PUT.
 * @param {string} endpoint - El endpoint de la solicitud.
 * @param {object} body - Los datos del cuerpo de la solicitud.
 * @param {RequestInit} [options={}] - Opciones adicionales para la solicitud.
 * @returns {Promise<unknown>} - Una promesa que se resuelve con los datos de la respuesta.
 * @throws {HttpError} - Error si la solicitud falla.
 */
export const httpPut = async (endpoint: string, body: object, options: HttpGetOptions = {}): Promise<unknown> => {
  const headers = {
    ...defaultHeaders,
    ...getUserConfigHeaders(),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    method: 'PUT',
    headers,
    body: JSON.stringify(body),
  });
  return handleResponse(response);
};

/**
 * Realiza una solicitud HTTP DELETE.
 * @param {string} endpoint - El endpoint de la solicitud.
 * @param {RequestInit} [options={}] - Opciones adicionales para la solicitud.
 * @returns {Promise<unknown>} - Una promesa que se resuelve con los datos de la respuesta.
 * @throws {HttpError} - Error si la solicitud falla.
 */
export const httpDelete = async (endpoint: string, options: HttpGetOptions = {}): Promise<unknown> => {
  const headers = {
    ...defaultHeaders,
    ...getUserConfigHeaders(),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    method: 'DELETE',
    headers,
  });
  return handleResponse(response);
};


/**
 * Realiza una solicitud HTTP PATCH.
 * @param {string} endpoint - El endpoint de la solicitud.
 * @param {object} body - Los datos del cuerpo de la solicitud.
 * @param {RequestInit} [options={}] - Opciones adicionales para la solicitud.
 * @returns {Promise<unknown>} - Una promesa que se resuelve con los datos de la respuesta.
 * @throws {HttpError} - Error si la solicitud falla.
 */
export const httpPatch = async (endpoint: string, body: object, options: HttpGetOptions = {}): Promise<unknown> => {
  const headers = {
    ...defaultHeaders,
    ...getUserConfigHeaders(),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    method: 'PATCH',
    headers,
    body: JSON.stringify(body),
  });
  return handleResponse(response);
}

// Configuración de headers de usuario
const getUserConfigHeaders = (): HeadersInit => {
  const headers: HeadersInit = {};
  if (typeof window !== 'undefined' && !headers.Authorization) {
    const token = localStorage.getItem('acc_token');
    if (token) {
      headers.Authorization = JSON.parse(token);
    }
  }

  return headers;
};
