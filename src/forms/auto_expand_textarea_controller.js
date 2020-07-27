import { Controller } from 'stimulus';

export default class extends Controller {
  connect() {
    // Adjust textarea's height automatically depending on contents.
    this.element.setAttribute('style', 'overflow-y: hidden;');
    this.element.addEventListener('input', this.onInputHandler, false);
    this.element.dispatchEvent(new Event('input'));
  }

  onInputHandler() {
    // Adjust textarea height on input
    // Setting height to auto makes it shrink instantly if all text is removed.
    this.style.height = 'auto';
    // Set min height to 60px (the default auto height in chrome)
    this.style.height = `${Math.max(this.scrollHeight, 60)}px`;
  }
}
