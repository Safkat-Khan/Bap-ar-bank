document.getElementById('btn-Withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValue = withdrawField.value 
    const givenBalance = parseFloat(withdrawFieldValue);

    const Balance = document.getElementById('withdraw-value');
    const withdrawAmountString = Balance.innerText;
    const givenAmount = parseFloat(withdrawAmountString);
   
    const showBalance = givenBalance + givenAmount;
    Balance.innerText = showBalance ;

    const currentBalanceString = document.getElementById('balance-total');
    const currentBalancevalue = currentBalanceString .innerText
    const currentBalance = parseFloat(currentBalancevalue);
    const newBalance = currentBalance - givenBalance;
    currentBalanceString.innerText = newBalance;

    withdrawField.value ='';
})

