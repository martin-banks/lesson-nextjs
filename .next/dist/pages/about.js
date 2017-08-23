'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _someLayout = require('../components/someLayout');

var _someLayout2 = _interopRequireDefault(_someLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
	return _react2.default.createElement('div', null, _react2.default.createElement(_someLayout2.default, null, _react2.default.createElement('h1', null, 'This is the about page'), _react2.default.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aperiam tempore nisi, quos nostrum? Odit nemo, molestias ut omnis nisi, iure animi. Voluptas soluta nam magnam voluptatibus cupiditate, quibusdam quaerat.')));
};

exports.default = About;