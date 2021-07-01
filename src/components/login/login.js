import { login } from '../../api/api-handlers';
import { setToken } from '../../shared/service';
import { routes } from '../../shared/routes/routes';

export const loginHandler = () => {
  const LoginForm = document.querySelector('.login__form');

  LoginForm.addEventListener('submit', event => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password).then(responce => {
      if (responce) {
        const { idToken: token } = responce.data
        setToken(token);
        window.location.href = routes.home;
      }
    });
  });
} 
