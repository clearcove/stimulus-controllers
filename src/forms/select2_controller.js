/* Activates Select2 inputs
 *
 * Use like so:
 *
 * <select data-controller="forms--select2">...
 *
 */
import $ from 'jquery';
import { Controller } from 'stimulus';

export default class extends Controller {
  connect() {
    this.select2mount();
    document.addEventListener('turbolinks:before-cache', () => {
      this.select2unmount();
    }, { once: true });
  }

  select2mount() {
    // Bug in select2 prevents us from using placeholder option: https://github.com/select2/select2/issues/3278
    // const placeholder = $(this.element).data('placeholder')
    // width: 'resolve', // select2 width bug (see above: placeholder)
    $(this.element).select2({
      minimumResultsForSearch: 10,
      theme: 'bootstrap4',
      width: '100%'
    });
  }

  select2unmount() {
    this.saveState();
    $(this.element).select2('destroy');
  }

  saveState() {
    const selectedOptions = $(this.element)
      .select2('data')
      .filter((selectedOption) => selectedOption.id.length > 0);

    // make sure the HTML itself has those elements selected, since the HTML is what is saved in the
    // turbolinks snapshot
    selectedOptions.forEach((selectedOption) => {
      $(this.element)
        .find(`option[value='${selectedOption.id}']`)
        .attr('selected', 'selected');
    });
  }
}
