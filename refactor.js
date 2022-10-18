function returnRandomNumber() {
  return Math.random();
}

function sumToRandomNumber(num) {
  const numberToSum = returnRandomNumber();

  return `Seu número é ${numberToSum + num}!`;
}

function subtractRandomNumber(num) {
  const numberToSubtract = returnRandomNumber();

  return `Seu número é ${numberToSubtract - num}!`;
}

function multiplyToRandomNumber(num) {
  const numberToMultiply = returnRandomNumber();

  return `Seu número é ${numberToMultiply * num}!`;
}

function divideRandomNumber(num) {
  const numberToDivide = returnRandomNumber();

  return `Seu número é ${numberToDivide / num}!`;
}