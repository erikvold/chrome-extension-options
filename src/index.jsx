'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import OptionGroup from './OptionGroup';
import optionsJSON from './options.json';
import optionsYAML from 'json!yaml!./options.yaml';

ReactDOM.render(<OptionGroup id="option-group" options={optionsYAML} />, document.getElementById('content'));
