try{
    console.log(userName);
} catch(error){
    console.error("An error occured: ",error);
} finally{
    console.log("This will allways be excecuted");
}

function checkAge(age){
    try{
        if (age<18){
            throw new Error("Age cannot be negative");
        }
        console.log("age is valid");
    }catch (error){
        console.error("An error occured: " + error.message);
    }
}
checkAge(16);