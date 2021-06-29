require('firebase/auth');
import firebase from 'firebase/app';
import axios from 'axios';
import { FIREBASE_CONFIG, databaseURL, authUrl } from './api-config.js';

export const initApi = () => {
  firebase.initializeApp(FIREBASE_CONFIG);
}

export const login = (email, password) => {
  return axios.post(authUrl, {
    email,
    password,
    returnSecureToken: true
  })
    .then(response => response)
    .catch(err => {console.log(err)});
}

export const register = async (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => response);
}

initApi();
