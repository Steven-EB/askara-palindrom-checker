const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const picToRotate = document.getElementById("picToRotate");

let angle = 0;

// listen for a click event on the check button
checkBtn.addEventListener("click", () => {
    // get the user's input to test
    const userInput = textInput.value;
    // if no input, display an error message
    if (userInput === "") {
        alert("Please input a value");
        return;
    }
    result.style.fontSize = "1rem";
    result.innerText = "Art by Eric Sabee, from Ascension: Deckbuilding Game";
    picToRotate.style.transform = `rotateY(${angle += 1080}deg)`;

    // clean out punctuation, symbols, spaces, capitalization
    const userInputCleaned = userInput
        .slice()
        .replace(/[\W_]/g, "")
        .toLowerCase();

    // for testing:
    //console.log(`userInput: ${userInput}, Cleaned: ${userInputCleaned}`);

    // transform cleaned user input into an array (so you can use reverse() method on it)
    const userArray = Array.from(userInputCleaned);

    // make a copy of userArray and reverse it
    const reverseUserArray = userArray.slice().reverse();

    // for testing:
    console.log(`userArray: ${userArray}, reverserUserArray: ${reverseUserArray}`)

    // comparing 2 arrays doesn't work in the below if statement, so transform them into strings using the join() method

    picToRotate.addEventListener("transitionend", () => {
        result.style.fontSize = "2rem";
        if (userArray.join("") === reverseUserArray.join("")) {
            result.innerText = `"${userInput}" is a palindrome`;
        } else {
            result.innerText = `"${userInput}" is not a palindrome`
        }
    }) 
});











