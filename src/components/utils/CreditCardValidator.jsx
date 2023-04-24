export function CreditCardValidator(cardNumber) {
  // First, remove any non-numeric characters
  cardNumber = cardNumber.replace(/\D/g, "");

  // Check if the card number is of the correct length and passes the Luhn algorithm
  if (
    !cardNumber ||
    cardNumber.length < 13 ||
    cardNumber.length > 19 ||
    !luhnCheck(cardNumber)
  ) {
    return { isValid: false, cardType: null };
  }

  // Check for specific card types
  if (cardNumber.startsWith("34") || cardNumber.startsWith("37")) {
    return { isValid: true, cardType: "American Express" };
  } else if (
    cardNumber.startsWith("5018") ||
    cardNumber.startsWith("5020") ||
    cardNumber.startsWith("5038") ||
    cardNumber.startsWith("5893") ||
    cardNumber.startsWith("6304") ||
    cardNumber.startsWith("6759") ||
    cardNumber.startsWith("6761") ||
    cardNumber.startsWith("6762") ||
    cardNumber.startsWith("6763")
  ) {
    return { isValid: true, cardType: "Maestro" };
  } else if (
    cardNumber.startsWith("51") ||
    cardNumber.startsWith("52") ||
    cardNumber.startsWith("53") ||
    cardNumber.startsWith("54") ||
    cardNumber.startsWith("55") ||
    (cardNumber >= 222100 && cardNumber <= 272099)
  ) {
    return { isValid: true, cardType: "MasterCard" };
  } else if (cardNumber.startsWith("4")) {
    return { isValid: true, cardType: "Visa" };
  } else if (
    cardNumber.startsWith("4026") ||
    cardNumber.startsWith("417500") ||
    cardNumber.startsWith("4508") ||
    cardNumber.startsWith("4844") ||
    cardNumber.startsWith("4913") ||
    cardNumber.startsWith("4917")
  ) {
    return { isValid: true, cardType: "Visa Electron" };
  } else {
    return { isValid: false, cardType: null };
  }
}

function luhnCheck(cardNumber) {
  var checksum = 0;
  var evenDigit = false;
  for (var i = cardNumber.length - 1; i >= 0; i--) {
    var digit = parseInt(cardNumber.charAt(i), 10);
    if (evenDigit) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    checksum += digit;
    evenDigit = !evenDigit;
  }
  return checksum % 10 === 0;
}
