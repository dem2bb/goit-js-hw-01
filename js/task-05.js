let country;
let price;

let userInput = prompt('В какую страну Вам необходимо оформить доставку?');
userInput = userInput.toLowerCase();
switch (userInput) {
  case 'китай':
    country = 'Китай';
    price = 100;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case 'чили':
    country = 'Чили';
    price = 250;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case 'австралия':
    country = 'Австралия';
    price = 170;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case 'индия':
    country = 'Индия';
    price = 80;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case 'ямайка':
    country = 'Ямайка';
    price = 120;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  default:
    alert('В вашей стране доставка не доступна');
}
