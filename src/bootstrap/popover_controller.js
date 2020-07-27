/**
 * Activates Bootstrap popovers.
 *
 * Use like so:
 *
 * See helpers/display_helper#display_info_popover
 *
 */
import $ from 'jquery';
import { Controller } from 'stimulus';

export default class extends Controller {
  connect() {
    $(this.element).popover({ delay: { show: 300, hide: 0 } });
  }
}
