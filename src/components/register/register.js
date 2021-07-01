import { register } from '../../api/api-handlers';
import { routes } from '../../shared/routes/routes';
import { setUserEmail } from '../../shared/service';

export const registers = () => {
  const RegisterForm = document.querySelector('.register__form');

  RegisterForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const birth = document.getElementById('birth').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    register(email, password).then(response => {
      if (response) {
        const { email } = response.user; 
        setUserEmail(email);
        window.location.href = routes.login;
      }
    });
  });
}
