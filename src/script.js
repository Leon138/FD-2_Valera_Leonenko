import { loginBtn, registerBtn, logoutBtn } from './components/profile/profile';
import { loginHandler } from './components/login/login';
import { routes, paths } from './shared/routes/routes';
import { registers } from './components/register/register';
import './styles/styles.scss';

window.onload = () => {
  const pathname = Object.values(paths).find( path => path === window.location.pathname );
 
  switch (pathname) {
    case paths.home:
      loginBtn();
      logoutBtn();
      break;
    case paths.login:
      loginHandler();
      registerBtn();
      break;
    case paths.register:
      registers();
    default:
      break;  
  }

}
