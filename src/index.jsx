'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import Options from './components/Options';
import optionsJSON from './options.json';
import optionsYAML from 'json!yaml!./options.yaml';

ReactDOM.render(<Options id="option-group" data={optionsYAML} />, document.getElementById('content'));
