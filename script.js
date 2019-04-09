var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");
var result1 = prompt("Введите обязательную статью расходов в этом месяце?");
var result2 = prompt("Во сколько обойдется?");

var appData = {
    budget: "money",
    timeDate: "time",
    expenses: {result1 , result2},
    optionalExpenses: "",
    income: [],
    savings: false,
};

alert("сумма дневного бюджета равна = "+money/30);

console.log(appData);