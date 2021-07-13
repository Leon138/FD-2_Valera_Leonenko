import { renderPosts, postFormHandler } from './dom-handlers/posts-renderer';
import { routes, paths } from './shared/constants/routes';
import { signInHandler } from './components/sign-in/sign-in';
import { getToken } from './shared/ls-sevice';
import './styles/styles.scss';
import { logoutBtnHandler } from './components/profile/profile';
import { signUpHandler } from './components/sign-up/sign-up';
 
window.onload = () => {

  const pathname = Object.values(paths).find( path => path === window.location.pathname );

  switch (pathname) {
    case paths.home:
      
    const token = getToken();

    if (!token) {
      window.location.href = routes.sign_in;
    } else {
      renderPosts();
      postFormHandler();
      logoutBtnHandler();
    }
      break;
    case paths.sign_in:
      signInHandler();
      break;
    case paths.sign_up:
      signUpHandler(); 
    default:
      break;
  }

}
