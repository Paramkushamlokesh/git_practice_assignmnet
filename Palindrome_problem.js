let num=1221;

let bag=""+num;
let bag1="";
for(let i=bag.length-1;i>=0;i--){
   bag1=bag1+bag[i];
}
if(num==bag1){
console.log("No");
}
else{
console.log("Yes")
}