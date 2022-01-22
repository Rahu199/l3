import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js"

import * as Elements from '../viewpage/elements.js'
import * as Util from '../viewpage/util.js'
import * as Constants from '../model/constants.js'
import  { routing } from './route.js';
import * as WelcomeMessage from '../viewpage/welcome_message.js'

const auth = getAuth();

export let currentUser = null;

export function addEventListener() {

    Elements.formSignIn.addEventListener('submit', async e => {
        e.preventDefault(); //keeps refreshing the current page
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            Elements.modalSignin.hide();
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            Util.info('Sign in Error', JSON.stringify(error), Elements.modalSignin);
            if (Constants.DEV)
                console.log(`sign in error: ${errorCode} | ${errorMessage}`);
        }
    });


    Elements.menuSignOut.addEventListener('click', async () => {
        //sign out from Firebase Auth
        try {
            await signOut(auth)
        } catch (e) {
            Util.info('Sign out Error', JSON.stringify(e));
            if (Constants.DEV)
                console.log('sign out error' + e);
        }
    });


    onAuthStateChanged(auth, onAuthStateChangedObserver);

}

function onAuthStateChangedObserver(user) {
    if (user) {
        currentUser = user;
        let elements = document.getElementsByClassName('modal-preauth');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }
        elements = document.getElementsByClassName('modal-postauth');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'block';
        }
        const pathname = window.location.pathname;
        const hash = window.location.hash;
        routing(pathname,hash);
    } else {
        currentUser = null;
        let elements = document.getElementsByClassName('modal-preauth');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'block';
        }
        elements = document.getElementsByClassName('modal-postauth');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }

        Elements.root.innerHTML = WelcomeMessage.html;
    }
}

