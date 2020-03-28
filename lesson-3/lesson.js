/*jshint esversion: 6 */
let money,time;
function start(){
     money = +prompt("Ваш бюджет на месяц?","");
     time= prompt("Введите дату в формате YYYY-MM-DD");
    while(isNaN(money) || money=="" || money==null) {
        money = +prompt("Ваш бюджет на месяц?",""); 
    }
}
start();

let appData={
    money: money,
    time : time,
    expenses:{},
    optionalExpenses:{},
    income : [],
    savings:true,
    chooseExpenses:function(){
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
    },
    detectDayBudget: function(){
        appData.moneyPerDay=(appData.money/30).toFixed();
        alert("ежедневный бюджет: "+appData.moneyPerDay);
    },
    detectLevel:function(){
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
    },
    checkSavings: function(){
        if (appData.savings==true){
            let save=+prompt("какова сумма накоплений?"),
                persent=+prompt("под какой процент?");
        
                appData.monthIncome=save/100/12*persent;
        }
        
        alert("доход в месяц с вашего депозита ="+ appData.monthIncome);
    },
    chooseOptExpenses:function(){
        for(i=1;i<4;i++){
            appData.optionalExpenses[i]=prompt("статья необязательных расходов");
            console.log('done');
        
            }
    },
    chooseIncome:function(){
        let items=prompt('что принесет доп доход?(перечислите через запятую)','');
        if((typeof(items))==='string' && (typeof(items))!= null && items!="" ){
                
                appData.income=items.split(', ');
                appData.income.push(prompt('что то еще'));
                appData.income.sort();
            }else{
                alert('вы где то накосячили');
            }
            appData.income.forEach(element =>console.log(element));


       
    }
};
for (const key in appData) {
    if (appData.hasOwnProperty(key)) {
        const element = appData[key];
        console.log('наша программа включает в себя данные '+element);
        
    }
}