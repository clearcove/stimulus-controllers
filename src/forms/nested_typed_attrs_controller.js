// Use like so:
//

/* eslint class-methods-use-this: "off" */
import $ from 'jquery';
import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['fields', 'templates', 'typeSelect'];

  add(event) {
    event.preventDefault();

    const attrType = $(this.typeSelectTarget)
      .select2('data')
      .find((selectedOption) => selectedOption.id.length > 0).id;
    const template = this.templatesTarget.querySelector(`[data-nested-typed-attribute-type="${attrType}"]`);
    const content = template.innerHTML.replace(/NEW_RECORD/g, new Date().getTime());
    this.fieldsTarget.insertAdjacentHTML('beforeend', content);
  }

  remove(event) {
    event.preventDefault();

    const wrapper = event.target.closest('.nested-typed-attr-field');
    wrapper.remove();
  }
}
