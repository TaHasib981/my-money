// getting input value
function costing(x){
    const xInput = document.getElementById(x)
    const xInputValue = xInput.value 
    const xInputFloat = parseFloat(xInputValue)
    const theFloat = xInputFloat
    xInput.value =theFloat 
    // empty input
    return theFloat
}
// for totalExpenses and Rest Balance
function totalMoney(x){
    const money = document.getElementById(x)
    const moneyText = money.innerText
    const moneyFloat = parseFloat(moneyText)
    const themoney = moneyFloat
    money.innerText = themoney 
    money.innertex = ""
    return themoney 
    
}
// calculate Button
document.getElementById('calculateBtn').addEventListener('click',function(){
    const foodIifo = costing('foodInput')
    const rentInfo = costing('rentInput')
    const clothesInfo = costing('clothesInput')
    const totalExpenses = foodIifo + rentInfo + clothesInfo
    
    const theExpenses = document.getElementById('expenses')
    const finalExpenses =  totalMoney('expenses') + totalExpenses
    theExpenses.innerText = finalExpenses 

    const incomeInfo = costing('incomeInput')

    const theBalance = incomeInfo - finalExpenses 

    const restBalance = document.getElementById('balance')
    const restBalanceText = restBalance.innerText 
    restBalance.innerText = theBalance

    //return for remaining balance
    return theBalance
})
// save button
document.getElementById('save').addEventListener('click',function(){
    const savePrnt = costing('saveInfo')
    if(typeof savePrnt.value == 'string'){
        alert(`enter number please!`)
    }
    else{
        const incomeInfo = costing('incomeInput')
        const savePrnt = costing('saveInfo')
        const saving = (incomeInfo / 100) * savePrnt
    //saving balance
       const savingBalance = document.getElementById('saving-Balance')
       const savingBalaneText = savingBalance.innerText
       const savingBalanceFloat = parseFloat(savingBalaneText)
       const totalSavingBalance =  savingBalanceFloat + saving
       savingBalance.innerText = totalSavingBalance
    //remaining balance
       const getBalance = document.getElementById('balance').innerText
       const getBalanceFloat = parseFloat(getBalance)
      
    
       const theRemainingBalance = getBalanceFloat - totalSavingBalance
       
        const remainingBalance = document.getElementById('remaining-balance')
        const remainingBalanceText = remainingBalance.innerText
        const remainingBalanceFloat = parseFloat(remainingBalanceText)
        remainingBalance.innerText = remainingBalanceFloat + theRemainingBalance
    }

})