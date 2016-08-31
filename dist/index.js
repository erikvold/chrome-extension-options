/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var StringOption = __webpack_require__(3);
	var optionsJSON = __webpack_require__(5);

	ReactDOM.render(React.createElement(StringOption, { id: optionsJSON[0].id, name: optionsJSON[0].name }), document.getElementById('content'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var chrome = __webpack_require__(4);

	module.exports = React.createClass({
		displayName: "exports",

		getInitialState: function getInitialState() {
			return {
				value: ""
			};
		},
		handleValueChange: function handleValueChange(e) {
			console.log('handleValueChange called', e);
			this.setState({
				value: e.target.value
			});
			var data = {};
			data[this.props.id] = {
				value: e.target.value
			};
			chrome.storage.sync.set(data);
		},
		componentWillMount: function componentWillMount() {
			var _this = this;

			var key = this.props.id;
			chrome.storage.sync.get(key, function (item) {
				if (item !== undefined) {
					_this.setState({ value: item[key].value });
				}
			});
		},
		render: function render() {
			return React.createElement(
				"div",
				{ className: "option" },
				React.createElement(
					"label",
					null,
					this.props.name
				),
				" ",
				React.createElement("input", { onChange: this.handleValueChange, defaultValue: this.state.value, type: "text" })
			);
		}
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
		storage: {
			sync: {
				get: get,
				set: set
			}
		}
	}

	function get(item, callback) {
		var data = {}
		data[item] = JSON.parse(localStorage.getItem(item));
		console.log(data[item]);
		if(data[item]) {
			callback(data);
		} else {
			callback(undefined);
		}
	}

	function set(item, callback) {
		for(key in item) {
			localStorage.setItem(key, JSON.stringify(item[key]));
		}
		if(callback && typeof callback === 'function') {
			callback();
		}
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = [
		{
			"type": "string",
			"id": "username",
			"name": "Username",
			"value": ""
		},
		{
			"type": "string",
			"id": "password",
			"name": "Password",
			"value": ""
		}
	];

/***/ }
/******/ ]);