import { removeToken, removeUserEmail } from "../../shared/ls-sevice";
import { routes } from "../../shared/constants/routes";

export const logoutBtnHandler = () => {
  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.onclick = () => {
    removeToken();
    removeUserEmail();
    window.location.href = routes.sign_in;
  };
  
}
