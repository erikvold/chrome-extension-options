'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import OptionGroup from './OptionGroup';
import optionsJSON from './options.json';
var optionsYAML = require("json!yaml!./options.yaml");

console.log(optionsYAML);

	ReactDOM.render(<OptionGroup id="option-group" options={optionsYAML} />, document.getElementById('content'));
