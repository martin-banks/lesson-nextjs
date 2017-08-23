'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _someLayout = require('../components/someLayout');

var _someLayout2 = _interopRequireDefault(_someLayout);

var _postLink = require('../components/postLink');

var _postLink2 = _interopRequireDefault(_postLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
	color: 'green',
	fontSize: 12,
	padding: 24,
	borderRadius: 8,
	background: 'white'
};

var Index = function Index() {
	return _react2.default.createElement('div', null, _react2.default.createElement(_someLayout2.default, null, _react2.default.createElement('h1', null, 'Next blog'), _react2.default.createElement('ul', null, _react2.default.createElement(_postLink2.default, { title: 'Hello world' }), _react2.default.createElement(_postLink2.default, { title: 'Learning next.js' }), _react2.default.createElement(_postLink2.default, { title: 'Deploy apps with zeit' }))));
};

exports.default = Index;