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
        if(i === 0){
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
    let stage = stages[atualStage];

    let candidate = stage.candidates.filter((item)=>{
        if(item.number === number){
            return true;
        } else {
            return false;
        }
    });

    if(candidate.length > 0){
        candidate = candidate[0];
        substituteText.style.display = "block";
        tutorial.style.display = "block";
        desc.innerHTML = `Candidato: ${candidate.name} <br>Partido: ${candidate.political_party}`;

        let photosHTML = '';
        for(let i in candidate.photo){
            photosHTML += `<div class="candidate"><img src="assets/img/${candidate.photo[i].url}" alt=""><p>${candidate.photo[i].legend}</p></div>`;
        }

        side.innerHTML = photosHTML;
    } else {
        substituteText.style.display = "block";
        tutorial.style.display = "block";
        desc.innerHTML = '<div class="alert blink-effect">VOTO NULO</div>';
    };
};


// ============================================
// Creating the functions for the buttons
// ============================================

function clicked(n){
    let vote_number = document.querySelector('.number-box.blink-effect');
    if(vote_number !== null){
        vote_number.innerHTML =n;
        number = `${number}${n}`;

        vote_number.classList.remove('blink-effect');
        if(vote_number.nextElementSibling !== null){
            vote_number.nextElementSibling.classList.add('blink-effect');
        } else {
            interfaceUpdate();
        }
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