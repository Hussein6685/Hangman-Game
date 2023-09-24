// letters
const letters = "abcdefghijklmnopqrstuvwxyz";
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
// object of word + categories
const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}
// get random property
let allKeys = Object.keys(words);
// random number depend on keys length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
// category
let randomPropName = allKeys[randomPropNumber];
// category words
let randomPropValue = words[randomPropName];
// random number depend on words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
// the chosen words
let randomValueValue = randomPropValue[randomValueNumber];
// set category info
document.querySelector(".game-info .category span").innerHTML = randomPropName;
// select letters guess element
let lettersGuessContainer = document.querySelector(".letters-guess");
//  convert chosen word to array
let lettersAndSpace = Array.from(randomValueValue);
// create spans depend on word
lettersAndSpace.forEach(letter => {
    // create empty span
    let emptySpan = document.createElement("span");
    //
    if (letter === ' ') {
        // if letter is space
        emptySpan.className = 'with-space';
    }
    // append span to the letters guess container
    lettersGuessContainer.appendChild(emptySpan);
});
/*  handle clicking on letters  */
document.addEventListener("click", (e) => {
    if (e.target.className === 'letter-box') {
        e.target.classList.add("clicked");
        // get clicked letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();
        // console.log(lettersAndSpace);//  the chosen word
        lettersAndSpace.forEach((wordLetter, index) => {

            //if the clicked letter equal to one of the chosen word letter
            if (theClickedLetter === wordLetter) {
                console.log(`Found At Index Number ${index}`);

            }

        });
    }
});
