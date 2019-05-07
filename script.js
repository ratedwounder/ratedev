let money, time;

// function start() {
//     money = +prompt("Ваш бюджет на месяц?", '');
//     time = prompt("Введите дату в формате YYYY-MM-DD", '');

//     while(isNaN(money) || money == "" || money == null) {
//         money = +prompt("Ваш бюджет на месяц?", '');
//     }
// }
// start();

let appData = {
    budjet: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeDate: time,
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце?"),
                b = prompt("Во сколько обойдется?");
            if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && (typeof(a)) != '' && (typeof(b)) != '' && a,length < 50) {
                appData.expenses[a] = b;
            } else {
                console.log("Вы ввели некоректные значения")
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budjet / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    chooseOptExpenses: function() {
        let first = +prompt("Первая cтатья необязательных расходов?"),
        second = +prompt("Вторая cтатья необязательных расходов?"),
        third = +prompt("Третья cтатья необязательных расходов?");

        appData.optionalExpenses = {first, second, third};
        console.log(appData.optionalExpenses);
    },
    checkSavings: function() {
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего депозита " + appData.monthIncome);
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите ответ через запятую)", '');
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
    }
};



