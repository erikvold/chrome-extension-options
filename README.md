# Important
This is a 0.x.x version and is therefore not ready for production use.

#Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom'
import { Options } from 'chrome-extension-options'

var options = [{
	type: "string",
	id: "username",
    name: "Username",
    defaultValue: ""
}];

ReactDOM.render(<Options title="My title" options={options} />, document.getElementById('content'));
```
