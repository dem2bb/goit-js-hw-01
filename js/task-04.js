const credits = 23580;
const pricePerDroid = 3000;

const userInput = prompt('Какое количество дроидов вы хотите купить?');
const totalPrice = userInput * pricePerDroid;
if (userInput === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  const creditsLeft = credits - totalPrice;
  console.log(
    `Вы купили ${userInput} дроидов, на счету осталось ${creditsLeft} кредитов.`,
  );
}
