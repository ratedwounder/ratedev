let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budjet: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeDate: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце?"),
        b = prompt("Во сколько обойдется?");
    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && (typeof(a)) != '' && (typeof(b)) != '' && a,length < 50) {
        appData.expenses[a] = b;
    } else {
        console.log("Вы ввели некоректные значения")
    }
}

appData.moneyPerDay = appData.budjet / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}