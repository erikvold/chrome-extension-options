'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import Options from './Options';
import optionsJSON from './options.json';
import optionsYAML from 'json!yaml!./options.yaml';

ReactDOM.render(<Options id="option-group" options={optionsYAML} />, document.getElementById('content'));
