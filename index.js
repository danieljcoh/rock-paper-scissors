

/*
1. Change the innerHTML to show a choice
2. a choice array for the computer
3. the computer chooses a random choice and outputs it to innerHTML
4. The value of a choice correlates to the value of an image
*/

// PROBLEM TO FIX
// Change the orientation of where the images are
// The images need a div and an id in order to use innerHTML



//ARRAY
let images = [
    "imgs/paper_img.png",
    "imgs/rock_img.png",
    "imgs/scissors_img.png",
    "imgs/hi_img.png"
]


// VARIABLES
let player_choice = document.getElementById("player_choice");
let btn = document.getElementById("fight_btn");
let player_image = document.getElementById("player_battlefield_img")
let computer_image = document.getElementById("computer_img")
let computer_choice = document.getElementById("computer_choice")


// FUNCTIONS
function computer__RPS_choice() {
    let random_computer_choice = Math.floor(Math.random() * 3)

    computer_image.innerHTML = `<img id="computer_img" src=${images[random_computer_choice]} alt="a test image">`
    if (random_computer_choice === 0) {
        computer_choice.innerHTML = `<h3>Paper</h3>`
    } else if (random_computer_choice === 1) {
        computer_choice.innerHTML = `<h3>Rock</h3>`
    } else if (random_computer_choice === 2) {
        computer_choice.innerHTML = `<h3>Scissors</h3>`
    }
}


// EVENT LISTENERS
btn.addEventListener("click", function() {

    let player_result = player_choice.value;
    let player_result_lowercase = player_result.toLowerCase();

    if (player_result_lowercase === "rock") {
        player_image.innerHTML = `<img id="player_img" src=${images[1]} alt="a test image">`
        computer__RPS_choice()
    }
    else if (player_result_lowercase === "paper") {
        player_image.innerHTML = `<img id="player_img" src=${images[0]} alt="a test image">`
        computer__RPS_choice()
    }
    else if (player_result_lowercase === "scissors") {
        player_image.innerHTML = `<img id="player_img" src=${images[2]} alt="a test image">`
        computer__RPS_choice()
    }
    else {
        alert("That's an invalid response!")
    }

})

