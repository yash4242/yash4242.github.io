
    document.getElementsByTagName("nav")[0].style.position = "fixed";

const sentences = [
    'gtodiayuh👍',
    'नमस्ते!',
    'здравствуйте!',
    'Hallo!',
    'return 42;',
    'vim>>>>>',
    'this line is open to interpretation',
];

const timer = ms => new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
});

const typeSentences = async (sen) => {

    // Start with an empty string
    let displayText = "";
    // For every sentence
    for (let i = 0; i < sen.length; i = (i+1)% sen.length) {
        // For every character in current sentence
        for (let j = 0; j < sen[i].length; j++) {
            // Add to text and print, then delay
            displayText += sen[i][j];
            document.getElementById("changing_text").innerHTML = displayText;
            await timer(50);
        }
        // Small delay for aesthetics
        await timer(1000);
        // For every character in current sentence
        for (let j = 0; j < sen[i].length; j++) {
            // Remove the character and print, then delay
            displayText = displayText.substring(0, displayText.length - 1);
            document.getElementById("changing_text").innerHTML = displayText;
            await timer(50);
        }
    }
}

typeSentences(sentences);




const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.querySelector("#prevbutton");
const nextBtn = document.querySelector("#nextbutton");

let counter = 1;
let size = carouselImages[0].clientWidth;

carouselSlide.style.transform  = 'translateX(' + (-size*counter) + 'px )';

//button listener
nextBtn.addEventListener('click', () =>{
    if(counter >= carouselImages.length -1){return;}
    carouselSlide.style.transition =  "transform 0.4s ease-in-out";
    counter++;
    // console.log(counter);
    carouselSlide.style.transform  = 'translateX(' + (-size*counter) + 'px)';
});

prevBtn.addEventListener('click', () =>{
    if(counter <= 0){return;}
    carouselSlide.style.transition =  "transform 0.4s ease-in-out";
    counter--;
    // console.log(counter);
    carouselSlide.style.transform  = 'translateX(' + (-size*counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === "lastimgclone")
    {
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - 2;
    carouselSlide.style.transform  = 'translateX(' + (-size*counter) + 'px)';
    }
    if(carouselImages[counter].id === "firstimgclone")
    {
        carouselSlide.style.transition = "none"
        counter = 1;
    carouselSlide.style.transform  = 'translateX(' + (-size*counter) + 'px)';
    }
    
});

function nav_highlight(elem)
{
    elem.style.backgroundColor = "black"; 
}function nav_dishighlight(elem)
{
    elem.style.backgroundColor = "rgb(35,55,69)"; 
}
