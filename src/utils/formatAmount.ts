// Formatear el monto a un formato de moneda, dos centavos y expresado en ARS.
export const formatAmount = (amount: number): string => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
  }).format(amount);
};