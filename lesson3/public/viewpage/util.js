import { modalInfobox } from "./elements.js";
import * as Elements from "./elements.js";

export function currency(value) {
    return Intl.NumberFormat('en-us', {style: 'currency', currency: 'USD'}).format(value);
}

export function info(title, body, closeModal) {
    if (closeModal) closeModal.hide();
    Elements.modalInfobox.title.innerHTML = title;
    Elements.modalInfobox.body.innerHTML = body;
    Elements.modalInfobox.modal.show();

}

export function disableButton(button) {
    button.disabled = true;
    const orginalLabel = button.innerHTML;
    button.innerHTML = 'wait....';
    return orginalLabel;
}

export function enableButton(button, label) {
    if (label) button.innerHTML = label;
    button.disabled = false;

}

// from stack overflow
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}