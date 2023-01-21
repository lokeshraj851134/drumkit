
/************Detecting Button Press ***********************/
var numberoflisterner = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberoflisterner; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);



    });
}


/******************Detecting keyboard press **********/
document.addEventListener("keydown" , function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            numberoflisterner = new Audio("sounds/tom-1.mp3");
            numberoflisterner.play();

            break;
        case "a":
            numberoflisterner = new Audio("sounds/tom-2.mp3");
            numberoflisterner.play();

            break;

        case "s":
            numberoflisterner = new Audio("sounds/tom-3.mp3");
            numberoflisterner.play();

            break;

        case "d":
            numberoflisterner = new Audio("sounds/tom-4.mp3");
            numberoflisterner.play();

            break;

        case "j":
            numberoflisterner = new Audio("sounds/snare.mp3");
            numberoflisterner.play();

            break;

        case "k":
            numberoflisterner = new Audio("sounds/kick-bass.mp3");
            numberoflisterner.play();

            break;

        case "l":
            numberoflisterner = new Audio("sounds/crash.mp3");
            numberoflisterner.play();

            break;

        default: comsole.log(buttonInnerHTML);
    }


}

function buttonAnimation(currentKey){
    var activeButton= document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout( function(){
        activeButton.classList.remove("pressed");
    },100);
}
