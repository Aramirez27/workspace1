//Valida nombre


function checkNameField(){
    var ok = true;

    var name = document.getElementById("name");
    var resultadonombre = document.getElementById("resultadonombre");
    var patronNombre = /^[A-Za-z áéíóúÁÉÍÓÚÑñ]+$/;

    name.classList.remove('invalid');
    name.classList.remove('valid');
    resultadonombre.innerHTML = "";
    
    var verifyFillInput = true;

    if(name.value.length == 0){
        resultadonombre.innerHTML = "Rellene este campo";
        resultadonombre.style.display = "block";
        name.classList.add('invalid');
        verifyFillInput = false;
        ok = false;
    }
    
    if(verifyFillInput){
        if(patronNombre.test(name.value) == false){
            resultadonombre.innerHTML = "Nombre inválido";
            resultadonombre.style.display = 'block';
            name.classList.add('invalid');
            ok = false;
        } else {
            name.classList.add('valid');
        }

    }

    return ok;
}

//Valida mail con expresiones regulares
function isValidEmail() { 
    var ok = true;

    var mail = document.getElementById("userEmail");
    var resultadoemail = document.getElementById("resultadoemail");
    const emailRegex =  new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

    mail.classList.remove('invalid');
    mail.classList.remove('valid');
    resultadoemail.innerHTML = "";

    var verifyifmail = true;

    if(mail.value.length == 0){
        resultadoemail.innerHTML = "Rellene este campo";
        resultadoemail.style.display = "block";
        mail.classList.add('invalid');
        verifyifmail = false;
        ok = false;
        }

    if(verifyifmail){
        if(emailRegex.test(mail.value) == false){ 
            resultadoemail.innerHTML = "Email inválido";
            resultadoemail.style.display = 'block';
            mail.classList.add('invalid');
            ok = false;
            }else{
            mail.classList.add('valid');
            }
        }
        return ok;
    }

//Valida password
function isValidPassword(){
    var ok = true;
    
    var password1 = document.getElementById("passw1");
    var password2 = document.getElementById("passw2");
    var passwordFeedback = document.getElementById("password_feedback");
    var confirmPasswordFeedback = document.getElementById("confirm_password_feedback");
    

    //Limpiamos el contenido para que no sumen mensajes a los anteriores
    passwordFeedback.innerHTML ="";
    confirmPasswordFeedback.innerHTML ="";
    //Ocultamos de vuelta lo que hayamos mostrado
    passwordFeedback.style.display = 'none';
    confirmPasswordFeedback.style.display = 'none';
    //Le limpiamos la clase de invalid para que vuelva a ser borde normal
    password1.classList.remove('invalid');
    password2.classList.remove('invalid');
    password1.classList.remove('valid');
    password2.classList.remove('valid');

    var canVerifyIfEquals = true;
    
    if(password1.value.length > 8) {
        passwordFeedback.innerHTML = "No más de 8 caracteres";
        passwordFeedback.style.display = 'block';
        password1.classList.add('invalid');
        canVerifyIfEquals = false;
        ok = false;
    }
    else {
        if(password1.value.length == 0){
            passwordFeedback.innerHTML = "Rellene este campo";
            passwordFeedback.style.display = 'block';
            password1.classList.add('invalid');
            canVerifyIfEquals = false;
            ok = false;
        } else {
            password1.classList.add('valid');
        }    
    }

    if(password2.value.length == 0){
        confirmPasswordFeedback.innerHTML = "Rellene este campo";
        confirmPasswordFeedback.style.display = 'block';
        password2.classList.add('invalid');
        canVerifyIfEquals = false;
        ok = false;
    } else {
        password2.classList.add('valid');
    }

    if(canVerifyIfEquals){
        if(password1.value != password2.value){
            confirmPasswordFeedback.innerHTML = "Las contraseñas no coinciden";
            confirmPasswordFeedback.style.display = 'block';
            password2.classList.remove('valid');
            password1.classList.remove('valid');

            password2.classList.add('invalid');
            password1.classList.add('invalid');
            ok = false;
        } else{
            password2.classList.add('valid');
            password1.classList.add('valid');
        }
        
   
    } return ok;
}

function validar(){

    

    let nombreok = checkNameField();
    
    let emailok = isValidEmail();
        
    let passwordok = isValidPassword();
    
    if(nombreok && emailok && passwordok){
        alert("la inscripcion ha sido correcta")
    }
    

}
    


 
  



/*var nombre = document.getElementById('name').value;
    if (isNaN(nombre)){
        document.write(`${nombre} no debe tener numeros`);
    }
   */