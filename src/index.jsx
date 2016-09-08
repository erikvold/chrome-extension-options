'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import StringOption from './StringOption';
import optionsJSON from './options.json';



ReactDOM.render(<StringOption id={optionsJSON[0].id} name={optionsJSON[0].name} />, document.getElementById('content'));

