import { loginBtn, RegisterBtn, logoutBtn } from './components/profile/profile';
import { LoginHandler } from './components/login/login';
import { routes, paths } from './shared/routes/routes';
import { Register } from './components/register/register';
import './styles/styles.scss';


window.onload = () => {

  const pathname = Object.values(paths).find( path => path === window.location.pathname );
 
  switch (pathname) {
    case paths.home:
      loginBtn();
      logoutBtn();
      break;
    case paths.login:
      LoginHandler();
      RegisterBtn();
      break;
    case paths.register:
      Register();
    default:
      break;  
  }

}
