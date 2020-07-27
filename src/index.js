import BootstrapPopoverController from './bootstrap/popover_controller';
import FormsAutoExpandTextareaController from './forms/auto_expand_textarea_controller';

// Convenience method to register all included controllers
// @param application [Stimulus.start] the application object to register controllers with.
const registerAllControllers = (application) => {
  application.register('bootstrap--popover', BootstrapPopoverController);
  application.register('forms--auto-expand-text-area', FormsAutoExpandTextareaController);
};

export {
  registerAllControllers,
  BootstrapPopoverController,
  FormsAutoExpandTextareaController
};
