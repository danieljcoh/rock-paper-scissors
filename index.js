

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
    "img/rock_img.png",
    "img/paper_img"
]


// VARIABLES
let player_choice = document.getElementById("player_choice");
let btn = document.getElementById("fight_btn");
let player_image = document.getElementById("player_img")
let computer_image = document.getElementById("computer_img")

// EVENT LISTENERS
btn.addEventListener("click", function() {


    let player_result = player_choice.value;
    let player_result_lowercase = player_result.toLowerCase();

    if (player_result_lowercase === "rock") {
        //IMG
        player_image.innerHTML = `<img id="player_img" src=${images[1]} alt="a test image">`
    }
    else if (player_result_lowercase === "paper") {
        //IMG
    }
    else if (player_result_lowercase === "scissors") {
        //IMG
    }
    else {
        alert("That's an invalid response!")
    }

    alert(player_result_lowercase)
})

