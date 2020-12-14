let credits = 23580;
const pricePerDroid = 3000;
const userInput = parseInt(
  prompt('Какое количество дроидов вы хотите купить?'),
);
const totalPrice = userInput * pricePerDroid;
if (!+userInput) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else if (userInput < 0) {
  console.log('Введено неверное значение!');
} else {
  credits -= totalPrice;
  console.log(
    `Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`,
  );
}
