import BootstrapPopoverController from './bootstrap/popover_controller';
import FormsAutoExpandTextareaController from './forms/auto_expand_textarea_controller';
import FormsNestedAttrsController from './forms/nested_attrs_controller';
import FormsNestedTypedAttrsController from './forms/nested_typed_attrs_controller';
import FormsSelect2Controller from './forms/select2_controller';

// Convenience method to register all included controllers
// @param application [Stimulus.start] the application object to register controllers with.
const registerAllControllers = (application) => {
  application.register('bootstrap--popover', BootstrapPopoverController);
  application.register('forms--auto-expand-text-area', FormsAutoExpandTextareaController);
  application.register('forms--nested-attrs', FormsNestedAttrsController);
  application.register('forms--nested-typed-attrs', FormsNestedTypedAttrsController);
  application.register('forms--select2', FormsSelect2Controller);
};

export {
  registerAllControllers,
  BootstrapPopoverController,
  FormsAutoExpandTextareaController,
  FormsNestedAttrsController,
  FormsNestedTypedAttrsController,
  FormsSelect2Controller
};
