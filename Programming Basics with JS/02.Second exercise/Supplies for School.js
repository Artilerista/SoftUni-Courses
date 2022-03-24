function suppliesForSchool(input){
    let pen = Number(input[0]);
    let mark = Number(input[1]);
    let deteragent = Number(input[2]);
    let discount = Number(input[3]);
    let price = pen * 5.80 + mark * 7.20 + deteragent * 1.20;
    let deteragentofprice = (price * discount / 100);
    let totalprice = price - deteragentofprice;
    console.log(totalprice);
}
suppliesForSchool(['2','3','4','25'])