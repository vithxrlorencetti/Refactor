function returnRandomNumber() {
  return Math.round(Math.random() * 100);
}

const yourNumberIs = `Seu número é `;

const calculate = {
  sum: function(num) {return yourNumberIs + (returnRandomNumber() + num);},
  substract: function(num) {return yourNumberIs + (returnRandomNumber() - num);},
  multiply: function(num) {return yourNumberIs + (returnRandomNumber() * num);},
  divide: function(num) {return yourNumberIs + (returnRandomNumber() / num);},
}
