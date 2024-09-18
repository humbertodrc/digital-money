export const maskCardNumber = (cardNumber: string): string => {
  const cleanedCardNumber = cardNumber.replace(/\s+/g, ''); // Eliminamos espacios en blanco

  if (cleanedCardNumber.length <= 4) {
    return cleanedCardNumber; // Si el número tiene menos de 4 dígitos, no lo enmascaramos
  }

  const lastFourDigits = cleanedCardNumber.slice(-4);
  const maskedDigits = cleanedCardNumber.slice(0, -4).replace(/\d/g, '*');

  return `${maskedDigits}${lastFourDigits}`;
};
