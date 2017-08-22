'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/martinbanks/gitHubProjects/lesson-nextjs/pages/index.js?entry';


var Index = function Index() {
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 4
		}
	}, _react2.default.createElement('p', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, 'Hello world'), _react2.default.createElement(_link2.default, { href: '/about', __source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement('button', { style: { color: 'red' }, __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, 'Link to about page')));
};

exports.default = Index;