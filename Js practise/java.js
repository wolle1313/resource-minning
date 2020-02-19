const drewno = document.querySelector(".drewno");
const jedzenie = document.querySelector(".jedzenie");
const ruda = document.querySelector(".ruda");
const ty = document.querySelector(".ty");
const scoreDrewno = document.querySelector(".drewnoS span");
const scoreRuda = document.querySelector(".score .rudaS span");
const scoreJedzenie = document.querySelector(".jedzenieS span");
const scoreLipton = document.querySelector(".liptonS span");
const oreElement = document.querySelector(".ruda .move");
const exit = document.querySelector(".esc .exit");
const esc = document.querySelector(".esc");
const buyD = document.querySelector(".dogbuy");
const buyC = document.querySelector(".chatkabuy");
const buyZ = document.querySelector(".zabawkabuy");
const dogE = document.querySelector(".dogE");
const zabawkaE = document.querySelector(".zabawkaE");
const chatkaE = document.querySelector(".chatkaE");
const kapusta1 = document.querySelector('.kapusta:nth-child(2)');
const kapusta2 = document.querySelector('.kapusta:nth-child(3)');
const kapusta3 = document.querySelector('.kapusta:nth-child(4)');
const kapusta4 = document.querySelector('.kapusta:nth-child(5)');
const instructions = document.querySelector('.instructions');
const instructionsEsc = document.querySelector('.instructionsEsc');
const wrap = document.querySelector('.wrap');

const playerScores = {
    drewnoS: 0,
    jedzenieS: 2,
    rudaS: 10,
    liptonS: 4,
}
let {drewnoS} = playerScores;
let {jedzenieS} = playerScores;
let {rudaS} = playerScores;
let {liptonS} = playerScores;
function showResources() {
    scoreRuda.textContent = rudaS;
        scoreJedzenie.textContent = jedzenieS;
        scoreDrewno.textContent = drewnoS;
        console.log("everything is ok");
}

function exitInstruction() {
    instructions.classList.add('none');
    wrap.style.filter = "none";
    showResources();
}

setInterval(showResources, 5000);

instructionsEsc.addEventListener('click', exitInstruction);

drewno.addEventListener('click', function() {
    if (drewnoS > 998) {
        alert("you can't get more wood");
    }
    else {drewnoS++;
    scoreDrewno.textContent = drewnoS;
    }
});

ty.addEventListener('click', function() {
    esc.classList.toggle("none");
});


exit.addEventListener('click', function() {
    esc.classList.toggle("none");
})

oreElement.addEventListener('mouseover', function(){
    if (rudaS < 999){
    rudaS = rudaS + 2;
    scoreRuda.textContent = rudaS;
    }
    else {
        alert("you can't get more ore")
    }
})


function kapustaGrow(i) {
    (document.querySelector('.kapusta:nth-child(' + i + ')')).classList.remove("none");
}
function kapustaActive() {
    for (i = 2; i < 6; i++) {
    if (document.querySelector('.kapusta:nth-child(' + i + ')').classList.contains("none")) {
        kapustaGrow(i);
    };
    }
};
setTimeout(kapustaActive, 5000);

function kapustaJedna() {
    setTimeout(kapustaPActive, 5000);
}
function kapustaClick() {
    const kapusta = this;
    kapusta.classList.add("none");
    jedzenieS = jedzenieS + 5;
    function kapustaPActive() {
        kapusta.classList.remove("none");
    };
    setTimeout(kapustaPActive, 5000);
    scoreJedzenie.textContent = jedzenieS;
}
kapusta1.addEventListener('click', kapustaClick);
kapusta2.addEventListener('click', kapustaClick);
kapusta3.addEventListener('click', kapustaClick);
kapusta4.addEventListener('click', kapustaClick);

buyD.addEventListener('click', function(){
    if (rudaS > 200 && jedzenieS > 500) {
        rudaS = rudaS - 200;
        jedzenieS = jedzenieS - 500;
        showResources();
        dogE.classList.remove("none");
        youWin();
    }
    else {
        alert("you need more resources!")
    }
})
buyC.addEventListener('click', function(){
    if (drewnoS > 400 && rudaS > 150 && jedzenieS > 100) {
        rudaS = rudaS - 150;
        jedzenieS = jedzenieS - 100;
        drewnoS = drewnoS - 400;
        showResources();
        chatkaE.classList.remove("none");
        youWin();
    }
    else {
        alert("you need more resources!")
    }
})
buyZ.addEventListener('click', function(){
    if (rudaS > 400 && drewnoS > 200) {
        rudaS = rudaS - 400;
        drewnoS = drewnoS - 200;
        showResources();
        zabawkaE.classList.remove("none");
        youWin();
    }
    else {
        alert("you need more resources!")
    }
})

function youWin() {
    if (dogE.classList.contains("none") || zabawkaE.classList.contains("none") || chatkaE.classList.contains("none")) {
    }
    else {
        alert("YOU WON. THANKS FOR PLAYING!")
    }
}

 

