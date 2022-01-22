import * as Elements from './elements.js'
import { routePath } from '../controller/route.js';
import { currentUser } from '../controller/firebase_auth.js';
import *  as ProtectedMessage from './protected_message.js'

export function addEventListener() {
    Elements.menuAbout.addEventListener('click', () => {
        history.pushState(null, null, routePath.ABOUT);
        about();
    });

}

export function about() {
    if (!currentUser) {
        Elements.root.innerHTML = ProtectedMessage.html;
        return;
    }
    Elements.root.innerHTML = '<h1>About</h1>';
}