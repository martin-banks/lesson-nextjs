'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _someLayout = require('../components/someLayout');

var _someLayout2 = _interopRequireDefault(_someLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/banksm/_PROJECTS_GITHUB/lesson-nextjs/pages/post.js?entry';


var Content = function Content(props) {
	return _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 4
		}
	}, _react2.default.createElement('h1', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, props.url.query.title), _react2.default.createElement('p', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, 'This is the blog content'));
};

var Post = function Post(props) {
	return _react2.default.createElement(_someLayout2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement(Content, { url: props.url, __source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}));
};

exports.default = Post;