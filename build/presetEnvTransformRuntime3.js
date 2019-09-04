"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

// import 'core-js'
function async1() {
  return _async.apply(this, arguments);
}

function _async() {
  _async = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var one;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _promise.default.resolve(1);

          case 2:
            one = _context.sent;
            console.log(one);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _async.apply(this, arguments);
}

async1.then(function (one) {
  console.log('one again');
}); // let a = () => Object.assign({}, {b : 1})
