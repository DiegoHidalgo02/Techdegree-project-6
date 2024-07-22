let attempts = 0;

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



/*Remove Overlay and start the game*/
const overlay = document.querySelector("#overlay");

overlay.addEventListener("click", event => {

    if (event.target.tagName === "A"){
        overlay.style.display = "none";
    }

})
/************************************************************/


function getRandomPhrasesAsArray(array){

    const phrase = array[Math.floor(Math.random() * phrases.length)];

    const split_phrase = Array.from(phrase)

    return split_phrase;
}







