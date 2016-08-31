'use strict'

var React = require('react');
var ReactDOM = require('react-dom');
var StringOption = require('./StringOption');
var optionsJSON = require('./options.json');



ReactDOM.render(<StringOption id={optionsJSON[0].id} name={optionsJSON[0].name} />, document.getElementById('content'));

