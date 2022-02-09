import * as Elements from '../viewpage/elements.js'

export function addEventListeners() {

}

Elements.formSignIn.addEventListener('submit', e => {
    const email = e.target.email.value;
    const password = e.target.password.value;

});