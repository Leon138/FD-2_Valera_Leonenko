import { signIn } from '../../api/api-handlers';
import { setToken } from '../../shared/ls-sevice';
import { routes } from '../../shared/constants/routes';
import { passwordLengthValidator } from '../../shared/validators';
import { showFormErrorMessage, hideFormErrorMessage } from '../../shared/error-handlers';

export const signInHandler = () => {
  const signInForm = document.querySelector('.sign-in__form');
  const signInBtn = document.getElementById('signInBtn');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  
  const formFields = {
    email: {
      isValid: true
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
    if (passwordLengthValidator(passwordInput.value)) {
      formFields.password.isValid = true;
      hideFormErrorMessage();
    } else {
      formFields.password.isValid = false;
    }

    checkFormValid();
  }

  passwordInput.onblur = () => {
    if (!passwordLengthValidator(passwordInput.value)) {
      showFormErrorMessage();
    } else {
      hideFormErrorMessage();
    }
  }

  const checkFormValid = () => {
    const isFormValid = Object.values(formFields).every( value => value.isValid);
    isFormValid ? signInBtn.removeAttribute('disabled'): signInBtn.setAttribute('disabled', true);
  }

}
