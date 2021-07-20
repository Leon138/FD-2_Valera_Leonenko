import { signIn } from '../../api/api-handlers';
import { setToken } from '../../shared/ls-sevice';
import { routes } from '../../shared/constants/routes';
import { emailValidator, passwordLengthValidator } from '../../shared/validators';
import { 
  showPasswordLengthErrorMessage, 
  hidePasswordLengthErrorMessage, 
  showEmailLengthErrorMessage, 
  hideEmailLengthErrorMessage,
} from '../../shared/error-handlers';


export const signInHandler = () => {
  const signInForm = document.querySelector('.sign-in__form');
  const signInBtn = document.getElementById('signInBtn');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  
  const formFields = {
    email: {
      isValid: false
    },
    password: {
      isValid: false
    }
  }

  signInBtn.setAttribute('disabled', true);

  signInForm.addEventListener('submit', event => {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    signIn(email, password).then( responce => {
      if (responce) {
        const { idToken: token } = responce.data;
        setToken(token);
        window.location.href = routes.home;
      }
    });
  });

  passwordInput.oninput = () => {
    if (passwordLengthValidator(emailInput.value)) {
      formFields.password.isValid = true;
      hidePasswordLengthErrorMessage();
      passwordInput.classList.remove('invalid');
    } else {
      formFields.password.isValid = false;
      passwordInput.classList.add('invalid');
    }

    checkFormValid();
  }

  passwordInput.onblur = () => {
    if (!passwordLengthValidator(passwordInput.value)) {
      showPasswordLengthErrorMessage();
    } else {
      hidePasswordLengthErrorMessage();
    }
  }

  emailInput.oninput = () => {
    if (emailValidator(emailInput.value)) {
      formFields.email.isValid = true;
      hideEmailLengthErrorMessage();
      emailInput.classList.remove('invalid');
    } else {
      formFields.email.isValid = false;
      emailInput.classList.add('invalid');
    }

    checkFormValid();
  }

  emailInput.onblur = () => {
    if (!emailValidator(emailInput.value)) {
      showEmailLengthErrorMessage();
    } else {
      hideEmailLengthFormErrorMessage();
    }
  }

  const checkFormValid = () => {
    const isFormValid = Object.values(formFields).every( value => value.isValid);
    isFormValid ? signInBtn.removeAttribute('disabled'): signInBtn.setAttribute('disabled', true);
  }

}
