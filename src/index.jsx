'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import OptionGroup from './OptionGroup';
import StringOption from './StringOption';
import optionsJSON from './options.json';

	ReactDOM.render(<OptionGroup id="option-group" options={optionsJSON} />, document.getElementById('content'));
