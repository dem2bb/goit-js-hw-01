const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const userInput = prompt('Введите пароль');
if (!userInput) {
  message = 'Отменено пользователем!';
} else if (ADMIN_PASSWORD === userInput) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
