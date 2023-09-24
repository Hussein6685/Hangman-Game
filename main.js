// letters
const letters = "abcdefghijklmnopqrstuvwxyz123456789ابت";
//  get array from  letters
let lettersArray = Array.from(letters);
// select letters container
let lettersContainer = document.querySelector(".letters");
// generate letters
lettersArray.forEach(letter => {
    //create span
    let span = document.createElement("span");
    // create letter text node
    let theLetter = document.createTextNode(letter);
    // append the letter to span
    span.appendChild(theLetter);
    // add class on span
    span.className = 'letter-box';
    // append span to the letters container
    lettersContainer.appendChild(span);
});
