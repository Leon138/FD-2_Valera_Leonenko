import { routes } from "../../shared/routes/routes";
import { removeToken, removeUserEmail } from "../../shared/service";
import { getToken } from "../../shared/service";

export const loginBtn = () => {
  const loginBtn = document.getElementById('loginBtn');

  loginBtn.onclick = () => {
    event.preventDefault();
    window.location.href = routes.login;
  };
}

export const logoutBtn = () => {
  const token = getToken();
  event.preventDefault();
  const logoutBtn = document.getElementById('logoutBtn');
  
  if (!token) {
    logoutBtn.style.display = 'none';
  }

  logoutBtn.onclick = () => {
    removeToken();
    removeUserEmail();
    logoutBtn.remove();
  };

}

export const registerBtn = () => {
  const RegisterBtn = document.getElementById('RegisterBtn');

  RegisterBtn.onclick = () => {
    event.preventDefault();
    window.location.href = routes.register;
  };
}
