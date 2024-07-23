for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //alert("I got click.");
       console.log(this);
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        //animate when click 
        buttonAnimation(buttonInnerHTML);    
    });

    document.addEventListener("keypress", function(event){
        makeSound(event.key);

        //add  here to animate when key is pressed on keyboard
        buttonAnimation(event.key);
    });

    function makeSound(key){
        switch (key){
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
    
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
           }
    }
}

//this function will add the animation when key is pressed or click
function buttonAnimation(currentKey){
    
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    //the above line of code will be active unless it remove; therefore below setTimeout function will remove after 1 second
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}