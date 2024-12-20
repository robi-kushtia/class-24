
var totalIncome = 0;
var totalExpense = 0;

var inputAddIncome = document.querySelector("#income-input");
var btnAddIncome = document.querySelector("#add_income");
var inputExpense = document.querySelector("#expense-input");
var btnExpense = document.querySelector("#add_expense");


var btnTotalIncome = document.querySelector("#total-income");
var btnTotalExpense = document.querySelector("#total-expense");
var btnTotalBalance = document.querySelector("#total-balence");


btnTotalIncome.value = totalIncome;
btnTotalExpense.value = totalExpense;
btnTotalBalance.value = totalIncome - totalExpense;


btnAddIncome.addEventListener('click', function(){
    var addIncome = +inputAddIncome.value;
    totalIncome = totalIncome + addIncome;
    inputAddIncome.value = '';

    btnTotalIncome.value = totalIncome;
    btnTotalExpense.value = totalExpense;
    btnTotalBalance.value = totalIncome - totalExpense;


    if(parseFloat(btnTotalIncome.value) > parseFloat(btnTotalExpense.value)){
        var warningTextRed = document.querySelector("#total-balence");
        var warningMessage = document.querySelector("div.warning-message > p");
        warningMessage.innerText = 'Your Income Is Okey';
        warningTextRed.style.color = 'green';
        warningMessage.style.color = 'yellow';

    };
});


btnExpense.addEventListener('click', function(){
    var addExpense = +inputExpense.value;
    totalExpense = parseFloat(totalExpense + addExpense);
    inputExpense.value = '';


    btnTotalIncome.value = totalIncome;
    btnTotalExpense.value = totalExpense;
    btnTotalBalance.value = totalIncome - totalExpense;


    if(parseFloat(btnTotalIncome.value) < parseFloat(btnTotalExpense.value)){
        var warningTextRed = document.querySelector("#total-balence");
        var warningMessage = document.querySelector("div.warning-message > p");
        warningMessage.innerText = '!Warning: Your Income Is Poor';
        warningTextRed.style.color = 'red';
        warningMessage.style.color = 'red';
    };

});