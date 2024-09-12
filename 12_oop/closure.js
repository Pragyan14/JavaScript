// lexical scope

function init(){
    let name = "pragyan";
    function display(){
        console.log(name);
    }
    display();
}

init();


// closure

function init(){
    let name = "pragyan";
    function display(){
        console.log(name);
    }
    return display();
}

init();