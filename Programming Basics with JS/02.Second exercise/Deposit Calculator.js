function depositCalculator(input){
    let depositprice = Number(input[0]);
    let timedeposit = Number(input[1]);
    let yearpercent = Number(input[2]);
    let interestforoneyear = depositprice * (yearpercent / 100);
    let interestforonemonth = interestforoneyear / 12;
    let totalprice = depositprice + timedeposit * interestforonemonth;
    console.log(totalprice);
   

}
depositCalculator(['200','3','5.7'])