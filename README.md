# ClearCove Stimulus Controllers

A collection of commonly used StimulusJS controllers:

* Bootstrap components
* Form utilities

## Install

This assumes that [StimulusJS](https://stimulusjs.org) is already installed.

Add the `@clearcove/stimulus-controllers` module:

```bash
$ yarn add @clearcove/stimulus-controllers
```

or

```bash
$ npm install @clearcove/stimulus-controllers
```

## Basic Usage

First, you'll want to initialize StimulusJS and then you can import all the ClearCove Stimulus controllers components:

```javascript
// Start StimulusJS
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start();
const context = require.context("controllers", true, /.js$/);
// Load your own controllers
application.load(definitionsFromContext(context));

// Import and register all ClearCove Stimulus controllers:
import { registerAllControllers } from '@clearcove/stimulus-controllers';

// OR only import and register the ones you want:
import { BootstrapPopoverController } from '@clearcove/stimulus-controllers';
application.register('bootstrap--popover', BootstrapPopoverController);
```

This will start StimulusJS and load any controllers that you have
locally and then register the ClearCove Stimulus controllers.

### Bootstrap: Popover

Activates Bootstrap Popover component on elements referencing this controller.

```javascript
import { BootstrapPopoverController } from '@clearcove/stimulus-controllers';
application.register('bootstrap--popover', BootstrapPopoverController);
```

```html
<div data-controller="bootstrap--popover" />
```

## Extending Controllers

You can use inheritance to extend the functionality of any Stimulus controller.

```js
import { BootstrapPopoverController } from '@clearcove/stimulus-controllers';

export default class MyBootstrapPopoverController extends BootstrapPopoverController {
  static targets = ["popoverTrigger"]

  connect() {
    super.connect();
    ... your custom connect code ...
  }
}
```

These controllers will automatically have access to `targets` defined in the parent class.

If you override the `connect`, `disconnect` or any other methods from the parent, you'll want to call `super.method()` to make sure the parent functionality is executed.

## Credits

This library is modeled after [excid3/tailwindcss-stimulus-components](https://github.com/excid3/tailwindcss-stimulus-components).

## License

This package is available as open source under the terms of the MIT License.
