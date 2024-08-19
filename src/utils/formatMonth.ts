export const formatMonth = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleString('default', { month: 'long' });
};