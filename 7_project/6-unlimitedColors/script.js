let changeBg = function(){
    let randomNumber1 = Math.floor(Math.random() * 255);
    let randomNumber2 = Math.floor(Math.random() * 255);
    let randomNumber3 = Math.floor(Math.random() * 255);
    let rgb = "rgb("+randomNumber1+","+randomNumber2+","+randomNumber3+")";
    document.body.style.backgroundColor = rgb;
}
let stopMe;
document.querySelector("#start").addEventListener('click',function(){
    if(!stopMe){
        stopMe = setInterval(changeBg,1000);
    }
})
document.querySelector("#stop").addEventListener('click',function(){
    clearInterval(stopMe);
    stopMe = null;
})