const promiseOne = new Promise((resolve,reject) => {
    setTimeout(()=>{
    console.log("Inside Promise");
    resolve();
    },2000);
})

promiseOne.then(()=>{
    console.log("Promise consumed");
})

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async task 2");
        resolve();
    },2000)
}).then(()=>{
    console.log("Async task 2 resolved");
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"Pragyan",email:"pragyan@example.com"});
    },1000)
}).then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let user = false;
        if(user){
            resolve({username:"Appu",email:"appu@example.com"});
        } else {
            reject("appu Something went wrong");
        }
    },2000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username;
})
.then((username)=>{
    console.log(username)
})
.catch((err)=>{
    console.log(err);
})
.finally(()=> console.log("appu Promise is either resolved or rejected"));



// option two to handle promise (using async function)

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let user = true;
        if(user){
            resolve({username:"Manish",email:"manish@example.com"});
        } else {
            reject("manish Something went wrong");
        }
    },2000)
})

async function consumePromiseFive(){
    try{
        const reponse = await promiseFive;
        console.log(reponse);
    } catch (err){
        console.log(err);
    }
}

consumePromiseFive();


// async function getAllUser(){
//     try{
//         const response = await fetch('https://api.github.com/users/pragyan14')
//         const data = await response.json();
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }
// getAllUser();

fetch("https://api.github.com/users/pragyan14")
.then((response)=>{
    return response.json();
})
    .then((data)=>{
        console.log(data);
    })
.catch((err)=>{
    console.log(err);
})