webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ledgerhq_hw_app_eth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ledgerhq/hw-app-eth */ "./node_modules/@ledgerhq/hw-app-eth/lib-es/Eth.js");
/* harmony import */ var _ledgerhq_hw_transport_u2f__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ledgerhq/hw-transport-u2f */ "./node_modules/@ledgerhq/hw-transport-u2f/lib-es/TransportU2F.js");

var _jsxFileName = "/Users/rongierlach/Development/ledger-web-example/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var HD_PATH = "44'/60'/0'/0/0";

function makeApp() {
  var transport;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function makeApp$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ledgerhq_hw_transport_u2f__WEBPACK_IMPORTED_MODULE_3__["default"].create());

        case 2:
          transport = _context.sent;
          return _context.abrupt("return", new _ledgerhq_hw_app_eth__WEBPACK_IMPORTED_MODULE_2__["default"](transport));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

function getAccount(path) {
  var ethApp, result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getAccount$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(makeApp());

        case 2:
          ethApp = _context2.sent;
          _context2.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(ethApp.getAddress(path));

        case 5:
          result = _context2.sent;
          return _context2.abrupt("return", result);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
}

function Main() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      address = _useState[0],
      setAddress = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function _callee() {
    var account;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(getAccount(HD_PATH));

          case 3:
            account = _context3.sent;
            console.log({
              account: account
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);

          case 10:
            _context3.prev = 10;
            console.log('idk..');
            return _context3.finish(10);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 7, 10, 13]], Promise);
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Ledger Address:"), address && __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, address));
}

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.1f4cb9389136c4005d32.hot-update.js.map