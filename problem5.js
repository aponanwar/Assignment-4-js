function monthlySavings(myArr, livingCost) {
if(Array.isArray(myArr)){
    let allTax = 0;
    let earning = 0;
    for (const iterator of myArr) {
        // console.log(iterator);
        earning = earning + iterator;
        // console.log(earning);


        if (iterator >= 3000) {
            bankTax = iterator * (20/100)
           
            allTax = bankTax + allTax;
            //  console.log(allTax);
        }
        
    }

    let savings =  earning - (allTax + livingCost);

    // return savings;
    
    if ( savings < 0){
        return "Earn More"
    }else{
        return savings;
    }
}else{
    return 'invalid input'
}
   
}

const result = monthlySavings([900,2700, 3400], 10000);
console.log(result);