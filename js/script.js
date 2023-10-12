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

const diceOutput = document.getElementById('diceOutput');
const matchStatus = document.createElement('p');
diceOutput.append(matchStatus);
matchStatus.classList.add('fw-bold','fs-3');



const buttonDice = document.getElementById('dice');
buttonDice.addEventListener('click', function(){

    const userNumber = getRandomInteger(1, 6);
    const computerNumber = getRandomInteger(1, 6);
    let color = '';
    

    if(userNumber === computerNumber){
        console.log('Tie');
        matchStatus.innerHTML = 'Tie';
        matchStatus.classList.remove('text-warning','text-success','text-danger');
        color = 'text-warning';
        matchStatus.classList.add(color);  
    } else if(userNumber > computerNumber){
        console.log('You Won!');
        console.log(userNumber);
        matchStatus.classList.remove('text-warning','text-success','text-danger');
        color = 'text-success';
        matchStatus.classList.add(color);
        matchStatus.innerHTML = 'Won';
    } else{
        console.log('You Lost!');
        matchStatus.classList.remove('text-warning','text-success','text-danger');
        color = 'text-danger';
        matchStatus.classList.add(color);
        matchStatus.innerHTML = 'Lost'; 
    }
    
    
});


function getRandomInteger(min, max) {   
    return Math.floor(Math.random() * (max - min + 1) ) + min; }