export const formatDayOfWeek = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', { weekday: 'long' }); // Ejemplo: "Thursday"
};