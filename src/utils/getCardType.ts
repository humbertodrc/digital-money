// Definimos un tipo para las posibles tarjetas de crédito
type CardType = 'Visa' | 'MasterCard' | 'American Express' | 'Discover' | 'Unknown';

// Función que toma un número de tarjeta y devuelve el tipo de tarjeta
export const getCardType = (cardNumber: string): CardType => {
  const cleanedCardNumber = cardNumber.replace(/\s+/g, ''); // Eliminamos espacios en blanco

  if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cleanedCardNumber)) {
    return 'Visa';
  }
  if (/^5[1-5][0-9]{14}$/.test(cleanedCardNumber)) {
    return 'MasterCard';
  }
  if (/^3[47][0-9]{13}$/.test(cleanedCardNumber)) {
    return 'American Express';
  }
  if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(cleanedCardNumber)) {
    return 'Discover';
  }

  return 'Unknown'; // Si no coincide con ningún patrón conocido, devolvemos 'Unknown'
};
