const attempts = 5;

const phrases = [
    "Carpe diem",
    "Less is more",
    "Less is more",
    "Actions speak louder than words",
    "Time flies",
];

const qwerty = document.getElementById('qwerty');

const phrase = document.getElementById('phrase');

const btn_reset = document.querySelector('btn_reset');

let letterFound;

let missed = 0;

/*Remove Overlay and start the game*/
const overlay = document.querySelector("#overlay");

overlay.addEventListener("click", event => {
    
    if (event.target.tagName === "A"){
        startGame();
        overlay.style.display = "none";
    }
    
})
/************************************************************/

function getRandomPhrasesAsArray(array){

    const phrase = array[Math.floor(Math.random() * phrases.length)];

    const split_phrase = Array.from(phrase)

    return split_phrase;
}


function addPhraseToDisplay(phrase){
    
    const list = document.querySelector("#phrase > ul")
    
    phrase.forEach(character => {
        
        const listItemCharacter = document.createElement('li');
        
        listItemCharacter.textContent = character;
        
        list.appendChild(listItemCharacter);
        
        character !== " " ? listItemCharacter.className = "letter" : listItemCharacter.className = "space";
    })
    
}


function checkLetter(clickButtonLetter){

    let checkLetters = document.querySelectorAll('#phrase > ul > li.letter');

    let matchFound = null;

    checkLetters.forEach(Letter => {

        if (Letter.textContent.toLocaleLowerCase() === clickButtonLetter){
            Letter.classList.add("show");
            matchFound = true;
        }

    })

    
    return matchFound;

}



function checkWin(){
    
    let letters = document.querySelectorAll(".letter");
    
    let showLetter = document.querySelectorAll(".show");
    
    if (letters.length === showLetter.length){
        
        overlay.style.display = "flex";

        overlay.classList.add("win");

        endGame();

    }else if (missed >= attempts){

        overlay.style.display = "flex";

        overlay.classList.add("lose");

        endGame();

    }

}





qwerty.addEventListener('click', e => {
    
    console.log(e.target);
    const lives = document.querySelector("#scoreboard > ol").childNodes;
    
    if(e.target.tagName === "BUTTON" && !e.target.classList.contains('chosen')){
        
        e.target.classList.add('chosen');

        e.target.disabled = "true";

        const letterFound = checkLetter(e.target.textContent);
        
        if(!letterFound){

            lives[missed].firstElementChild.src = "images/lostHeart.png"

            missed = missed + 1;
        }
        
    }
    
    checkWin();
    
})


const gameButtons =  document.querySelector("#ReMatchButtons");
let count = 1;

gameButtons.addEventListener("click",
    clickItem => {
        if(clickItem.target.tagName === "BUTTON" && clickItem.target.textContent.toLocaleLowerCase() === "new game"){
            window.location.reload();
        }else if(clickItem.target.tagName === "BUTTON" && clickItem.target.textContent.toLocaleLowerCase() === "help" && count <= 3){
            count++;
            const letters = phrase.querySelectorAll("ul > li.letter");

            let helpLetter = letters[Math.floor(Math.random() * letters.length)];

            helpLetter.classList.add("show");
        }
    }
)



