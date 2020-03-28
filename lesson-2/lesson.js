/*jshint esversion: 6 */
/*let arr=['firsrt',2,'third',4,5];
//arr.pop();
//arr.push('5');
//arr.shift();
//arr.unshift('1');
//for(let i=0;i<arr.length;i++){
//    console.log(arr[i]);
//}
arr.forEach(function(item,i,mass){
    console.log(i+':' + item+mass);

});
console.log(arr);

let mass=[1,3,4,5,6];
for(let key  of mass){
    console.log(key);
}*/
//let ans=prompt('','');
//arr=[];
//arr= ans.split(',');
//console.log(arr);
//let arr=['awae','zzz','sew','wew'];
//let i= arr.join(', ');
//console.log(i);
let arr=[1,25,4];
let i= arr.sort(compareNum);
function compareNum(a,b){
    return a-b;
}
console.log(i);

let soldier={
    healrth:400,
    armor:100
}
let john={
    health:100
}
john.__proto__=soldier;
console.log(john);
console.log(john.armor);