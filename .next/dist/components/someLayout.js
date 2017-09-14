'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/banksm/_PROJECTS_GITHUB/lesson-nextjs/components/someLayout.js';


var layoutStyle = {
	margin: 20,
	padding: 20,
	border: 'solid 5px #bada55',
	borderRadius: 8
};

var Layout = function Layout(props) {
	return _react2.default.createElement('div', { style: layoutStyle, __source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, _react2.default.createElement(_header2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}), props.children);
};

exports.default = Layout;