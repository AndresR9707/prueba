const form = document.querySelector('form');
form.addEventListener('submit', validateShipment); 

function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validatephone(phone){
    var resul = /^([0-9])*$/;
    return resul.test(phone);
}

function validateShipment(event){
    event.preventDefault();
   const name = document.querySelector('#name');
   const email = document.querySelector('#email');
   const telephone = document.querySelector('#phone');
   

   if(name.value == ''){
       alert('[NAME] Required field');
   }else{
        console.log(name.value);
    }
   if(validateEmail(email.value)){
    console.log(email.value);
   }else{
    alert('Email incorrect ');
    }
   if(validatephone(telephone.value)){
    console.log(telephone.value);
   }else{
    alert('Phone incorrect');
    }
    const checkboxes = document.querySelectorAll('[type="checkbox"]');
    let curseselect = false; 
    for(const checkbox of checkboxes){
        if(checkbox.checked) {
            curseselect = true;
        }
    } 
    if(curseselect == false){
        alert('seleccione un producto');
        return;
    }
    const selectedCboxes = Array.prototype.slice.call(checkboxes).filter(ch => ch.checked==true);
    for (const i = 0; i< selectedCboxes.length; i++) {
        console.log(selectedCboxes[i].name);
    }
    console.log('form validation');
}
