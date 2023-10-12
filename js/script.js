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
        console.log('la tua e-mail è valida');
        let displayN = document.getElementById('displayN');
        displayN.classList.remove('d-none');
        let inputDisplay = document.getElementById('inputDisplay');
        inputDisplay.classList.add('d-none');
    } else{
        console.log('La tua e-mail non è valida');
        document.getElementById("invalidEmail").innerHTML=`
        <p class="fs-2 fw-bold mt-4 text-center text-dark bg-danger">La tua E-mail non è valida</p>
        `
    }   
});


