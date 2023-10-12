const button = document.querySelector('.bn54');

button.addEventListener('click', function(){

    const emailCheck = document.getElementById('e-mail').value;
    const validEmail = [
        "max.gilli98@gmail.com",
        "vin.derimanda@icloud.com",
        "manni.federico@libero.com",
        "riccardo.gabba02@gmail.com",
        "mirko.marasco@gmail.com"
    ];
    
    if(validEmail.includes(emailCheck)){
        let displayN = document.getElementById('displayN');
        displayN.classList.remove('d-none');
        let inputDisplay = document.getElementById('inputDisplay');
        inputDisplay.classList.add('d-none');
    } else{
        document.getElementById("invalidEmail").innerHTML=`
        <p class="fs-2 fw-bold mt-4 text-center text-dark bg-danger">La tua E-mail non è valida</p>
        `
    }   
});

const buttonDice = document.getElementById('dice');
buttonDice.addEventListener('click', function(){

    const userNumber = getRandomInteger(1, 6);
    const computerNumber = getRandomInteger(1, 6);

    if(userNumber === computerNumber){
        console.log('Tie')
    } else if(userNumber > computerNumber){
        console.log('You Won!');
    } else{
        console.log('You Lost!')
    }

});

function getRandomInteger(min, max) {   
    return Math.floor(Math.random() * (max - min + 1) ) + min; }