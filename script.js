// ===============================
// LOADING SCREEN
// ===============================

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, 800);
});

// ===============================
// TYPING EFFECT
// ===============================

const typing = document.querySelector(".typing");

const words = [
    "Web Developer",
    "JavaScript Programmer",
    "Game Creator",
    "UI Designer",
    "Creative Thinker"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent =
        currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if(letterIndex === currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typing.textContent =
        currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if(letterIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 45 : 110);

}

typeEffect();

// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top =
        section.offsetTop - 150;

        if(scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
document.querySelectorAll(
".about-card,.skill-card,.project-card,form"
);

const reveal = ()=>{

    revealElements.forEach(el=>{

        const top =
        el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            el.style.opacity = "1";

            el.style.transform = "translateY(0)";

        }

    });

};

window.addEventListener("scroll",reveal);

reveal();

// ===============================
// CONTACT FORM
// ===============================

const form =
document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
"Thanks for reaching out! This demo form isn't connected to a server yet."
    );

    form.reset();

});

// ===============================
// MOBILE MENU
// ===============================

const menu =
document.querySelector(".menu-btn");

const nav =
document.querySelector("nav");

menu.addEventListener("click",()=>{

    if(nav.style.display==="flex"){

        nav.style.display="none";

    }else{

        nav.style.display="flex";

        nav.style.flexDirection="column";

        nav.style.position="absolute";

        nav.style.top="90px";

        nav.style.right="20px";

        nav.style.background="#151526";

        nav.style.padding="20px";

        nav.style.borderRadius="15px";

        nav.style.boxShadow="0 0 30px #8d52ff";

    }

});

// ===============================
// GLOW FOLLOW EFFECT
// ===============================

const glow =
document.createElement("div");

glow.style.position="fixed";
glow.style.width="18px";
glow.style.height="18px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="#9d5cff";
glow.style.boxShadow="0 0 35px #9d5cff";
glow.style.zIndex="9999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-9+"px";
    glow.style.top=e.clientY-9+"px";

});

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
"%cWelcome to Trevor's Portfolio!",
"color:#9d5cff;font-size:22px;font-weight:bold;"
);
