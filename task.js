let num=7;
if (num%2==0){
    console.log("Even");
}
else {
    console.log("Odd");
}

let fruit="apple";
switch (fruit){
    case "apple":
        console.log("red");
        break;
    case "banana":
        console.log("yellow");
        break;
    case "mango":
        console.log("King of fruits");
        break;
    default:
        console.log("Unkonwn fruit");
}

for(let i=1;i<=5;i++){
    console.log(i);
}
for(let i=5;i>=1;i--){
    console.log(i);
}

let i=1;
while(i<=3){
    console.log("Round "+ i);
    i++;
}