export function getIdFromToken(token: string) {
  const base64Url = token.split('.')[1];
  const decodedValue = JSON.parse(atob(base64Url));
  return decodedValue.username;
}