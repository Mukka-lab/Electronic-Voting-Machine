let substituteText = document.querySelector('.division-1-text-1 span');
let politicalOffice = document.querySelector('.division-1-text-2 span');
let desc = document.querySelector('.division-1-text-4');
let tutorial = document.querySelector('.division-2');
let side = document.querySelector('.division-1-right');
let numbers = document.querySelector('.division-1-text-3');

// ============================================

let atualStage = 0;
let number = '';


function startStage(){
    let stage = stages[atualStage];

    let numberHTML = '';

    for(let i=0; i < stage.numbers; i++){
        if(i == 0){
            numberHTML += '<div class="number-box blink-effect"></div>';
        } else {
            numberHTML += '<div class="number-box"></div>';
        }
    };


    substituteText.style.display = 'none';
    politicalOffice.innerHTML = stage.title;
    desc.innerHTML = '';
    tutorial.style.display = 'none';
    side.innerHTML = '';
    numbers.innerHTML = numberHTML;
};


function interfaceUpdate(){

};


// ============================================
// Creating the functions for the buttons
// ============================================

function clicked(n){
    let vote_number = document.querySelector('.number-box .blink-effect');
    if(vote_number !== null){
        vote_number.innerHTML = n;
        number = `${number}${n}`;
    };
};

function white(){
    alert("Pressionou o botão branco!");
};

function correct(){
    alert("Pressionou o botão corrige!");
};

function confirm(){
    alert("Pressionou o botão confirma!");
};

// ============================================
// ============================================


startStage();