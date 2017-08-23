'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _someLayout = require('../components/someLayout');

var _someLayout2 = _interopRequireDefault(_someLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(props) {
	return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, props.url.query.title), _react2.default.createElement('p', null, 'This is the blog content'));
};

var Post = function Post(props) {
	return _react2.default.createElement(_someLayout2.default, null, _react2.default.createElement(Content, { url: props.url }));
};

exports.default = Post;