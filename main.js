const action = ['Taş', 'Kağıt', 'Makas'];
const tasBtn = document.querySelector('#tasBtn');
const kagitBtn = document.querySelector('#kagitBtn');
const makasBtn = document.querySelector('#makasBtn');
const sonuc = document.querySelector('.sonuc');
const pcSecim = document.querySelector('.pcSecim');
const score = document.querySelector('#score');

function playForCpu() {
    return action[Math.floor(Math.random() * 3)];
}

tasBtn.addEventListener('click', userActionHandler);
kagitBtn.addEventListener('click', userActionHandler);
makasBtn.addEventListener('click', userActionHandler);

function userActionHandler() {
    play(this.innerText)
}

let cpuScore = 0;
let playerScore = 0;


function play(playerAction) {
    const cpuAction = playForCpu();
    pcSecim.innerHTML = cpuAction;
    if (playerAction === cpuAction) {
        console.log(`User:${playerAction} Pc:${cpuAction}`);
        console.log('Berabere');
        sonuc.innerHTML = 'Berabere';
        return;
    }

    else if ((playerAction == 'Taş' && cpuAction == 'Kağıt') || (playerAction == 'Kağıt' && cpuAction == 'Makas') || (playerAction == 'Makas' && cpuAction == 'Taş')) {
        console.log(`User:${playerAction} Pc:${cpuAction}`);
        console.log('Kaybettiniz');
        sonuc.innerHTML = 'Kaybettiniz';
        score.innerHTML = `<p> Oyuncu Score: ${playerScore} Pc Score: ${++cpuScore} </p>`
        return;
    }
    else if ((playerAction == 'Taş' && cpuAction == 'Makas') || (playerAction == 'Kağıt' && cpuAction == 'Taş') || (playerAction == 'Makas' && cpuAction == 'Kağıt')) {
        console.log(`User:${playerAction} Pc:${cpuAction}`);
        console.log('Kazandınız');
        sonuc.innerHTML = 'Kazandınız';
        score.innerHTML = `<p> Oyuncu Score: ${++playerScore} Pc Score: ${cpuScore} </p>`
        return;
    }
}