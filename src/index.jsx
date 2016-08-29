'use strict'

var React = require('react');
var ReactDOM = require('react-dom');
var StringOption = require('./StringOption');
var options = require('./options.json');

ReactDOM.render(<StringOption id={options[0].id} name={options[0].name} />, document.getElementById('content'));

