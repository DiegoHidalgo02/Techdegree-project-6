let attempts = 0;

const phrases = [
    "Carpe diem",
    "Less is more",
    "Less is more",
    "Actions speak louder than words",
    "Time flies",
];



const overlay = document.querySelector("#overlay");

overlay.addEventListener("click", event => {

    if (event.target.tagName === "A"){
        overlay.style.display = "none";
    }

})

