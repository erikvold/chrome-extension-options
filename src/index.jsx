'use strict'

import 'file?name=options.html!./options.html'
import 'file?name=manifest.json!./manifest.json'
import '../assets/icon-128.png'
import '../assets/icon-48.png'
import '../assets/icon-16.png'


import React from 'react';
import ReactDOM from 'react-dom';
import Options from './components/Options';
import optionsYAML from 'json!yaml!./options.yaml';

ReactDOM.render(<Options id="option-group" data={optionsYAML} />, document.getElementById('content'));
