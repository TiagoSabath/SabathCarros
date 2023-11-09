function onChangeEmail(){
    toggleButtonDisable();
    toggleEmailError();
}

function onChangePassword(){
    toggleButtonDisable();
    togglePasswordError();
}

function login(){
    firebase.auth().signInWithEmailAndPassword(form.email().value,form.password().value).then(response =>{
        window.location.href = 'Pages/Anuncios.html';
    }).catch(error =>{
        alert(getErrorMessage(error));
    }); 
}

function register() {
    window.location.href = "pages/register.html";
}

function recoverPassword() {
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        alert('Email enviado com sucesso');
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}

function getErrorMessage(error){
    if(error.code == "auth/user-not-found"){
        return "Usuário não encontrado, Por favor cadastre-se!";
    }
    if (error.code == "auth/wrong-password") {
        return "Senha inválida";
    }
    return error.message;
}

function isEmailValid(){
    const email = form.email().value;
    if (!email){
        return false;
    }
    return validateEmail(email);
}

function toggleEmailError(){
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordError(){
    const email = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonDisable(){
    const emailValid = isEmailValid();
    form.recoverPasswordButton().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}

function isPasswordValid(){
    const password = form.password().value;
    if (!password){
        return false;
    }
    return true;
}


const form = {
    email: () => document.getElementById('email'),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById('password'),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPasswordButton: () => document.getElementById("recover-password-button"),
}
