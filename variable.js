const pi=3.14;
console.log(pi);
try{
    pi=3.14159;
    console.log(pi);
} catch(error){
    console.error("Error:",e.message);
}