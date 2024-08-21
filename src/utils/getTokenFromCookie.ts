import { cookies } from 'next/headers';

export function getTokenFromCookie() {
  return cookies().get('authToken')?.value || '';
}
