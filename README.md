# xrutil
日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A utility library for creating debug windows in Three.js-based XR (AR/VR) applications.

## Demo
The `examples/controller.html` file demonstrates the `createDebugWindow` function, which creates an on-screen debug window that displays data from connected XR controllers.

## Features
- Create a canvas-based debug window that can display text and update in real-time
- Attach the debug window to a Three.js mesh for easy positioning in the scene
- Log messages and display object data in the debug window

## Usage
To use the `createDebugWindow` function, import it from the `createDebugWindow.js` file and call it with the desired position and size parameters:

```javascript
import { createDebugWindow } from "./createDebugWindow.js";

const debugWindow = createDebugWindow(0, 0, -2, 400, 800);
scene.add(debugWindow);
```

You can then update the debug window's contents using the `set` and `log` methods:

```javascript
debugWindow.set(someObject);
debugWindow.log("Hello, debug window!");
```

## License
This project is licensed under the [MIT License](LICENSE).
