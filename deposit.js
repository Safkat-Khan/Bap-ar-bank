document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousdepositTotalString = depositTotalElement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);

    const currentDepositTotal = previousdepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal ;

    const totalBalance = document.getElementById('balance-total');
    const totalBalanceString = totalBalance.innerText;
    const covtTotalBalance = parseFloat(totalBalanceString);
    
    const finalBalance = newDepositAmount + covtTotalBalance;
    totalBalance.innerText = finalBalance;


    depositField.value ='';
})