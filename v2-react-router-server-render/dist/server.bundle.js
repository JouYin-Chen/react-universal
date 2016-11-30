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
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _regenerator = __webpack_require__(2);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _koa = __webpack_require__(4);

	var _koa2 = _interopRequireDefault(_koa);

	var _path = __webpack_require__(5);

	var _path2 = _interopRequireDefault(_path);

	var _koaStatic = __webpack_require__(6);

	var _koaStatic2 = _interopRequireDefault(_koaStatic);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(8);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _server = __webpack_require__(9);

	var _reactRouter = __webpack_require__(10);

	var _routes = __webpack_require__(11);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _marked = [authFail, serverRenderWithRouterMiddwware].map(_regenerator2.default.mark);

	var route = __webpack_require__(12)();

	var app = new _koa2.default();

	//react

	//react-router


	function authFail(next) {
		return _regenerator2.default.wrap(function authFail$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return next;

					case 2:
						console.log('[server]<--[Brower] ' + this.request.path);

					case 3:
					case 'end':
						return _context.stop();
				}
			}
		}, _marked[0], this);
	}

	var renderHtml = function renderHtml(renderProps) {
		return (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
	};

	function sendRenderResult(html) {
		return '<!doctype html>\n\t\t<html>\n\t\t<head><title>Universal Example</title></head>\n\t\t<body>\n\t\t\t<div id="app">' + html + '</div>\n\t\t\t<script> </script>\n\t\t\t<script src="/dist/bundle.js"></script>\n\t\t</body>\n\t</html>';
	}

	// router
	app.use(route.routes());
	app.use(route.allowedMethods());
	app.use((0, _koaStatic2.default)(_path2.default.resolve(__dirname, '../'), {
		maxage: 0
	}));

	//routes
	app.use(authFail);
	// app.use(begin)
	//route.get('/', serverRenderWithRouterMiddwware)

	function serverRenderWithRouterMiddwware(next) {
		var _this = this;

		return _regenerator2.default.wrap(function serverRenderWithRouterMiddwware$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return next;

					case 2:
						//console.warn(this)
						(0, _reactRouter.match)({
							routes: _routes2.default,
							location: this.request.url
						}, function (error, redirectLocatin, renderProps) {
							//const appHtml = renderToString(<RouterContext {...renderProps}/>)
							_this.body = sendRenderResult(renderHtml(renderProps));
						});

					case 3:
					case 'end':
						return _context2.stop();
				}
			}
		}, _marked[1], this);
	}

	app.use(serverRenderWithRouterMiddwware);

	app.listen(3030);
	/* WEBPACK VAR INJECTION */}.call(exports, "app"))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("regenerator-runtime");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("koa");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("koa-static");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NotFound = function NotFound() {
	   return _react2.default.createElement(
	      'div',
	      null,
	      '404 Not Found'
	   );
	};
	var Root = function Root() {
	   return _react2.default.createElement(
	      'h1',
	      null,
	      'Client Root'
	   );
	};
	var A = function A() {
	   return _react2.default.createElement(
	      'h1',
	      null,
	      'Client A'
	   );
	};
	var B = function B() {
	   return _react2.default.createElement(
	      'h2',
	      null,
	      'Client B'
	   );
	};

	module.exports = _react2.default.createElement(
	   _reactRouter.Route,
	   { path: '/' },
	   _react2.default.createElement(_reactRouter.IndexRoute, { component: Root }),
	   _react2.default.createElement(_reactRouter.Route, { path: '/A', component: A }),
	   _react2.default.createElement(_reactRouter.Route, { path: '/B', component: B }),
	   _react2.default.createElement(_reactRouter.Route, { path: '*', component: NotFound })
	);

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("koa-router");

/***/ }
/******/ ]);