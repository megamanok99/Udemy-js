/*jshint esversion: 6 */
let money = +prompt("Ваш бюджет на месяц?");
let time= prompt("Введите дату в формате YYYY-MM-DD");
let appData={
    money: money,
    time : time,
    expenses:{},
    optionalExpenses:{},
    income : [],
    savings:false
};

for(i=0;i<2;i++){
    let a= prompt("Введите обязательную статью расходов в этом месяце"),
        b= prompt("Во сколько обойдется?");
    
    if((typeof(a))==='string' && (typeof(a))!= null && (typeof(b))!= null &&
    a !="" && b!="" &&  a.length<50  ){
        console.log('done');
        appData.expenses[a] =b;
    }
    else{
        alert("вы ошиблись с заполнением,обновите страницу");
    }

}
/*let i=0;
while(i<2) {
    i++;
    let a= prompt("Введите обязательную статью расходов в этом месяце"),
    b= prompt("Во сколько обойдется?");
    if((typeof(a))==='string' && (typeof(a))!= null && (typeof(b))!= null &&
    a !="" && b!="" &&  a.length<50  ){
        console.log('done');
        appData.expenses[a] =b;
    }
}*/
/*let i=0;
do{
    i++;
    let a= prompt("Введите обязательную статью расходов в этом месяце"),
    b= prompt("Во сколько обойдется?");
    if((typeof(a))==='string' && (typeof(a))!= null && (typeof(b))!= null &&
    a !="" && b!="" &&  a.length<50  ){
        console.log('done');
        appData.expenses[a] =b;
    }
}while(i<2);
*/
appData.moneyPerDay=appData.money/30;
alert("ежедневный бюджет: "+appData.moneyPerDay);

if(appData.moneyPerDay<100){
    console.log("minimalka");
}
else if(appData.moneyPerDay<2000){
    console.log("medium");
}
else if(appData.moneyPerDay>2000){
    console.log("high");
}
else{ 
        console.log("oshibka");
}

