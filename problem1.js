



function calculateMoney(ticketSale) {
    let ticketSaleMoney = ticketSale ;
    const ticketPrice = 120; 
    const guardBill = 500 ;
    const staffLunch = 50 ;
    const staffNumber = 8 ; 

if( ticketSale > 0 ){
    const total = ( ticketSaleMoney * ticketPrice ) - ( guardBill + ( staffLunch * staffNumber ));
   return total ;
}
else{
    return "Invalid Number" ; 
    }
}
const x = calculateMoney(-130);
 console.log(x);