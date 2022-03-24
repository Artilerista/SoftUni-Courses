function foodDelivery(input){
    let chickensmenu = Number(input[0]);
    let fishmenu = Number(input[1]);
    let vegetarianmenu = Number(input[2]);
    let menu = (chickensmenu * 10.35) + (fishmenu * 12.40) + (vegetarianmenu * 8.15);
    let desert = menu * 0.20;
    let finalprice = menu + desert + 2.50;
    console.log(finalprice);

}
foodDelivery(['2','4','3'])