# elysium-cloud-ui

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/elysium-cloud-ui.svg)](https://www.npmjs.com/package/elysium-cloud-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save elysium-cloud-ui react-date-picker
```

## Usage

Wrap you react application inside the `UiProvidor` HOC to start using elysium cloud ui library

```jsx
import React, { Component } from "react";

import { UiProvidor } from "elysium-cloud-ui";
import "elysium-cloud-ui/dist/index.css";

class Example extends Component {
  render() {
    return (
      <UiProvidor>
        <MyComponent />
      </UiProvidor>
    );
  }
}
```

## License

MIT © [indrajeet-ambadekar](https://github.com/indrajeet-ambadekar)
