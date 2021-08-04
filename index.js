function makeSounds(val) {
    switch (val) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "a":
            var tom = new Audio('sounds/tom-1.mp3');
            tom.play();
            break;

        case 's':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case 'd':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'j':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case 'k':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'l':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        default: console.log(val)
    }
}
numberofDrumBtns = document.querySelectorAll("button").length

for (var i = 0; i < numberofDrumBtns; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerhtml = this.innerHTML;
        makeSounds(buttonInnerhtml);
    });
}

document.addEventListener("keypress", function (event) {
    makeSounds(event.key)
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
    
}