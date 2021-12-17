(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.EngineData = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
},{}],2:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
},{"./arrayLikeToArray":1}],3:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],4:[function(require,module,exports){
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
},{}],5:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],6:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

var isNativeReflectConstruct = require("./isNativeReflectConstruct");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
},{"./isNativeReflectConstruct":15,"./setPrototypeOf":19}],7:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],8:[function(require,module,exports){
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{}],9:[function(require,module,exports){
var superPropBase = require("./superPropBase");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
},{"./superPropBase":20}],10:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],11:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":19}],12:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],13:[function(require,module,exports){
var _typeof = require("@babel/runtime/helpers/typeof");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
},{"@babel/runtime/helpers/typeof":22}],14:[function(require,module,exports){
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
},{}],15:[function(require,module,exports){
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;
},{}],16:[function(require,module,exports){
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],17:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
},{}],18:[function(require,module,exports){
var _typeof = require("@babel/runtime/helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"./assertThisInitialized":3,"@babel/runtime/helpers/typeof":22}],19:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],20:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
},{"./getPrototypeOf":10}],21:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var unsupportedIterableToArray = require("./unsupportedIterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":2,"./iterableToArray":16,"./nonIterableSpread":17,"./unsupportedIterableToArray":23}],22:[function(require,module,exports){
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],23:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
},{"./arrayLikeToArray":1}],24:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf");

var setPrototypeOf = require("./setPrototypeOf");

var isNativeFunction = require("./isNativeFunction");

var construct = require("./construct");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
},{"./construct":6,"./getPrototypeOf":10,"./isNativeFunction":14,"./setPrototypeOf":19}],25:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],26:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":25}],27:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _ComponentData2 = _interopRequireDefault(require("../project/data/ComponentData.js"));

var _AttributeType = require("../pobject/AttributeType.js");

var _DynamicAttributeHelper = _interopRequireDefault(require("../utils/DynamicAttributeHelper.js"));

var _SystemError = _interopRequireDefault(require("../exception/type/SystemError.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @abstract
 */
var Component = /*#__PURE__*/function (_ComponentData) {
  (0, _inherits2["default"])(Component, _ComponentData);

  var _super = _createSuper(Component);

  /**
   * @type {DynamicAttribute[]}
   */
  function Component(name) {
    var _this;

    (0, _classCallCheck2["default"])(this, Component);
    _this = _super.call(this, name);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "finalAttributes", void 0);
    _this.finalAttributes = [];

    _this.init();

    return _this;
  }
  /**
   * @param {World} world
   * @param {UnitSelector} unitSelector
   * @return {FormField[]}
   */


  (0, _createClass2["default"])(Component, [{
    key: "getFormFields",
    value: function getFormFields(world, unitSelector) {
      var attributes = this.getAttributes();
      var fields = [];
      var excludeFields = this.getExcludeFields();
      attributes.forEach(function (attr) {
        if (!excludeFields.includes(attr.getAttrName())) {
          fields.push.apply(fields, (0, _toConsumableArray2["default"])(_DynamicAttributeHelper["default"].getFormFields(world, unitSelector, attr)));
        }
      });
      return fields;
    }
    /**
     * @return {string[]}
     */

  }, {
    key: "getExcludeFields",
    value: function getExcludeFields() {
      return [];
    }
    /**
     * @private
     */

  }, {
    key: "init",
    value: function init() {
      this.add('enabled', _AttributeType.TYPES.BOOLEAN, true);
      this.initAttributes();
    }
    /**
     * @abstract
     */

  }, {
    key: "initAttributes",
    value: function initAttributes() {
      throw new _SystemError["default"]("".concat(this.constructor.name, ".initAttributes must be implement"));
    }
    /**
     * @protected
     * @param {string} name
     * @param {number} type
     * @param {*} defaultValue
     * @param {*} rule
     */

  }, {
    key: "add",
    value: function add(name, type) {
      var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var rule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      _DynamicAttributeHelper["default"].add(this.finalAttributes, name, type, defaultValue, rule, false);

      _DynamicAttributeHelper["default"].add(this.attributes, name, type, defaultValue, rule, false);
    }
    /**
     * @protected
     * @param {string} name
     * @param {number} type
     * @param {*} defaultValue
     * @param {*} rule
     */

  }, {
    key: "addInternal",
    value: function addInternal(name, type) {
      var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var rule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      _DynamicAttributeHelper["default"].add(this.finalAttributes, name, type, defaultValue, rule, true);

      _DynamicAttributeHelper["default"].add(this.attributes, name, type, defaultValue, rule, true);
    }
    /**
     * @protected
     * @param {string} name
     * @return {DynamicAttribute}
     */

  }, {
    key: "get",
    value: function get(name) {
      return _DynamicAttributeHelper["default"].get(this.attributes, name);
    }
    /**
     * @protected
     * @param {string} name
     * @param {*} value
     */

  }, {
    key: "setValue",
    value: function setValue(name, value) {
      _DynamicAttributeHelper["default"].setValue(this.attributes, name, value);
    }
    /**
     * @param {string} name
     * @param {*} value
     * @param {World} world
     */

  }, {
    key: "setKeyValue",
    value: function setKeyValue(name, value, world) {
      this.setValue(name, _DynamicAttributeHelper["default"].getValueByType(value, this.getType(name), world));
    }
    /**
     * @param {string} name
     * @param {World} world
     * @return {*}
     */

  }, {
    key: "getKeyValue",
    value: function getKeyValue(name, world) {
      return _DynamicAttributeHelper["default"].getKeyByType(this.getValue(name), this.getType(name), world);
    }
    /**
     * @protected
     * @param {string} name
     * @return {*}
     */

  }, {
    key: "getValue",
    value: function getValue(name) {
      return _DynamicAttributeHelper["default"].getValue(this.attributes, name);
    }
    /**
     * @protected
     * @param {string} name
     * @return {*}
     */

  }, {
    key: "getType",
    value: function getType(name) {
      return _DynamicAttributeHelper["default"].getType(this.attributes, name);
    }
    /**
     * @param {string} name
     * @return {boolean}
     */

  }, {
    key: "hasAttribute",
    value: function hasAttribute(name) {
      return !!_DynamicAttributeHelper["default"].tryGet(this.attributes, name);
    }
    /**
     * @param {string} name
     */

  }, {
    key: "deleteAttribute",
    value: function deleteAttribute(name) {
      _DynamicAttributeHelper["default"]["delete"](this.finalAttributes, name);

      _DynamicAttributeHelper["default"]["delete"](this.attributes, name);
    }
    /**
     * @param {string} name
     * @param {DynamicAttribute} attributeDefinition
     */

  }, {
    key: "updateAttributeDefinition",
    value: function updateAttributeDefinition(name, attributeDefinition) {
      var attribute = this.get(name);
      attribute.setInternal(attributeDefinition.getInternal());
      attribute.setAttrType(attributeDefinition.getAttrType());
      attribute.setAttrRule(attributeDefinition.getAttrRule());

      if (attributeDefinition.getInternal()) {
        attribute.setAttrValue(attributeDefinition.getAttrValue());
      }
    }
    /**
     * @protected
     * @param {DynamicAttribute[]} finalAttributes
     */

  }, {
    key: "setFinalAttributes",
    value: function setFinalAttributes(finalAttributes) {
      this.finalAttributes = finalAttributes;
    }
    /**
     * @return {DynamicAttribute[]}
     */

  }, {
    key: "getFinalAttributes",
    value: function getFinalAttributes() {
      return this.finalAttributes;
    }
  }, {
    key: "enable",
    value: function enable() {
      this.setValue('enabled', true);
    }
  }, {
    key: "disable",
    value: function disable() {
      this.setValue('enabled', false);
    }
    /**
     * @param {boolean} enabled
     */

  }, {
    key: "setEnabled",
    value: function setEnabled(enabled) {
      this.setValue('enabled', enabled);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getEnabled",
    value: function getEnabled() {
      return this.getValue('enabled');
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isEnabled",
    value: function isEnabled() {
      return this.getEnabled();
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isRemovable",
    value: function isRemovable() {
      return true;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isProtected",
    value: function isProtected() {
      return true;
    }
  }, {
    key: "concatAttributes",
    value: function concatAttributes(attributes) {
      var _this2 = this;

      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Component.prototype), "concatAttributes", this).call(this, attributes);
      var finalAttributes = this.getFinalAttributes();

      if (finalAttributes && finalAttributes.length && this.isProtected()) {
        this.getAttributes().forEach(function (attribute) {
          var finalAttribute = finalAttributes.find(function (attr) {
            return attr.getAttrName() === attribute.getAttrName();
          });

          if (!finalAttribute) {
            _this2.deleteAttribute(attribute.getAttrName());
          } else {
            _this2.updateAttributeDefinition(attribute.getAttrName(), finalAttribute);
          }
        });
      }
    }
  }]);
  return Component;
}(_ComponentData2["default"]);

exports["default"] = Component;

},{"../exception/type/SystemError.js":35,"../pobject/AttributeType.js":40,"../project/data/ComponentData.js":55,"../utils/DynamicAttributeHelper.js":82,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18,"@babel/runtime/helpers/toConsumableArray":21}],28:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _AttributeType = require("../../pobject/AttributeType.js");

var _ScriptComponent2 = _interopRequireDefault(require("./ScriptComponent.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AnimationComponent = /*#__PURE__*/function (_ScriptComponent) {
  (0, _inherits2["default"])(AnimationComponent, _ScriptComponent);

  var _super = _createSuper(AnimationComponent);

  function AnimationComponent() {
    var _this;

    (0, _classCallCheck2["default"])(this, AnimationComponent);
    _this = _super.call(this);

    _this.setName('Animation');

    return _this;
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(AnimationComponent, [{
    key: "isUnique",
    value: function isUnique() {
      return true;
    }
    /**
     * @override
     */

  }, {
    key: "initAttributes",
    value: function initAttributes() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(AnimationComponent.prototype), "initAttributes", this).call(this);
      this.add('animation', _AttributeType.TYPES.ANIMATION);
      this.add('time', _AttributeType.TYPES.NUMBER);
      this.add('loopTimes', _AttributeType.TYPES.NUMBER);
    }
    /**
     * @override
     */

  }, {
    key: "getExcludeFields",
    value: function getExcludeFields() {
      return ['started'];
    }
    /**
     * @return {number}
     */

  }, {
    key: "getAnimation",
    value: function getAnimation() {
      return this.getValue('animation');
    }
    /**
     * @param {number|string} animation
     */

  }, {
    key: "setAnimation",
    value: function setAnimation(animation) {
      this.setValue('animation', parseInt(animation));
    }
    /**
     * @return {number}
     */

  }, {
    key: "getTime",
    value: function getTime() {
      return this.getValue('time');
    }
    /**
     * @param {number} time
     */

  }, {
    key: "setTime",
    value: function setTime(time) {
      this.setValue('time', time);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getLoopTimes",
    value: function getLoopTimes() {
      return this.getValue('loopTimes');
    }
    /**
     * @param {number} loopTimes
     */

  }, {
    key: "setLoopTimes",
    value: function setLoopTimes(loopTimes) {
      this.setValue('loopTimes', loopTimes);
    }
  }]);
  return AnimationComponent;
}(_ScriptComponent2["default"]);

exports["default"] = AnimationComponent;

},{"../../pobject/AttributeType.js":40,"./ScriptComponent.js":31,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],29:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Component2 = _interopRequireDefault(require("../Component.js"));

var _AttributeType = require("../../pobject/AttributeType.js");

var _Vector = _interopRequireDefault(require("../../utils/Vector.js"));

var _Size = _interopRequireDefault(require("../../pobject/Size.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CameraComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CameraComponent, _Component);

  var _super = _createSuper(CameraComponent);

  function CameraComponent() {
    (0, _classCallCheck2["default"])(this, CameraComponent);
    return _super.call(this, 'Camera');
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(CameraComponent, [{
    key: "initAttributes",
    value: function initAttributes() {
      this.add('unitFollow', _AttributeType.TYPES.UNIT);
      this.add('trackPoint', _AttributeType.TYPES.VECTOR, new _Vector["default"]());
      this.add('deadZone', _AttributeType.TYPES.SIZE, new _Size["default"](0));
      this.add('smoothing', _AttributeType.TYPES.VECTOR, new _Vector["default"]());
      this.add('delayTime', _AttributeType.TYPES.VECTOR, new _Vector["default"]());
      this.add('delaySmoothing', _AttributeType.TYPES.VECTOR, new _Vector["default"]());
      this.add('lastUnitFollowPosition', _AttributeType.TYPES.VECTOR, new _Vector["default"]());
      this.add('lookDistance', _AttributeType.TYPES.VECTOR, new _Vector["default"]());
      this.add('debug', _AttributeType.TYPES.BOOLEAN);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getUnitFollow",
    value: function getUnitFollow() {
      return this.getValue('unitFollow');
    }
    /**
     * @param {number} unitFollow
     */

  }, {
    key: "setUnitFollow",
    value: function setUnitFollow(unitFollow) {
      this.setValue('unitFollow', unitFollow);
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getTrackPoint",
    value: function getTrackPoint() {
      return this.getValue('trackPoint');
    }
    /**
     * @param {Vector} trackPoint
     */

  }, {
    key: "setTrackPoint",
    value: function setTrackPoint(trackPoint) {
      this.setValue('trackPoint', trackPoint);
    }
    /**
     * @return {Size}
     */

  }, {
    key: "getDeadZone",
    value: function getDeadZone() {
      return this.getValue('deadZone');
    }
    /**
     * @param {Size} deadZone
     */

  }, {
    key: "setDeadZone",
    value: function setDeadZone(deadZone) {
      this.setValue('deadZone', deadZone);
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getSmoothing",
    value: function getSmoothing() {
      return this.getValue('smoothing');
    }
    /**
     * @param {Vector} smoothing
     */

  }, {
    key: "setSmoothing",
    value: function setSmoothing(smoothing) {
      this.setValue('smoothing', smoothing);
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getDelayTime",
    value: function getDelayTime() {
      return this.getValue('delayTime');
    }
    /**
     * @param {Vector} delayTime
     */

  }, {
    key: "setDelayTime",
    value: function setDelayTime(delayTime) {
      this.setValue('delayTime', delayTime);
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getDelaySmoothing",
    value: function getDelaySmoothing() {
      return this.getValue('delaySmoothing');
    }
    /**
     * @param {Vector} delaySmoothing
     */

  }, {
    key: "setDelaySmoothing",
    value: function setDelaySmoothing(delaySmoothing) {
      this.setValue('delaySmoothing', delaySmoothing);
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getLastUnitFollowPosition",
    value: function getLastUnitFollowPosition() {
      return this.getValue('lastUnitFollowPosition');
    }
    /**
     * @param {Vector} lastUnitFollowPosition
     */

  }, {
    key: "setLastUnitFollowPosition",
    value: function setLastUnitFollowPosition(lastUnitFollowPosition) {
      this.setValue('lastUnitFollowPosition', lastUnitFollowPosition);
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getLookDistance",
    value: function getLookDistance() {
      return this.getValue('lookDistance');
    }
    /**
     * @param {Vector} lookDistance
     */

  }, {
    key: "setLookDistance",
    value: function setLookDistance(lookDistance) {
      this.setValue('lookDistance', lookDistance);
    }
    /**
     * @param {boolean} debug
     */

  }, {
    key: "setDebug",
    value: function setDebug(debug) {
      this.setValue('debug', debug);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getDebug",
    value: function getDebug() {
      return this.getValue('debug');
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isDebug",
    value: function isDebug() {
      return this.getDebug();
    }
    /**
     * @override
     */

  }, {
    key: "isRemovable",
    value: function isRemovable() {
      return false;
    }
  }]);
  return CameraComponent;
}(_Component2["default"]);

exports["default"] = CameraComponent;

},{"../../pobject/AttributeType.js":40,"../../pobject/Size.js":42,"../../utils/Vector.js":87,"../Component.js":27,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],30:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Component2 = _interopRequireDefault(require("../Component.js"));

var _Style = _interopRequireDefault(require("../../pobject/Style.js"));

var _Size = _interopRequireDefault(require("../../pobject/Size.js"));

var _Unit = require("../../unit/Unit.js");

var _AttributeType = require("../../pobject/AttributeType.js");

var _Vector = _interopRequireDefault(require("../../utils/Vector.js"));

var _MaterialType = _interopRequireDefault(require("../../material/MaterialType.js"));

var _FilterMode = require("../../constant/FilterMode.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MeshComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(MeshComponent, _Component);

  var _super = _createSuper(MeshComponent);

  function MeshComponent() {
    (0, _classCallCheck2["default"])(this, MeshComponent);
    return _super.call(this, 'Mesh');
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(MeshComponent, [{
    key: "initAttributes",
    value: function initAttributes() {
      this.add('shape', _AttributeType.TYPES.STRING, _Unit.PrimitiveShape.RECT);
      this.add('filter', _AttributeType.TYPES.STRING, _FilterMode.MODE.NO_SMOOTHING);
      this.add('style', _AttributeType.TYPES.STYLE, new _Style["default"]());
      this.add('size', _AttributeType.TYPES.SIZE, new _Size["default"](0));
      this.add('material', _AttributeType.TYPES.MATERIAL, _MaterialType["default"].DEFAULT);
      this.add('vertices', _AttributeType.TYPES.ARRAY | _AttributeType.TYPES.VECTOR, []);
      this.add('shapeVertices', _AttributeType.TYPES.ARRAY | _AttributeType.TYPES.VECTOR, []);
      this.add('generated', _AttributeType.TYPES.BOOLEAN, false);
      this.add('assetId', _AttributeType.TYPES.IMAGE);
      this.add('imageRepeat', _AttributeType.TYPES.BOOLEAN, false);
      this.add('imageScale', _AttributeType.TYPES.VECTOR, new _Vector["default"]({
        x: 1,
        y: 1
      }));
      this.add('imagePosition', _AttributeType.TYPES.VECTOR, new _Vector["default"]());
      this.add('imageRepeatAreaMin', _AttributeType.TYPES.VECTOR, new _Vector["default"]());
      this.add('imageRepeatAreaMax', _AttributeType.TYPES.VECTOR, new _Vector["default"]());
      this.add('version', _AttributeType.TYPES.NUMBER, 0);
      this.add('mapAssetPositions', _AttributeType.TYPES.ARRAY | _AttributeType.TYPES.VECTOR, []);
      this.add('mapAssetIds', _AttributeType.TYPES.ARRAY | _AttributeType.TYPES.NUMBER, []);
      this.add('mapAssetSize', _AttributeType.TYPES.SIZE, new _Size["default"](0));
    }
    /**
     * @override
     */

  }, {
    key: "getExcludeFields",
    value: function getExcludeFields() {
      return ['generated', 'shape', 'shapeVertices', 'vertices', 'version', 'style', 'size', 'mapAssetPositions', 'mapAssetIds', 'mapAssetSize'];
    }
    /**
     * @return {string}
     */

  }, {
    key: "getShape",
    value: function getShape() {
      return this.getValue('shape');
    }
    /**
     * @param {string} shape
     */

  }, {
    key: "setShape",
    value: function setShape(shape) {
      this.setValue('shape', shape);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getVersion",
    value: function getVersion() {
      return this.getValue('version');
    }
    /**
     * @param {number} version
     */

  }, {
    key: "setVersion",
    value: function setVersion(version) {
      this.setValue('version', version);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getAssetId",
    value: function getAssetId() {
      return this.getValue('assetId');
    }
    /**
     * @param {number} assetId
     */

  }, {
    key: "setAssetId",
    value: function setAssetId(assetId) {
      this.setValue('assetId', assetId);
    }
    /**
     * @return {Style}
     */

  }, {
    key: "getStyle",
    value: function getStyle() {
      return this.getValue('style');
    }
    /**
     * @param {Style} style
     */

  }, {
    key: "setStyle",
    value: function setStyle(style) {
      this.setValue('style', style);
    }
    /**
     * @param {Size} size
     */

  }, {
    key: "setSize",
    value: function setSize(size) {
      this.setValue('size', size);
    }
    /**
     * @return {Size}
     */

  }, {
    key: "getSize",
    value: function getSize() {
      return this.getValue('size');
    }
    /**
     * @param {boolean} generated
     */

  }, {
    key: "setGenerated",
    value: function setGenerated(generated) {
      this.setValue('generated', generated);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getGenerated",
    value: function getGenerated() {
      return this.getValue('generated');
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isGenerated",
    value: function isGenerated() {
      return this.getGenerated();
    }
    /**
     * @param {Vector[]} vertices
     */

  }, {
    key: "setVertices",
    value: function setVertices(vertices) {
      this.setValue('vertices', vertices);
    }
    /**
     * @return {Vector[]}
     */

  }, {
    key: "getVertices",
    value: function getVertices() {
      return this.getValue('vertices');
    }
    /**
     * @param {Vector[]} shapeVertices
     */

  }, {
    key: "setShapeVertices",
    value: function setShapeVertices(shapeVertices) {
      this.setValue('shapeVertices', shapeVertices);
    }
    /**
     * @return {Vector[]}
     */

  }, {
    key: "getShapeVertices",
    value: function getShapeVertices() {
      return this.getValue('shapeVertices');
    }
    /**
     * @param {boolean} imageRepeat
     */

  }, {
    key: "setImageRepeat",
    value: function setImageRepeat(imageRepeat) {
      this.setValue('imageRepeat', imageRepeat);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getImageRepeat",
    value: function getImageRepeat() {
      return this.getValue('imageRepeat');
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isImageRepeat",
    value: function isImageRepeat() {
      return this.getImageRepeat();
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getImageScale",
    value: function getImageScale() {
      return this.getValue('imageScale');
    }
    /**
     * @param {Vector} imageScale
     */

  }, {
    key: "setImageScale",
    value: function setImageScale(imageScale) {
      this.setValue('imageScale', imageScale);
    }
    /**
     * @return {Size}
     */

  }, {
    key: "getMapAssetSize",
    value: function getMapAssetSize() {
      return this.getValue('mapAssetSize');
    }
    /**
     * @param {Size} mapAssetSize
     */

  }, {
    key: "setMapAssetSize",
    value: function setMapAssetSize(mapAssetSize) {
      this.setValue('mapAssetSize', mapAssetSize);
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getImagePosition",
    value: function getImagePosition() {
      return this.getValue('imagePosition');
    }
    /**
     * @param {Vector} imagePosition
     */

  }, {
    key: "setImagePosition",
    value: function setImagePosition(imagePosition) {
      this.setValue('imagePosition', imagePosition);
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getImageRepeatAreaMin",
    value: function getImageRepeatAreaMin() {
      return this.getValue('imageRepeatAreaMin');
    }
    /**
     * @param {Vector} imageRepeatAreaMin
     */

  }, {
    key: "setImageRepeatAreaMin",
    value: function setImageRepeatAreaMin(imageRepeatAreaMin) {
      this.setValue('imageRepeatAreaMin', imageRepeatAreaMin);
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getImageRepeatAreaMax",
    value: function getImageRepeatAreaMax() {
      return this.getValue('imageRepeatAreaMax');
    }
    /**
     * @param {Vector} imageRepeatAreaMax
     */

  }, {
    key: "setImageRepeatAreaMax",
    value: function setImageRepeatAreaMax(imageRepeatAreaMax) {
      this.setValue('imageRepeatAreaMax', imageRepeatAreaMax);
    }
    /**
     * @return {string}
     */

  }, {
    key: "getMaterial",
    value: function getMaterial() {
      return this.getValue('material');
    }
    /**
     * @param {string} material
     */

  }, {
    key: "setMaterial",
    value: function setMaterial(material) {
      this.setValue('material', material);
    }
    /**
     * @return {string}
     */

  }, {
    key: "getFilter",
    value: function getFilter() {
      return this.getValue('filter');
    }
    /**
     * @param {string} filter
     */

  }, {
    key: "setFilter",
    value: function setFilter(filter) {
      this.setValue('filter', filter);
    }
    /**
     * @return {Vector[]}
     */

  }, {
    key: "getMapAssetPositions",
    value: function getMapAssetPositions() {
      return this.getValue('mapAssetPositions');
    }
    /**
     * @param {Vector[]} mapAssetPositions
     */

  }, {
    key: "setMapAssetPositions",
    value: function setMapAssetPositions(mapAssetPositions) {
      this.setValue('mapAssetPositions', mapAssetPositions);
    }
    /**
     * @return {number[]}
     */

  }, {
    key: "getMapAssetIds",
    value: function getMapAssetIds() {
      return this.getValue('mapAssetIds');
    }
    /**
     * @param {Vector[]} mapAssetIds
     */

  }, {
    key: "setMapAssetIds",
    value: function setMapAssetIds(mapAssetIds) {
      this.setValue('mapAssetIds', mapAssetIds);
    }
    /**
     * @override
     */

  }, {
    key: "isRemovable",
    value: function isRemovable() {
      return false;
    }
  }]);
  return MeshComponent;
}(_Component2["default"]);

exports["default"] = MeshComponent;

},{"../../constant/FilterMode.js":33,"../../material/MaterialType.js":38,"../../pobject/AttributeType.js":40,"../../pobject/Size.js":42,"../../pobject/Style.js":43,"../../unit/Unit.js":78,"../../utils/Vector.js":87,"../Component.js":27,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],31:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Component2 = _interopRequireDefault(require("../Component.js"));

var _AttributeType = require("../../pobject/AttributeType.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ScriptComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ScriptComponent, _Component);

  var _super = _createSuper(ScriptComponent);

  function ScriptComponent() {
    (0, _classCallCheck2["default"])(this, ScriptComponent);
    return _super.call(this, 'Script');
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(ScriptComponent, [{
    key: "isUnique",
    value: function isUnique() {
      return false;
    }
    /**
     * @override
     */

  }, {
    key: "getExcludeFields",
    value: function getExcludeFields() {
      return ['script', 'started', 'initialized'];
    }
    /**
     * @param {DynamicAttribute[]} vars
     */

  }, {
    key: "setVarsAttributes",
    value: function setVarsAttributes(vars) {
      var _this = this;

      vars.forEach(function (variable) {
        if (!_this.hasAttribute(variable.getAttrName())) {
          _this.add(variable.getAttrName(), variable.getAttrType(), variable.getAttrValue());
        }
      });
    }
    /**
     * @override
     */

  }, {
    key: "initAttributes",
    value: function initAttributes() {
      this.add('script', _AttributeType.TYPES.STRING);
      this.add('started', _AttributeType.TYPES.BOOLEAN);
      this.add('initialized', _AttributeType.TYPES.BOOLEAN);
    }
    /**
     * @return {string}
     */

  }, {
    key: "getScript",
    value: function getScript() {
      return this.getValue('script');
    }
    /**
     * @param {string} script
     */

  }, {
    key: "setScript",
    value: function setScript(script) {
      this.setValue('script', script);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getStarted",
    value: function getStarted() {
      return this.getValue('started');
    }
    /**
     * @return {number}
     */

  }, {
    key: "isStarted",
    value: function isStarted() {
      return this.getStarted();
    }
    /**
     * @param {boolean} started
     */

  }, {
    key: "setStarted",
    value: function setStarted(started) {
      this.setValue('started', started);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getInitialized",
    value: function getInitialized() {
      return this.getValue('initialized');
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isInitialized",
    value: function isInitialized() {
      return this.getInitialized();
    }
    /**
     * @param {boolean} initialized
     */

  }, {
    key: "setInitialized",
    value: function setInitialized(initialized) {
      this.setValue('initialized', initialized);
    }
    /**
     * @override
     */

  }, {
    key: "getValue",
    value: function getValue(name) {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(ScriptComponent.prototype), "getValue", this).call(this, name);
    }
    /**
     * @override
     */

  }, {
    key: "setValue",
    value: function setValue(name, value) {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(ScriptComponent.prototype), "setValue", this).call(this, name, value);
    }
    /**
     * @override
     */

  }, {
    key: "getType",
    value: function getType(name) {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(ScriptComponent.prototype), "getType", this).call(this, name);
    }
    /**
     * @override
     */

  }, {
    key: "isProtected",
    value: function isProtected() {
      return false;
    }
  }]);
  return ScriptComponent;
}(_Component2["default"]);

exports["default"] = ScriptComponent;

},{"../../pobject/AttributeType.js":40,"../Component.js":27,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],32:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Component2 = _interopRequireDefault(require("../../../Component.js"));

var _AttributeType = require("../../../../pobject/AttributeType.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GUIPropertyComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(GUIPropertyComponent, _Component);

  var _super = _createSuper(GUIPropertyComponent);

  function GUIPropertyComponent() {
    (0, _classCallCheck2["default"])(this, GUIPropertyComponent);
    return _super.call(this, 'Edit Properties');
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(GUIPropertyComponent, [{
    key: "initAttributes",
    value: function initAttributes() {
      this.add('selectable', _AttributeType.TYPES.BOOLEAN, true);
      this.add('selected', _AttributeType.TYPES.BOOLEAN, false);
      this.add('locked', _AttributeType.TYPES.BOOLEAN, false);
      this.add('visible', _AttributeType.TYPES.BOOLEAN, true);
      this.add('focused', _AttributeType.TYPES.BOOLEAN, false);
      this.add('ignored', _AttributeType.TYPES.BOOLEAN, false);
      this.add('rank', _AttributeType.TYPES.NUMBER, 0);
      this.add('restoreStyle', _AttributeType.TYPES.STYLE, null);
    }
    /**
     * @param {boolean} value
     */

  }, {
    key: "setSelected",
    value: function setSelected(value) {
      this.setValue('selected', value);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getSelected",
    value: function getSelected() {
      return this.getValue('selected');
    }
    /**
     * @param {boolean} ignored
     */

  }, {
    key: "setIgnored",
    value: function setIgnored(ignored) {
      this.setValue('ignored', ignored);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getIgnored",
    value: function getIgnored() {
      return this.getValue('ignored');
    }
    /**
     * @param {boolean} value
     */

  }, {
    key: "setFocused",
    value: function setFocused(value) {
      this.setValue('focused', value);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getFocused",
    value: function getFocused() {
      return this.getValue('focused');
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isFocused",
    value: function isFocused() {
      return this.getFocused();
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isIgnored",
    value: function isIgnored() {
      return this.getIgnored();
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.getSelected();
    }
    /**
     * @param {boolean} value
     */

  }, {
    key: "setSelectable",
    value: function setSelectable(value) {
      this.setValue('selectable', value);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getSelectable",
    value: function getSelectable() {
      return this.getValue('selectable');
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isSelectable",
    value: function isSelectable() {
      return this.getSelectable();
    }
    /**
     * @param {boolean} visible
     */

  }, {
    key: "setVisible",
    value: function setVisible(visible) {
      this.setValue('visible', visible);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.getValue('visible');
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isVisible",
    value: function isVisible() {
      return this.getVisible();
    }
    /**
     * @param {boolean} locked
     */

  }, {
    key: "setLocked",
    value: function setLocked(locked) {
      this.setValue('locked', locked);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getLocked",
    value: function getLocked() {
      return this.getValue('locked');
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isLocked",
    value: function isLocked() {
      return this.getLocked();
    }
    /**
     * @param {number} rank
     */

  }, {
    key: "setRank",
    value: function setRank(rank) {
      this.setValue('rank', rank);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getRank",
    value: function getRank() {
      return this.getValue('rank');
    }
    /**
     * @param {Style} style
     */

  }, {
    key: "setRestoreStyle",
    value: function setRestoreStyle(style) {
      this.setValue('restoreStyle', style);
    }
    /**
     * @return {Style}
     */

  }, {
    key: "getRestoreStyle",
    value: function getRestoreStyle() {
      return this.getValue('restoreStyle');
    }
    /**
     * @override
     */

  }, {
    key: "getFormFields",
    value: function getFormFields() {
      return [];
    }
    /**
     * @override
     */

  }, {
    key: "isHidden",
    value: function isHidden() {
      return true;
    }
  }]);
  return GUIPropertyComponent;
}(_Component2["default"]);

exports["default"] = GUIPropertyComponent;

},{"../../../../pobject/AttributeType.js":40,"../../../Component.js":27,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MODE = void 0;
var MODE = {
  NO_SMOOTHING: 'no smoothing',
  SMOOTHING: 'smoothing'
};
exports.MODE = MODE;

},{}],34:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ClientError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(ClientError, _Error);

  var _super = _createSuper(ClientError);

  function ClientError(message) {
    (0, _classCallCheck2["default"])(this, ClientError);
    return _super.call(this, message);
  }

  return ClientError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports["default"] = ClientError;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18,"@babel/runtime/helpers/wrapNativeSuper":24}],35:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SystemError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(SystemError, _Error);

  var _super = _createSuper(SystemError);

  function SystemError(message) {
    (0, _classCallCheck2["default"])(this, SystemError);
    return _super.call(this, message);
  }

  return SystemError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

exports["default"] = SystemError;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18,"@babel/runtime/helpers/wrapNativeSuper":24}],36:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

/**
 * Define the layout of the screen
 */
var Layout = function Layout() {
  (0, _classCallCheck2["default"])(this, Layout);
};

Layout.zone = {
  LEFT: 'left',
  TOP: 'top',
  TOP_MENU: 'top-menu',
  TOP_TAB: 'top-tab',
  BODY: 'body',
  BODY_BOTTOM: 'body-bottom',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  FOOTER: 'footer',
  WINDOW: 'window',
  CANVAS: 'canvas'
};
Layout.type = {
  BUTTON: 'button',
  DRAW: 'draw',
  ACTION: 'action',
  STYLE: 'style',
  PANEL: 'panel',
  BODY_CONTAINER: 'body-container',
  BODY_ITEM: 'body-item',
  TAB_LIST: 'tab_list',
  TAB_ITEM: 'tab_item',
  PANEL_ACTION: 'panel_action',
  STYLE_COLOR: 'style_color',
  ENTITY_ELEMENT: 'entity_element',
  UNIT_ELEMENT: 'unit_element',
  LAYER_ACTION: 'layer_action',
  LAYER_ELEMENT: 'layer_element',
  LIST: 'list',
  LIST_ELEMENT: 'list_element',
  TEXT: 'text',
  FORM: 'form',
  FORM_ELEMENT: 'form_element',
  FORM_INLINE: 'form_inline',
  GRAPH: 'graph',
  ICON: 'icon',
  ICON_TEXT: 'icon-text',
  TREE: 'tree',
  ASSETS: 'assets',
  WRAPPER: 'wrapper',
  FOLDER_ELEMENT: 'folder_element',
  ASSET_ELEMENT: 'asset_element',
  ASSET_VIEW: 'asset_view',
  LIST_OPTION: 'list_option'
};
Layout.form = {
  CHECKBOX: 'checkbox',
  TEXT: 'text',
  NUMBER: 'number',
  DROPDOWN: 'dropdown',
  FILE: 'file',
  COLOR: 'color',
  RANGE: 'range',
  TEXTAREA: 'textarea',
  WYSIWYG: 'wysiwyg',
  MULTI_BUTTON: 'multi_button',
  GROUP: 'group'
};
var _default = Layout;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/interopRequireDefault":12}],37:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Unit = _interopRequireDefault(require("../unit/Unit.js"));

var _UnitManagerData2 = _interopRequireDefault(require("../project/data/UnitManagerData.js"));

var _MeshComponent = _interopRequireDefault(require("../component/internal/MeshComponent.js"));

var _GUIPropertyComponent = _interopRequireDefault(require("../component/internal/gui/property/GUIPropertyComponent.js"));

var _Maths = _interopRequireDefault(require("../utils/Maths.js"));

var _ClientError = _interopRequireDefault(require("../exception/type/ClientError.js"));

var _ScriptComponent = _interopRequireDefault(require("../component/internal/ScriptComponent.js"));

var _CommonUtil = _interopRequireDefault(require("../utils/CommonUtil.js"));

var _ArrayHelper = _interopRequireDefault(require("../utils/ArrayHelper.js"));

var _CameraComponent = _interopRequireDefault(require("../component/internal/CameraComponent.js"));

var _AnimationComponent = _interopRequireDefault(require("../component/internal/AnimationComponent.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Manage the units, components list (get, add, load, ...)
 *
 * @property {Unit[]} units
 */
var UnitManager = /*#__PURE__*/function (_UnitManagerData) {
  (0, _inherits2["default"])(UnitManager, _UnitManagerData);

  var _super = _createSuper(UnitManager);

  function UnitManager() {
    var _this;

    (0, _classCallCheck2["default"])(this, UnitManager);
    _this = _super.call(this);
    _this.units = [];
    return _this;
  }
  /**
   * @param {Unit} unit
   * @return {number}
   */


  (0, _createClass2["default"])(UnitManager, [{
    key: "getIndexOfUnit",
    value: function getIndexOfUnit(unit) {
      return this.units.findIndex(function (element) {
        return element.getId() === unit.getId();
      });
    }
    /**
     * @return {Unit}
     */

  }, {
    key: "getSelected",
    value: function getSelected() {
      return this.units.find(function (unit) {
        return unit.isSelected();
      });
    }
    /**
     * @param {number} unitId
     * @return {Unit}
     */

  }, {
    key: "findUnitById",
    value: function findUnitById(unitId) {
      return this.units.find(function (element) {
        return element.getId() === unitId;
      });
    }
    /**
     * @return {Unit}
     */

  }, {
    key: "findActiveCameraUnit",
    value: function findActiveCameraUnit() {
      return this.findUnitByComponentClass(_CameraComponent["default"]);
    }
    /**
     * @param {Unit} type
     * @return {Unit[]}
     */

  }, {
    key: "findUnitsByType",
    value: function findUnitsByType(type) {
      return this.units.filter(function (element) {
        return element instanceof type;
      });
    }
    /**
     * @param {Unit} type
     * @return {Unit}
     */

  }, {
    key: "findUnitByType",
    value: function findUnitByType(type) {
      return this.units.find(function (element) {
        return element instanceof type;
      });
    }
    /**
     * @param {Unit} unit
     * @return {boolean}
     */

  }, {
    key: "hasUnit",
    value: function hasUnit(unit) {
      return !!this.units.find(function (pUnit) {
        return pUnit === unit;
      });
    }
    /**
     * @param {Unit} unit
     * @return {boolean}
     */

  }, {
    key: "isUnit",
    value: function isUnit(unit) {
      return unit instanceof _Unit["default"];
    }
    /**
     * @param {Component} componentInstance
     * @return {boolean}
     */

  }, {
    key: "hasComponent",
    value: function hasComponent(componentInstance) {
      return !!this.units.find(function (unit) {
        return unit.hasComponentInstance(componentInstance);
      });
    }
    /**
     * @param {string} name
     * @return {Unit}
     */

  }, {
    key: "findUnitByName",
    value: function findUnitByName(name) {
      return this.units.find(function (element) {
        return element.getName() === name;
      });
    }
    /**
     * @param {Unit} parent
     * @param {string} name
     * @return {Unit}
     */

  }, {
    key: "findChildUnitByName",
    value: function findChildUnitByName(parent, name) {
      return this.findChildUnits(parent).find(function (element) {
        return element.getName() === name;
      });
    }
    /**
     * @param {string} name
     * @return {Unit[]}
     */

  }, {
    key: "findUnitsByName",
    value: function findUnitsByName(name) {
      return this.units.filter(function (element) {
        return element.getName() === name;
      });
    }
    /**
     * @param {MaskGroup} maskGroup
     * @return {Unit[]}
     */

  }, {
    key: "findUnitsByMaskGroup",
    value: function findUnitsByMaskGroup(maskGroup) {
      return this.units.filter(function (unit) {
        return unit.getMaskGroupId() === maskGroup.getId();
      });
    }
    /**
     * @param {Component[]} componentClasses
     * @return {Unit[]}
     */

  }, {
    key: "findUnitsByComponents",
    value: function findUnitsByComponents(componentClasses) {
      return this.units.filter(function (element) {
        return element.hasComponents(componentClasses);
      });
    }
    /**
     * @param {Asset} asset
     * @return {Unit[]}
     */

  }, {
    key: "findUnitsByAsset",
    value: function findUnitsByAsset(asset) {
      return this.units.filter(function (unit) {
        var meshComponent = unit.getComponent(_MeshComponent["default"]);

        if (meshComponent) {
          return meshComponent.getAssetId() === asset.getId();
        }
      });
    }
    /**
     * @param {Asset} asset
     */

  }, {
    key: "deleteUnitsByAsset",
    value: function deleteUnitsByAsset(asset) {
      var _this2 = this;

      this.findUnitsByAsset(asset).forEach(function (unit) {
        _this2.deleteUnit(unit);
      });
    }
    /**
     * @param {Asset} asset
     */

  }, {
    key: "emptyUnitsByAsset",
    value: function emptyUnitsByAsset(asset) {
      this.findUnitsByAsset(asset).forEach(function (unit) {
        unit.getComponent(_MeshComponent["default"]).setAssetId(null);
      });
    }
    /**
     * @param {Component[]} componentClasses
     * @return {Unit[]}
     */

  }, {
    key: "findUnitsByComponentClasses",
    value: function findUnitsByComponentClasses(componentClasses) {
      return this.units.filter(function (element) {
        return element.hasComponentsByClasses(componentClasses);
      });
    }
    /**
     * @param {number[]} componentIds
     * @return {Unit[]}
     */

  }, {
    key: "findUnitsByComponentIds",
    value: function findUnitsByComponentIds(componentIds) {
      return this.units.filter(function (element) {
        return element.getComponents().find(function (component) {
          return componentIds.includes(component.getId());
        });
      });
    }
    /**
     * @param {Component[]} componentClasses
     * @return {Unit[]}
     */

  }, {
    key: "findUnitsByAnyComponentClasses",
    value: function findUnitsByAnyComponentClasses(componentClasses) {
      return this.units.filter(function (element) {
        return element.hasAnyComponentsByClasses(componentClasses);
      });
    }
    /**
     * @param {AScript} script
     * @return {Unit[]}
     */

  }, {
    key: "findUnitsAttachedToScript",
    value: function findUnitsAttachedToScript(script) {
      var _this3 = this;

      return this.units.filter(function (unit) {
        return _this3.findComponentAttachedToScript(unit, script);
      });
    }
    /**
     * @param {Component} component
     * @return {Unit}
     */

  }, {
    key: "findUnitByComponent",
    value: function findUnitByComponent(component) {
      return this.units.find(function (unit) {
        return unit.findComponentById(component.id);
      });
    }
    /**
     * @param {Component} componentClass
     * @return {Unit}
     */

  }, {
    key: "findUnitByComponentClass",
    value: function findUnitByComponentClass(componentClass) {
      return this.units.find(function (unit) {
        return unit.getComponent(componentClass);
      });
    }
    /**
     * @param {Unit} unit
     * @param {AScript} script
     * @return {Component}
     */

  }, {
    key: "findComponentAttachedToScript",
    value: function findComponentAttachedToScript(unit, script) {
      var scriptComponents = unit.findComponentsByClass(_ScriptComponent["default"]);
      return scriptComponents.find(function (scriptComponent) {
        return scriptComponent.getScript() === script.getName();
      });
    }
    /**
     * @param {number} componentId
     * @return {Component}
     */

  }, {
    key: "findComponentById",
    value: function findComponentById(componentId) {
      for (var iUnit in this.units) {
        var unit = this.units[iUnit];
        var component = unit.findComponentById(componentId);

        if (component) {
          return component;
        }
      }

      return null;
    }
    /**
     * @param {Unit} parentUnit
     * @return {Unit[]}
     */

  }, {
    key: "findChildUnits",
    value: function findChildUnits(parentUnit) {
      var parentUnitId = parentUnit && parentUnit.getId();
      return this.units.filter(function (unit) {
        return unit.getUnitParentId() === parentUnitId;
      });
    }
    /**
     * @param {Unit} childUnit
     * @return {Unit}
     */

  }, {
    key: "findParentUnit",
    value: function findParentUnit(childUnit) {
      var parentUnitId = childUnit.getUnitParentId();
      return parentUnitId && this.findUnitById(parentUnitId);
    }
    /**
     * @template T
     * @param {Class} T
     * @param {Unit} parentUnit
     * @return {T}
     */

  }, {
    key: "createUnit",
    value: function createUnit(T, parentUnit) {
      if (!(T.prototype instanceof _Unit["default"])) {
        throw new _ClientError["default"]("Unit type must be child of Unit class (".concat(type, " given)"));
      }

      var unit = this.newUnit(T, parentUnit);
      this.addUnit(unit);
      return unit;
    }
    /**
     * @template T
     * @param {Class} T
     * @param {Unit} parentUnit
     * @return {T}
     */

  }, {
    key: "newUnit",
    value: function newUnit(T, parentUnit) {
      if (!(T.prototype instanceof _Unit["default"])) {
        throw new _ClientError["default"]("Unit type must be child of Unit class (".concat(type, " given)"));
      }

      var unit = new T();

      if (parentUnit) {
        unit.setUnitParentId(parentUnit.getId());
      }

      return unit;
    }
    /**
     * @template T
     * @param {Class<Unit>} T
     * @param {Unit} parentUnit
     * @param {...any} props
     * @return {T}
     */

  }, {
    key: "createUnitInstant",
    value: function createUnitInstant(T, parentUnit) {
      if (!(T.prototype instanceof _Unit["default"])) {
        throw new _ClientError["default"]("Unit type must be child of Unit class (".concat(type, " given)"));
      }

      var unit = this.newUnit(T, parentUnit);

      for (var _len = arguments.length, props = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        props[_key - 2] = arguments[_key];
      }

      unit.instantiate.apply(unit, props);
      this.addUnit(unit);
      return unit;
    }
    /**
     * @template T
     * @param {Unit} instance
     * @param {Unit} parentUnit
     * @return {Unit}
     */

  }, {
    key: "createUnitByInstance",
    value: function createUnitByInstance(instance, parentUnit) {
      if (!(instance instanceof _Unit["default"])) {
        throw new _ClientError["default"]('Unit type must be child of Unit class');
      }

      this.addUnit(instance);
      return instance;
    }
    /**
     * @param {Unit} unit
     */

  }, {
    key: "addUnit",
    value: function addUnit(unit) {
      var _this4 = this;

      _CommonUtil["default"].setupName(unit, unit.getName(), function (name) {
        return unit.setName(name);
      }, function (name) {
        return _this4.findUnitByName(name);
      });

      this.units.push(unit);
    }
    /**
     * @param {Unit} unit
     */

  }, {
    key: "sortUnit",
    value: function sortUnit(unit) {
      var indexUnit = this.units.findIndex(function (pUnit) {
        return pUnit === unit;
      });
      var rank = unit.getComponent(_GUIPropertyComponent["default"]).getRank();
      this.units.splice(indexUnit, 1);
      var indexBiggerRank = this.units.findIndex(function (pUnit) {
        return pUnit.getComponent(_GUIPropertyComponent["default"]).getRank() > rank;
      });

      if (indexBiggerRank >= 0) {
        this.units.splice(indexBiggerRank, 0, unit);
      } else {
        this.units.splice(indexUnit, 0, unit);
      }
    }
  }, {
    key: "sortUnits",
    value: function sortUnits() {
      this.units.sort(function (unitA, unitB) {
        var rankA = unitA.getComponent(_GUIPropertyComponent["default"]).getRank();
        var rankB = unitB.getComponent(_GUIPropertyComponent["default"]).getRank();

        if (rankA < rankB) {
          return -1;
        } else if (rankA > rankB) {
          return 1;
        }

        return 0;
      });
    }
    /**
     * @return {Unit[]}
     */

  }, {
    key: "getEnabledUnits",
    value: function getEnabledUnits() {
      return this.getUnits().filter(function (unit) {
        return unit.isEnabled();
      });
    }
    /**
     * @param {Unit} unit
     */

  }, {
    key: "deleteUnit",
    value: function deleteUnit(unit) {
      var _this5 = this;

      var unitChilds = this.findChildUnits(unit);
      unitChilds.forEach(function (cUnit) {
        return _this5.deleteUnit(cUnit);
      });
      var index = this.getIndexOfUnit(unit);

      if (index >= 0) {
        return this.units.splice(this.getIndexOfUnit(unit), 1);
      }
    }
    /**
     * @param {Unit} unit
     */

  }, {
    key: "destroyUnit",
    value: function destroyUnit(unit) {
      var _this6 = this;

      var unitChilds = this.findChildUnits(unit);
      unitChilds.forEach(function (cUnit) {
        return _this6.destroyUnit(cUnit);
      });
      var index = this.getIndexOfUnit(unit);

      if (index >= 0) {
        return this.units.splice(this.getIndexOfUnit(unit), 1);
      }
    }
    /**
     * @param {Unit} unit
     * @param {boolean} visible
     */

  }, {
    key: "setVisibilityUnit",
    value: function setVisibilityUnit(unit, visible) {
      var _this7 = this;

      var unitChilds = this.findChildUnits(unit);
      unitChilds.forEach(function (cUnit) {
        return _this7.setVisibilityUnit(cUnit, visible);
      });
      var meshComponent = unit.getComponent(_MeshComponent["default"]);
      unit.setEnabled(visible);

      if (meshComponent) {
        meshComponent.setGenerated(false);
      }
    }
    /**
     * @param {Unit} unit
     * @param {boolean} focus
     */

  }, {
    key: "setFocusUnit",
    value: function setFocusUnit(unit, focus) {
      var _this8 = this;

      var unitChilds = this.findChildUnits(unit);
      unitChilds.forEach(function (cUnit) {
        return _this8.setFocusUnit(cUnit, focus);
      });
      var meshComponent = unit.getComponent(_MeshComponent["default"]);
      unit.getComponent(_GUIPropertyComponent["default"]).setIgnored(!focus);

      if (meshComponent) {
        meshComponent.setGenerated(false);
      }
    }
    /**
     * @param {Unit[]} units
     */

  }, {
    key: "deleteUnits",
    value: function deleteUnits(units) {
      var _this9 = this;

      units.forEach(function (unit) {
        return _this9.deleteUnit(unit);
      });
    }
    /**
     * @param {number} unitId
     */

  }, {
    key: "deleteUnitById",
    value: function deleteUnitById(unitId) {
      var unit = this.findUnitById(unitId);
      this.deleteUnit(unit);
    }
    /**
     * @param {Component[]} componentClasses
     */

  }, {
    key: "deleteUnitsByComponents",
    value: function deleteUnitsByComponents(componentClasses) {
      var _this10 = this;

      this.getUnitsHasComponents(componentClasses).forEach(function (unit) {
        return _this10.deleteUnit(unit);
      });
    }
    /**
     * @param {Unit} unit
     */

  }, {
    key: "moveUnitUp",
    value: function moveUnitUp(unit) {
      var index = this.getIndexOfUnit(unit);

      if (index > 0) {
        _ArrayHelper["default"].permute(this.units, index, index - 1);
      }
    }
    /**
     * @param {Unit} unit
     */

  }, {
    key: "moveUnitDown",
    value: function moveUnitDown(unit) {
      var index = this.getIndexOfUnit(unit);

      if (index < this.units.length - 1) {
        _ArrayHelper["default"].permute(this.units, index, index + 1);
      }
    }
    /**
     * @param {number} unitId
     */

  }, {
    key: "tryDeleteUnitById",
    value: function tryDeleteUnitById(unitId) {
      var unit = this.findUnitById(unitId);
      unit && this.deleteUnit(unit);
    }
    /**
     * @param {Component[]} componentClasses
     * @return {Unit[]}
     */

  }, {
    key: "getUnitsHasComponents",
    value: function getUnitsHasComponents(componentClasses) {
      return this.getUnits().filter(function (unit) {
        return unit.hasComponents(componentClasses);
      });
    }
    /**
     * @param {Component[]} componentClasses
     * @return {Unit[]}
     */

  }, {
    key: "getUnitsHasComponentClasses",
    value: function getUnitsHasComponentClasses(componentClasses) {
      return this.getUnits().filter(function (unit) {
        return unit.hasComponentsByClasses(componentClasses);
      });
    }
    /**
     * @param {Component[]} componentClasses
     * @return {Unit}
     */

  }, {
    key: "getOneUnitHasComponents",
    value: function getOneUnitHasComponents(componentClasses) {
      var result = this.getUnitsHasComponents(componentClasses);
      return result && result[0];
    }
    /**
     * @param {Component[]} componentClasses
     * @return {Unit[]}
     */

  }, {
    key: "getUnitsHasAnyComponents",
    value: function getUnitsHasAnyComponents(componentClasses) {
      return this.getUnits().filter(function (unit) {
        return unit.hasAnyComponents(componentClasses);
      });
    }
    /**
     * @param {Unit} unit
     * @param {Unit} parentUnit
     * @return {Unit}
     */

  }, {
    key: "clone",
    value: function clone(unit) {
      var _this11 = this;

      var parentUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var cloneUnit = _.cloneDeep(unit);

      cloneUnit.setName("Clone of ".concat(unit.getName()));
      cloneUnit.setId(_Maths["default"].generateId());
      parentUnit && cloneUnit.setUnitParentId(parentUnit.getId());
      cloneUnit.getComponents().forEach(function (component) {
        return component.setId(_Maths["default"].generateId());
      });
      this.addUnit(cloneUnit);
      this.findChildUnits(unit).forEach(function (cUnit) {
        _this11.clone(cUnit, cloneUnit);
      });
      return cloneUnit;
    }
    /**
     * @param {Unit[]} units
     * @return {Unit[]}
     */

  }, {
    key: "cloneUnits",
    value: function cloneUnits(units) {
      var _this12 = this;

      return units.map(function (unit) {
        return _this12.clone(unit);
      });
    }
    /**
     * @param {World} world
     */

  }, {
    key: "regenerateAll",
    value: function regenerateAll(world) {
      this.units.forEach(function (unit) {
        var meshComponent = unit.getComponent(_MeshComponent["default"]);

        if (meshComponent) {
          meshComponent.setGenerated(false);
        }
      });
    }
    /**
     * @return {Unit[]}
     */

  }, {
    key: "getNotDestroyable",
    value: function getNotDestroyable() {
      var _this13 = this;

      return this.getUnits().filter(function (unit) {
        return !_this13.isDestroyable(unit);
      });
    }
    /**
     * @param {Unit} unit
     * @return {boolean}
     */

  }, {
    key: "isDestroyable",
    value: function isDestroyable(unit) {
      if (unit) {
        return !unit.getDontDestroy() && this.isDestroyable(this.findParentUnit(unit));
      }

      return true;
    }
    /**
     * @param {Unit} unit
     */

  }, {
    key: "setupName",
    value: function setupName(unit) {
      var initialName = unit.getName();
      var name = initialName;
      var existUnit = null;
      var iDuplicate = 0;

      do {
        unit.setName(name);
        existUnit = this.findUnitByName(name);

        if (existUnit) {
          iDuplicate++;
          name = "".concat(initialName, " (").concat(iDuplicate, ")");
        }
      } while (existUnit);
    }
    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {Animation} animation
     * @return {boolean}
     */

  }, {
    key: "isUnitHasAnimation",
    value: function isUnitHasAnimation(world, unit, animation) {
      var animationScript = this.getUnitAnimationController(world, unit);
      return animation.getControllerAssetId() === animationScript.getAssetId();
    }
    /**
     * @param {World} world
     * @param {Unit} unit
     * @return {AScript}
     */

  }, {
    key: "getUnitAnimationController",
    value: function getUnitAnimationController(world, unit) {
      var animationComponent = unit.getComponent(_AnimationComponent["default"]);

      if (animationComponent) {
        var animationScriptName = animationComponent.getScript();

        if (animationScriptName) {
          return world.getScriptManager().findByName(animationScriptName);
        }
      }
    }
  }]);
  return UnitManager;
}(_UnitManagerData2["default"]);

exports["default"] = UnitManager;

},{"../component/internal/AnimationComponent.js":28,"../component/internal/CameraComponent.js":29,"../component/internal/MeshComponent.js":30,"../component/internal/ScriptComponent.js":31,"../component/internal/gui/property/GUIPropertyComponent.js":32,"../exception/type/ClientError.js":34,"../project/data/UnitManagerData.js":76,"../unit/Unit.js":78,"../utils/ArrayHelper.js":79,"../utils/CommonUtil.js":81,"../utils/Maths.js":83,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  DEFAULT: 'default',
  LIGHT: 'light'
};
exports["default"] = _default;

},{}],39:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OPERATIONS = exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var StackOperation = /*#__PURE__*/function () {
  /**
   * @type {string}
   */

  /**
   * @type{string[]}
   */

  /**
   * @param {string} operation
   * @param {string} args
   */
  function StackOperation(operation) {
    (0, _classCallCheck2["default"])(this, StackOperation);
    (0, _defineProperty2["default"])(this, "operation", void 0);
    (0, _defineProperty2["default"])(this, "args", void 0);
    this.operation = operation;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this.args = args;
  }
  /**
   * @param {string} operation
   */


  (0, _createClass2["default"])(StackOperation, [{
    key: "setOperation",
    value: function setOperation(operation) {
      this.operation = operation;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getOperation",
    value: function getOperation() {
      return this.operation;
    }
    /**
     * @return {string[]}
     */

  }, {
    key: "getArgs",
    value: function getArgs() {
      return this.args;
    }
    /**
     * @param {string[]} args
     */

  }, {
    key: "setArgs",
    value: function setArgs(args) {
      this.args = args;
    }
    /**
     * @param {string[]} args
     */

  }, {
    key: "concatArgs",
    value: function concatArgs(args) {
      this.setArgs(args);
    }
  }]);
  return StackOperation;
}();

exports["default"] = StackOperation;
var OPERATIONS = {
  PUSH: 'push',
  GET: 'get',
  SET: 'set',
  CALL: 'call',
  EXIT: 'exit',
  JUMP: 'jump',
  JUMP_TO: 'jump_to',
  DISPATCH: 'dispatch',
  SELF: 'self',
  THEN: 'then'
};
exports.OPERATIONS = OPERATIONS;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],40:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TYPES_NAME = exports.TYPES = exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Style = _interopRequireDefault(require("./Style.js"));

var _Size = _interopRequireDefault(require("./Size.js"));

var _Vector = _interopRequireDefault(require("../utils/Vector.js"));

var _DynamicAttribute = _interopRequireDefault(require("./DynamicAttribute.js"));

var _BlobData = _interopRequireDefault(require("../project/data/BlobData.js"));

var _SystemError = _interopRequireDefault(require("../exception/type/SystemError.js"));

var AttributeType = /*#__PURE__*/function () {
  function AttributeType() {
    (0, _classCallCheck2["default"])(this, AttributeType);
  }

  (0, _createClass2["default"])(AttributeType, null, [{
    key: "extractPrototype",

    /**
     * @param {number|string} prototype
     * @param {Object} parentPathData
     * @return {number|Class}
     */
    value: function extractPrototype(prototype, parentPathData) {
      if (_.isString(prototype) || _.isNumber(prototype)) {
        var dynamicPrototype = this.extractDynamicPrototypeName(prototype, parentPathData);
        return this.mapPrototype(dynamicPrototype || prototype);
      }

      return prototype;
    }
    /**
     * @param {number|string} prototype
     * @param {Object} parentPathData
     * @return {number}
     */

  }, {
    key: "extractDynamicPrototypeName",
    value: function extractDynamicPrototypeName(prototype, parentPathData) {
      if (_.isObject(parentPathData)) {
        var dynamicTypeRegex = _.isString(prototype) && /^\[([a-zA-Z]+)]$/.exec(prototype);
        var dynamicType = dynamicTypeRegex && dynamicTypeRegex[1];

        if (dynamicType) {
          return parseInt(parentPathData[dynamicType]);
        }
      }
    }
    /**
     * @return {string|Class}
     */

  }, {
    key: "mapPrototype",
    value: function mapPrototype(prototype) {
      switch (prototype) {
        case TYPES.ANY:
          return 'string';

        case TYPES.STRING:
          return 'string';

        case TYPES.BOOLEAN:
          return 'boolean';

        case TYPES.NUMBER:
          return 'number';

        case TYPES.UNIT:
          return 'number';

        case TYPES.ANIMATION:
          return 'number';

        case TYPES.COMPONENT:
          return 'string';

        case TYPES.MATERIAL:
          return 'string';

        case TYPES.COLOR:
          return 'string';

        case TYPES.COMPONENT_INSTANCE:
          return 'number';

        case TYPES.AUDIO:
          return 'number';

        case TYPES.SCENE:
          return 'number';

        case TYPES.FONT:
          return 'number';

        case TYPES.IMAGE:
          return 'number';

        case TYPES.UNIT_INSTANT:
          return 'number';

        case TYPES.PROMISE:
          return 'string';

        case TYPES.LIST:
          return 'string';

        case TYPES.FUNCTION:
          return 'string';

        case TYPES.MASK_GROUP_INSTANCE:
          return 'number';

        case TYPES.RANGE:
          return 'number';

        case TYPES.MESH:
          return _BlobData["default"];

        case TYPES.STYLE:
          return _Style["default"];

        case TYPES.SIZE:
          return _Size["default"];

        case TYPES.VECTOR:
          return _Vector["default"];

        case TYPES.DYNAMIC_ATTRIBUTE:
          return _DynamicAttribute["default"];

        default:
          if (this.isArrayType(prototype)) {
            return Array;
          }

          throw new _SystemError["default"]("AttributeType not supported (".concat(prototype, ")"));
      }
    }
    /**
     * @param {number} type
     * @return {boolean}
     */

  }, {
    key: "isArrayType",
    value: function isArrayType(type) {
      return this.has(type, TYPES.ARRAY);
    }
    /**
     * @param {number} type
     * @return {number}
     */

  }, {
    key: "getArrayElementType",
    value: function getArrayElementType(type) {
      for (var maskType in TYPES) {
        var mask = TYPES[maskType];

        if (mask !== TYPES.ARRAY && this.has(type, mask)) {
          return mask;
        }
      }
    }
    /**
     * @param {number|string} type
     * @param {number} typeMask
     * @return {boolean}
     */

  }, {
    key: "has",
    value: function has(type, typeMask) {
      return (parseInt(type) & typeMask) === typeMask;
    }
    /**
     * @param {number|string} type
     * @param {number} typeMask
     * @return {boolean}
     */

  }, {
    key: "is",
    value: function is(type, typeMask) {
      return parseInt(type) === typeMask;
    }
    /**
     * @param {number} type
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName(type) {
      var findType = TYPES_NAME.find(function (pType) {
        return pType.value === type;
      });
      return this.isArrayType(type) ? 'Array' : findType && findType.label;
    }
  }]);
  return AttributeType;
}();
/**
 * [category][type for each category]
 * [000000][00000000000000000000]
 * Define attribute types :
 * 000001: Primitive
 * 000010: Advanced Primitive
 * 000100: Simple Object
 * 001000: Arrays
 * 010000: Advanced Object (Blob, ...)
 * @type {Object}
 */


exports["default"] = AttributeType;
var TYPES = {
  ANY: 1048577,
  STRING: 1048578,
  BOOLEAN: 1048580,
  NUMBER: 1048584,
  UNIT: 1048592,
  ANIMATION: 1048608,
  COMPONENT: 1048640,
  COMPONENT_INSTANCE: 1048704,
  MASK_GROUP_INSTANCE: 1048832,
  MATERIAL: 1049088,
  COLOR: 1049600,
  AUDIO: 1050624,
  LIST: 1052672,
  FONT: 1056768,
  SCENE: 1064960,
  FUNCTION: 1081344,
  IMAGE: 1114112,
  UNIT_INSTANT: 1179648,
  RANGE: 2097153,
  STYLE: 4194306,
  SIZE: 4194308,
  VECTOR: 4194312,
  DYNAMIC_ATTRIBUTE: 4194320,
  ARRAY: 8388608,
  MESH: 16777217,
  PROMISE: 16777218
};
exports.TYPES = TYPES;
var TYPES_NAME = [{
  value: TYPES.STRING,
  label: 'String'
}, {
  value: TYPES.ANY,
  label: 'Any'
}, {
  value: TYPES.NUMBER,
  label: 'Number'
}, {
  value: TYPES.BOOLEAN,
  label: 'Boolean'
}, {
  value: TYPES.VECTOR,
  label: 'Vector'
}, {
  value: TYPES.MASK_GROUP_INSTANCE,
  label: 'Mask Group'
}, {
  value: TYPES.UNIT,
  label: 'Unit'
}, {
  value: TYPES.ANIMATION,
  label: 'Animation'
}, {
  value: TYPES.UNIT_INSTANT,
  label: 'Unit Instant'
}, {
  value: TYPES.PROMISE,
  label: 'Promise'
}, {
  value: TYPES.COMPONENT_INSTANCE,
  label: 'Component instance'
}, {
  value: TYPES.IMAGE,
  label: 'Image'
}, {
  value: TYPES.ARRAY,
  label: 'Array'
}, {
  value: TYPES.SCENE,
  label: 'Scene'
}, {
  value: TYPES.FUNCTION,
  label: 'Function'
}, {
  value: TYPES.COMPONENT,
  label: 'Component'
}];
exports.TYPES_NAME = TYPES_NAME;

},{"../exception/type/SystemError.js":35,"../project/data/BlobData.js":53,"../utils/Vector.js":87,"./DynamicAttribute.js":41,"./Size.js":42,"./Style.js":43,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],41:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Maths = _interopRequireDefault(require("../utils/Maths.js"));

var DynamicAttribute = /*#__PURE__*/function () {
  /**
   * @type {number}
   */

  /**
   * @type {string}
   */

  /**
   * @type {number}
   */

  /**
   * @type {*}
   */

  /**
   * @type {*}
   */

  /**
   * @type {boolean}
   */

  /**
   * @param {string} attrName
   * @param {number|string} attrType
   * @param {*} attrValue
   * @param {*} attrRule
   * @param {boolean} internal
   */
  function DynamicAttribute(attrName, attrType) {
    var attrValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var attrRule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var internal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    (0, _classCallCheck2["default"])(this, DynamicAttribute);
    (0, _defineProperty2["default"])(this, "id", void 0);
    (0, _defineProperty2["default"])(this, "attrName", void 0);
    (0, _defineProperty2["default"])(this, "attrType", void 0);
    (0, _defineProperty2["default"])(this, "attrValue", void 0);
    (0, _defineProperty2["default"])(this, "attrRule", void 0);
    (0, _defineProperty2["default"])(this, "internal", void 0);
    this.id = _Maths["default"].generateId();
    this.setAttrName(attrName);
    this.setAttrType(attrType);
    this.setAttrValue(attrValue);
    this.setAttrRule(attrRule);
    this.setInternal(internal);
  }
  /**
   * @param {number} id
   */


  (0, _createClass2["default"])(DynamicAttribute, [{
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @param {boolean} internal
     */

  }, {
    key: "setInternal",
    value: function setInternal(internal) {
      this.internal = internal;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getInternal",
    value: function getInternal() {
      return this.internal;
    }
    /**
     * @param {string} name
     */

  }, {
    key: "setAttrName",
    value: function setAttrName(name) {
      this.attrName = name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getAttrName",
    value: function getAttrName() {
      return this.attrName;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return '';
    }
    /**
     * @param {string|number} type
     */

  }, {
    key: "setAttrType",
    value: function setAttrType(type) {
      this.attrType = parseInt(type);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getAttrType",
    value: function getAttrType() {
      return this.attrType;
    }
    /**
     * @param {*} value
     */

  }, {
    key: "setAttrValue",
    value: function setAttrValue(value) {
      this.attrValue = value;
    }
    /**
     * @return {*}
     */

  }, {
    key: "getAttrValue",
    value: function getAttrValue() {
      return this.attrValue;
    }
    /**
     * @param {*} value
     */

  }, {
    key: "setAttrRule",
    value: function setAttrRule(value) {
      this.attrRule = value;
    }
    /**
     * @return {*}
     */

  }, {
    key: "getAttrRule",
    value: function getAttrRule() {
      return this.attrRule;
    }
    /**
     * @param {*[]} values
     */

  }, {
    key: "concatAttrValue",
    value: function concatAttrValue(values) {
      this.setAttrValue(values);
    }
  }]);
  return DynamicAttribute;
}();

exports["default"] = DynamicAttribute;

},{"../utils/Maths.js":83,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],42:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * @class {Size}
 */
var Size = /*#__PURE__*/function () {
  /**
   * @param {number|{width: number, height: number}} size
   */
  function Size(size) {
    (0, _classCallCheck2["default"])(this, Size);
    var width = 0,
        height = 0;

    if ((0, _typeof2["default"])(size) !== 'object') {
      width = size;
      height = size;
    } else if (size) {
      width = size.width || width;
      height = size.height || height;
    }

    this.width = width;
    this.height = height;
  }
  /**
   * @param {number|string} width
   */


  (0, _createClass2["default"])(Size, [{
    key: "setWidth",
    value: function setWidth(width) {
      this.width = parseInt(width);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }
    /**
     * @param {number|string} height
     */

  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.height = parseInt(height);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }
    /**
     * @param {Size} size
     */

  }, {
    key: "equals",
    value: function equals(size) {
      return this.width === size.width && this.height === size.height;
    }
    /**
     * @param {Size} size
     * @return {Size}
     */

  }, {
    key: "add",
    value: function add(size) {
      this.width += size.width;
      this.height += size.height;
      return this;
    }
  }]);
  return Size;
}();

var _default = Size;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/typeof":22}],43:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Vector = _interopRequireDefault(require("../utils/Vector.js"));

/**
 * @class {Style}
 */
var Style = /*#__PURE__*/function () {
  function Style() {
    (0, _classCallCheck2["default"])(this, Style);
    (0, _defineProperty2["default"])(this, "color", void 0);
    (0, _defineProperty2["default"])(this, "colorOpacity", 1);
    (0, _defineProperty2["default"])(this, "fillColor", void 0);
    (0, _defineProperty2["default"])(this, "fillColorOpacity", 1);
    (0, _defineProperty2["default"])(this, "opacity", void 0);
    (0, _defineProperty2["default"])(this, "borderSize", void 0);
    (0, _defineProperty2["default"])(this, "shadowColor", void 0);
    (0, _defineProperty2["default"])(this, "shadowPosition", new _Vector["default"]());
    (0, _defineProperty2["default"])(this, "shadowBlur", 0);
    (0, _defineProperty2["default"])(this, "gradientColorAssetId", void 0);
  }

  (0, _createClass2["default"])(Style, [{
    key: "setColor",

    /**
     * @param {string} color
     */
    value: function setColor(color) {
      this.color = color;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getColor",
    value: function getColor() {
      return this.color;
    }
    /**
     * @param {number} colorOpacity
     */

  }, {
    key: "setColorOpacity",
    value: function setColorOpacity(colorOpacity) {
      this.colorOpacity = colorOpacity;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getColorOpacity",
    value: function getColorOpacity() {
      return this.colorOpacity;
    }
    /**
     * @param {string} fillColor
     */

  }, {
    key: "setFillColor",
    value: function setFillColor(fillColor) {
      this.fillColor = fillColor;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getFillColor",
    value: function getFillColor() {
      return this.fillColor;
    }
    /**
     * @param {number} fillColorOpacity
     */

  }, {
    key: "setFillColorOpacity",
    value: function setFillColorOpacity(fillColorOpacity) {
      this.fillColorOpacity = fillColorOpacity;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getFillColorOpacity",
    value: function getFillColorOpacity() {
      return this.fillColorOpacity;
    }
    /**
     * @param {number} opacity
     */

  }, {
    key: "setOpacity",
    value: function setOpacity(opacity) {
      this.opacity = opacity;
    }
    /**
     * @return {number|string}
     */

  }, {
    key: "getOpacity",
    value: function getOpacity() {
      return this.opacity;
    }
    /**
     * @param {number} borderSize
     */

  }, {
    key: "setBorderSize",
    value: function setBorderSize(borderSize) {
      this.borderSize = borderSize;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getBorderSize",
    value: function getBorderSize() {
      return this.borderSize;
    }
    /**
     * @param {string} color
     */

  }, {
    key: "setShadowColor",
    value: function setShadowColor(color) {
      this.shadowColor = color;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getShadowColor",
    value: function getShadowColor() {
      return this.shadowColor;
    }
    /**
     * @param {Vector} position
     */

  }, {
    key: "setShadowPosition",
    value: function setShadowPosition(position) {
      this.shadowPosition = position;
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getShadowPosition",
    value: function getShadowPosition() {
      return this.shadowPosition;
    }
    /**
     * @param {number} shadowBlur
     */

  }, {
    key: "setShadowBlur",
    value: function setShadowBlur(shadowBlur) {
      this.shadowBlur = shadowBlur;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getShadowBlur",
    value: function getShadowBlur() {
      return this.shadowBlur;
    }
    /**
     * @param {number} assetId
     */

  }, {
    key: "setGradientColorAssetId",
    value: function setGradientColorAssetId(assetId) {
      this.gradientColorAssetId = assetId;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getGradientColorAssetId",
    value: function getGradientColorAssetId() {
      return this.gradientColorAssetId;
    }
  }]);
  return Style;
}();

exports["default"] = Style;

},{"../utils/Vector.js":87,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],44:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GAME_INPUTS = exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _GameInputData2 = _interopRequireDefault(require("../../project/data/GameInputData.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GameInput = /*#__PURE__*/function (_GameInputData) {
  (0, _inherits2["default"])(GameInput, _GameInputData);

  var _super = _createSuper(GameInput);

  function GameInput() {
    var _this;

    (0, _classCallCheck2["default"])(this, GameInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selected", void 0);
    return _this;
  }

  (0, _createClass2["default"])(GameInput, [{
    key: "isSelected",

    /**
     * @return {boolean}
     */
    value: function isSelected() {
      return this.selected;
    }
    /**
     * @param {boolean} selected
     */

  }, {
    key: "setSelected",
    value: function setSelected(selected) {
      this.selected = selected;
    }
  }, {
    key: "unselect",
    value: function unselect() {
      this.setSelected(false);
    }
  }, {
    key: "select",
    value: function select() {
      this.setSelected(true);
    }
  }]);
  return GameInput;
}(_GameInputData2["default"]);

exports["default"] = GameInput;
var GAME_INPUTS = {
  RIGHT: 'right',
  LEFT: 'left',
  UP: 'up',
  DOWN: 'down',
  JUMP: 'jump',
  ATTACK: 'attack'
};
exports.GAME_INPUTS = GAME_INPUTS;

},{"../../project/data/GameInputData.js":59,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],45:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _LayerGroupData2 = _interopRequireDefault(require("../../project/data/LayerGroupData.js"));

var _Layout = _interopRequireDefault(require("../../layout/Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var LayerGroup = /*#__PURE__*/function (_LayerGroupData) {
  (0, _inherits2["default"])(LayerGroup, _LayerGroupData);

  var _super = _createSuper(LayerGroup);

  function LayerGroup() {
    var _this;

    (0, _classCallCheck2["default"])(this, LayerGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selected", void 0);
    return _this;
  }

  (0, _createClass2["default"])(LayerGroup, [{
    key: "isSelected",

    /**
     * @return {boolean}
     */
    value: function isSelected() {
      return this.selected;
    }
    /**
     * @param {boolean} selected
     */

  }, {
    key: "setSelected",
    value: function setSelected(selected) {
      this.selected = selected;
    }
  }, {
    key: "unselect",
    value: function unselect() {
      this.setSelected(false);
    }
  }, {
    key: "select",
    value: function select() {
      this.setSelected(true);
    }
    /**
     * @return {*[]}
     */

  }, {
    key: "generateFields",
    value: function generateFields() {
      return [{
        bind: 'name',
        label: 'Name',
        type: _Layout["default"].form.TEXT
      }, {
        bind: 'rank',
        label: 'Rank',
        type: _Layout["default"].form.NUMBER
      }];
    }
  }]);
  return LayerGroup;
}(_LayerGroupData2["default"]);

exports["default"] = LayerGroup;

},{"../../layout/Layout.js":36,"../../project/data/LayerGroupData.js":61,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],46:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _MaskGroupData2 = _interopRequireDefault(require("../../project/data/MaskGroupData.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MaskGroup = /*#__PURE__*/function (_MaskGroupData) {
  (0, _inherits2["default"])(MaskGroup, _MaskGroupData);

  var _super = _createSuper(MaskGroup);

  function MaskGroup() {
    var _this;

    (0, _classCallCheck2["default"])(this, MaskGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selected", void 0);
    return _this;
  }

  (0, _createClass2["default"])(MaskGroup, [{
    key: "isSelected",

    /**
     * @return {boolean}
     */
    value: function isSelected() {
      return this.selected;
    }
    /**
     * @param {boolean} selected
     */

  }, {
    key: "setSelected",
    value: function setSelected(selected) {
      this.selected = selected;
    }
  }, {
    key: "unselect",
    value: function unselect() {
      this.setSelected(false);
    }
  }, {
    key: "select",
    value: function select() {
      this.setSelected(true);
    }
  }]);
  return MaskGroup;
}(_MaskGroupData2["default"]);

exports["default"] = MaskGroup;

},{"../../project/data/MaskGroupData.js":63,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],47:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _TagData2 = _interopRequireDefault(require("../../project/data/TagData.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Tag = /*#__PURE__*/function (_TagData) {
  (0, _inherits2["default"])(Tag, _TagData);

  var _super = _createSuper(Tag);

  function Tag() {
    var _this;

    (0, _classCallCheck2["default"])(this, Tag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selected", void 0);
    return _this;
  }

  (0, _createClass2["default"])(Tag, [{
    key: "isSelected",

    /**
     * @return {boolean}
     */
    value: function isSelected() {
      return this.selected;
    }
    /**
     * @param {boolean} selected
     */

  }, {
    key: "setSelected",
    value: function setSelected(selected) {
      this.selected = selected;
    }
  }, {
    key: "unselect",
    value: function unselect() {
      this.setSelected(false);
    }
  }, {
    key: "select",
    value: function select() {
      this.setSelected(true);
    }
  }]);
  return Tag;
}(_TagData2["default"]);

exports["default"] = Tag;

},{"../../project/data/TagData.js":73,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],48:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

var _Maths = _interopRequireDefault(require("../../utils/Maths.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ANodeData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(ANodeData, _Data);

  var _super = _createSuper(ANodeData);

  /**
   * @type {number}
   */

  /**
   * @type {string}
   */

  /**
   * @type {NodeInput[]}
   */

  /**
   * @type {Vector}
   */
  function ANodeData() {
    var _this;

    (0, _classCallCheck2["default"])(this, ANodeData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sourceName", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputs", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "position", void 0);
    _this.id = _Maths["default"].generateId();
    _this.inputs = [];
    return _this;
  }
  /**
   * @param {number} id
   */


  (0, _createClass2["default"])(ANodeData, [{
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @param {Vector} position
     */

  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this.position = position;
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getSourceName",
    value: function getSourceName() {
      return this.sourceName;
    }
    /**
     * @param {string} sourceName
     */

  }, {
    key: "setSourceName",
    value: function setSourceName(sourceName) {
      this.sourceName = sourceName;
    }
    /**
     * @return {NodeInput[]}
     */

  }, {
    key: "getInputs",
    value: function getInputs() {
      return this.inputs;
    }
    /**
     * @param {NodeInput[]} inputs
     */

  }, {
    key: "setInputs",
    value: function setInputs(inputs) {
      this.inputs = inputs;
    }
    /**
     * @param {NodeInput[]} inputs
     */

  }, {
    key: "concatInputs",
    value: function concatInputs(inputs) {
      this.setInputs(inputs);
    }
  }]);
  return ANodeData;
}(_Data2["default"]);

exports["default"] = ANodeData;

},{"../../utils/Maths.js":83,"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],49:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STATUS = exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

var _Maths = _interopRequireDefault(require("../../utils/Maths.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AScriptData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(AScriptData, _Data);

  var _super = _createSuper(AScriptData);

  /**
   * @type {number}
   */

  /**
   * @type {string}
   */

  /**
   * @param {AScriptFunctionData[]}
   */

  /**
   * @param {VariableScript[]}
   */

  /**
   * @type {string}
   */

  /**
   * @type {string}
   */

  /**
   * @type {number}
   */

  /**
   * @param {string} name
   */
  function AScriptData() {
    var _this;

    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    (0, _classCallCheck2["default"])(this, AScriptData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "functions", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "variables", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "status", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "parentName", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "assetId", void 0);
    _this.id = _Maths["default"].generateId();
    _this.name = name;
    _this.status = STATUS.NEW;
    _this.functions = [];
    _this.variables = [];
    _this.parentName = '';
    return _this;
  }
  /**
   * @param {number} id
   */


  (0, _createClass2["default"])(AScriptData, [{
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @param {number} assetId
     */

  }, {
    key: "setAssetId",
    value: function setAssetId(assetId) {
      this.assetId = assetId;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getAssetId",
    value: function getAssetId() {
      return this.assetId;
    }
    /**
     * @param {string} parentName
     */

  }, {
    key: "setParentName",
    value: function setParentName(parentName) {
      this.parentName = parentName;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getParentName",
    value: function getParentName() {
      return this.parentName;
    }
    /**
     * @param {string} name
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * @return {AScriptFunction[]}
     */

  }, {
    key: "getFunctions",
    value: function getFunctions() {
      return this.functions;
    }
    /**
     * @param {AScriptFunction[]} functions
     */

  }, {
    key: "setFunctions",
    value: function setFunctions(functions) {
      this.functions = functions;
    }
    /**
     * @return {VariableScript[]}
     */

  }, {
    key: "getVariables",
    value: function getVariables() {
      return this.variables;
    }
    /**
     * @param {VariableScript[]} variables
     */

  }, {
    key: "setVariables",
    value: function setVariables(variables) {
      this.variables = variables;
    }
    /**
     * @param {AScriptFunction[]} functions
     */

  }, {
    key: "concatFunctions",
    value: function concatFunctions(functions) {
      this.setFunctions(functions);
    }
    /**
     * @param {DynamicAttribute[]} variables
     */

  }, {
    key: "concatVariables",
    value: function concatVariables(variables) {
      this.setVariables(variables);
    }
    /**
     * @param {string} status
     */

  }, {
    key: "setStatus",
    value: function setStatus(status) {
      this.status = status;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getStatus",
    value: function getStatus() {
      return this.status;
    }
  }]);
  return AScriptData;
}(_Data2["default"]);

exports["default"] = AScriptData;
var STATUS = {
  NEW: '',
  COMPILED: 'compiled',
  ERROR: 'error'
};
exports.STATUS = STATUS;

},{"../../utils/Maths.js":83,"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],50:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @abstract
 * @extends {Data}
 */
var AssetData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(AssetData, _Data);

  var _super = _createSuper(AssetData);

  function AssetData() {
    var _this;

    (0, _classCallCheck2["default"])(this, AssetData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "type", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "folderId", void 0);
    return _this;
  }

  (0, _createClass2["default"])(AssetData, [{
    key: "setId",

    /**
     * @param {number} id
     */
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @param {string} name
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * @param {AssetType} type
     */

  }, {
    key: "setType",
    value: function setType(type) {
      this.type = type;
    }
    /**
     * @return {AssetType}
     */

  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }
    /**
     * @param {number|string} folderId
     */

  }, {
    key: "setFolderId",
    value: function setFolderId(folderId) {
      this.folderId = parseInt(folderId);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getFolderId",
    value: function getFolderId() {
      return this.folderId;
    }
  }]);
  return AssetData;
}(_Data2["default"]);

var _default = AssetData;
exports["default"] = _default;

},{"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],51:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AssetTypeData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(AssetTypeData, _Data);

  var _super = _createSuper(AssetTypeData);

  function AssetTypeData() {
    var _this;

    (0, _classCallCheck2["default"])(this, AssetTypeData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "dataUrl", void 0);
    return _this;
  }

  (0, _createClass2["default"])(AssetTypeData, [{
    key: "setDataUrl",

    /**
     * @param {string} dataUrl
     */
    value: function () {
      var _setDataUrl = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(dataUrl) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.dataUrl = dataUrl;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setDataUrl(_x) {
        return _setDataUrl.apply(this, arguments);
      }

      return setDataUrl;
    }()
    /**
     * @return {string}
     */

  }, {
    key: "getDataUrl",
    value: function () {
      var _getDataUrl = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.dataUrl);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getDataUrl() {
        return _getDataUrl.apply(this, arguments);
      }

      return getDataUrl;
    }()
  }]);
  return AssetTypeData;
}(_Data2["default"]);

exports["default"] = AssetTypeData;

},{"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18,"@babel/runtime/regenerator":26}],52:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {AssetsManagerData}
 * @extends {Data}
 */
var AssetsManagerData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(AssetsManagerData, _Data);

  var _super = _createSuper(AssetsManagerData);

  function AssetsManagerData() {
    var _this;

    (0, _classCallCheck2["default"])(this, AssetsManagerData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "assets", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "folders", void 0);
    _this.assets = [];
    _this.folders = [];
    return _this;
  }
  /**
   * @return {Asset[]}
   */


  (0, _createClass2["default"])(AssetsManagerData, [{
    key: "getAssets",
    value: function getAssets() {
      return this.assets;
    }
    /**
     * @param {Asset[]} assets
     */

  }, {
    key: "setAssets",
    value: function setAssets(assets) {
      this.assets = assets;
    }
    /**
     * @return {Folder[]}
     */

  }, {
    key: "getFolders",
    value: function getFolders() {
      return this.folders;
    }
    /**
     * @param {Folder[]} folders
     */

  }, {
    key: "setFolders",
    value: function setFolders(folders) {
      this.folders = folders;
    }
    /**
     * @param {Asset[]} assets
     */

  }, {
    key: "concatAssets",
    value: function concatAssets(assets) {
      this.setAssets(assets);
    }
    /**
     * @param {Folder[]} folders
     */

  }, {
    key: "concatFolders",
    value: function concatFolders(folders) {
      this.concat(this.folders, folders, function (tItem, sItem) {
        return tItem.getName() === sItem.getName();
      });
    }
  }]);
  return AssetsManagerData;
}(_Data2["default"]);

exports["default"] = AssetsManagerData;

},{"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],53:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var BlobData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(BlobData, _Data);

  var _super = _createSuper(BlobData);

  function BlobData() {
    var _this;

    (0, _classCallCheck2["default"])(this, BlobData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "size", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "position", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "dataUrl", void 0);
    return _this;
  }

  (0, _createClass2["default"])(BlobData, [{
    key: "setSize",

    /**
     * @param {Size} size
     */
    value: function setSize(size) {
      this.size = size;
    }
    /**
     * @return {Size}
     */

  }, {
    key: "getSize",
    value: function getSize() {
      return this.size;
    }
    /**
     * @param {Vector} position
     */

  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this.position = position;
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
    /**
     * @param {string} dataUrl
     */

  }, {
    key: "setDataUrl",
    value: function () {
      var _setDataUrl = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(dataUrl) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.dataUrl = dataUrl;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setDataUrl(_x) {
        return _setDataUrl.apply(this, arguments);
      }

      return setDataUrl;
    }()
    /**
     * @return {string}
     */

  }, {
    key: "getDataUrl",
    value: function getDataUrl() {
      return this.dataUrl;
    }
  }]);
  return BlobData;
}(_Data2["default"]);

var _default = BlobData;
exports["default"] = _default;

},{"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18,"@babel/runtime/regenerator":26}],54:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {CameraData}
 * @extends {Data}
 */
var CameraData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(CameraData, _Data);

  var _super = _createSuper(CameraData);

  function CameraData() {
    var _this;

    (0, _classCallCheck2["default"])(this, CameraData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "position", void 0);
    return _this;
  }

  (0, _createClass2["default"])(CameraData, [{
    key: "setPosition",

    /**
     * @param {Vector} position
     */
    value: function setPosition(position) {
      this.position = position;
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
    /**
     * @param {string|number} x
     */

  }, {
    key: "setPositionX",
    value: function setPositionX(x) {
      this.position.x = parseFloat(x);
    }
    /**
     * @param {string|number} y
     */

  }, {
    key: "setPositionY",
    value: function setPositionY(y) {
      this.position.y = parseFloat(y);
    }
    /**
     * @param {string|number} z
     */

  }, {
    key: "setPositionZ",
    value: function setPositionZ(z) {
      this.position.z = parseFloat(z);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getPositionX",
    value: function getPositionX() {
      return this.position.x;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getPositionY",
    value: function getPositionY() {
      return this.position.y;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getPositionZ",
    value: function getPositionZ() {
      return this.position.z;
    }
  }]);
  return CameraData;
}(_Data2["default"]);

var _default = CameraData;
exports["default"] = _default;

},{"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],55:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

var _Maths = _interopRequireDefault(require("../../utils/Maths.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ComponentData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(ComponentData, _Data);

  var _super = _createSuper(ComponentData);

  /**
   * @type {DynamicAttribute[]}
   */

  /**
   * @type {boolean}
   */
  function ComponentData(name) {
    var _this;

    (0, _classCallCheck2["default"])(this, ComponentData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "attributes", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "hidden", void 0);
    _this.id = _Maths["default"].generateId();
    _this.name = name || 'Custom Component';
    _this.attributes = [];
    _this.hidden = false;
    return _this;
  }
  /**
   * @param {number} id
   */


  (0, _createClass2["default"])(ComponentData, [{
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @param {string} name
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * @param {boolean} hidden
     */

  }, {
    key: "setHidden",
    value: function setHidden(hidden) {
      this.hidden = hidden;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isUnique",
    value: function isUnique() {
      return true;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getHidden",
    value: function getHidden() {
      return this.hidden;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isHidden",
    value: function isHidden() {
      return this.getHidden();
    }
    /**
     * @protected
     * @param {DynamicAttribute[]} attributes
     */

  }, {
    key: "setAttributes",
    value: function setAttributes(attributes) {
      this.attributes = attributes;
    }
    /**
     * @return {DynamicAttribute[]}
     */

  }, {
    key: "getAttributes",
    value: function getAttributes() {
      return this.attributes;
    }
    /**
     * @param {DynamicAttribute[]} attributes
     */

  }, {
    key: "concatAttributes",
    value: function concatAttributes(attributes) {
      this.concat(this.attributes, attributes, function (tItem, sItem) {
        return tItem.getAttrName() === sItem.getAttrName();
      }, function (attribute) {
        return ['attrRule', 'attrType'].includes(attribute);
      });
    }
  }]);
  return ComponentData;
}(_Data2["default"]);

exports["default"] = ComponentData;

},{"../../utils/Maths.js":83,"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],56:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/**
 * @class {Data}
 */
var Data = /*#__PURE__*/function () {
  function Data() {
    (0, _classCallCheck2["default"])(this, Data);
    (0, _defineProperty2["default"])(this, "dataId", void 0);
  }

  (0, _createClass2["default"])(Data, [{
    key: "setDataId",

    /**
     * Generated when serializing object
     * @param {number|null} id
     */
    value: function setDataId(id) {
      this.dataId = id;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getDataId",
    value: function getDataId() {
      return this.dataId;
    }
    /**
     * Exportable data will be added to the exported object (ex: world)
     * @return {boolean}
     */

  }, {
    key: "isExportable",
    value: function isExportable() {
      return true;
    }
    /**
     * @param {Object[]} target
     * @param {Object[]} source
     * @param {Function} criteria
     * @param {Function} exclude
     */

  }, {
    key: "concat",
    value: function concat(target, source, criteria) {
      var exclude = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      if (target && source) {
        source.forEach(function (sItem) {
          var existIndex = target.findIndex(function (tItem) {
            return criteria(tItem, sItem);
          });

          if (existIndex >= 0) {
            if (exclude) {
              var currentTarget = target[existIndex];

              for (var attribute in currentTarget) {
                if (!exclude(attribute)) {
                  currentTarget[attribute] = _.cloneDeep(sItem[attribute]);
                }
              }
            } else {
              target[existIndex] = _.cloneDeep(sItem);
            }
          } else {
            target.push(_.cloneDeep(sItem));
          }
        });
      }
    }
  }]);
  return Data;
}();

(0, _defineProperty2["default"])(Data, "instance", void 0);
var _default = Data;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],57:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @abstract
 * @extends {Data}
 */
var FolderData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(FolderData, _Data);

  var _super = _createSuper(FolderData);

  function FolderData() {
    var _this;

    (0, _classCallCheck2["default"])(this, FolderData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "folderId", void 0);
    return _this;
  }

  (0, _createClass2["default"])(FolderData, [{
    key: "setId",

    /**
     * @param {number} id
     */
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @return {number|null}
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @param {string} name
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * @param {number} folderId
     */

  }, {
    key: "setFolderId",
    value: function setFolderId(folderId) {
      this.folderId = folderId;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getFolderId",
    value: function getFolderId() {
      return this.folderId;
    }
  }]);
  return FolderData;
}(_Data2["default"]);

exports["default"] = FolderData;

},{"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],58:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

var _Maths = _interopRequireDefault(require("../../utils/Maths.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FunctionData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(FunctionData, _Data);

  var _super = _createSuper(FunctionData);

  /**
   * @type {number}
   */

  /**
   * @type {string}
   */

  /**
   * @type {DynamicAttribute[]}
   */

  /**
   * @type {DynamicAttribute}
   */

  /**
   * @type {StackOperation[]}
   */

  /**
   * @type {number}
   */

  /**
   * @type {string}
   */

  /**
   * @type {string}
   */

  /**
   * @type {string[]}
   */

  /**
   * @type {string}
   */

  /**
   * @param {string} name
   */
  function FunctionData(name) {
    var _this;

    (0, _classCallCheck2["default"])(this, FunctionData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputs", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "output", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "stack", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "access", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "className", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "parentClassName", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "childClassNames", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scopeFunctionName", void 0);
    _this.id = _Maths["default"].generateId();
    _this.name = name;
    _this.inputs = [];
    _this.stack = [];
    _this.childClassNames = [];
    _this.output = null;
    _this.access = 0;
    return _this;
  }
  /**
   * @param {number} id
   */


  (0, _createClass2["default"])(FunctionData, [{
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @param {number} access
     */

  }, {
    key: "setAccess",
    value: function setAccess(access) {
      this.access = access;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getAccess",
    value: function getAccess() {
      return this.access;
    }
    /**
     * @param {string} name
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * @param {string} className
     */

  }, {
    key: "setClassName",
    value: function setClassName(className) {
      this.className = className;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getClassName",
    value: function getClassName() {
      return this.className;
    }
    /**
     * @param {string} parentClassName
     */

  }, {
    key: "setParentClassName",
    value: function setParentClassName(parentClassName) {
      this.parentClassName = parentClassName;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getParentClassName",
    value: function getParentClassName() {
      return this.parentClassName;
    }
    /**
     * @param {string[]} childClassNames
     */

  }, {
    key: "setChildClassNames",
    value: function setChildClassNames(childClassNames) {
      this.childClassNames = childClassNames;
    }
    /**
     * @return {string[]}
     */

  }, {
    key: "getChildClassNames",
    value: function getChildClassNames() {
      return this.childClassNames;
    }
    /**
     * @param {string} scopeFunctionName
     */

  }, {
    key: "setScopeFunctionName",
    value: function setScopeFunctionName(scopeFunctionName) {
      this.scopeFunctionName = scopeFunctionName;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getScopeFunctionName",
    value: function getScopeFunctionName() {
      return this.scopeFunctionName;
    }
    /**
     * @return {DynamicAttribute[]}
     */

  }, {
    key: "getInputs",
    value: function getInputs() {
      return this.inputs;
    }
    /**
     * @param {DynamicAttribute[]} inputs
     */

  }, {
    key: "setInputs",
    value: function setInputs(inputs) {
      this.inputs = inputs;
    }
    /**
     * @return {StackOperation[]}
     */

  }, {
    key: "getStack",
    value: function getStack() {
      return this.stack;
    }
    /**
     * @param {StackOperation[]} stack
     */

  }, {
    key: "setStack",
    value: function setStack(stack) {
      this.stack = stack;
    }
    /**
     * @return {DynamicAttribute}
     */

  }, {
    key: "getOutput",
    value: function getOutput() {
      return this.output;
    }
    /**
     * @param {DynamicAttribute} output
     */

  }, {
    key: "setOutput",
    value: function setOutput(output) {
      this.output = output;
    }
    /**
     * @param {DynamicAttribute[]} inputs
     */

  }, {
    key: "concatInputs",
    value: function concatInputs(inputs) {
      this.setInputs(inputs);
    }
    /**
     * @param {StackOperation[]} stack
     */

  }, {
    key: "concatStack",
    value: function concatStack(stack) {
      this.setStack(stack);
    }
    /**
     * @param {string[]} childClassNames
     */

  }, {
    key: "concatChildClassNames",
    value: function concatChildClassNames(childClassNames) {
      this.setChildClassNames(childClassNames);
    }
  }]);
  return FunctionData;
}(_Data2["default"]);

exports["default"] = FunctionData;

},{"../../utils/Maths.js":83,"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],59:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

var _Maths = _interopRequireDefault(require("../../utils/Maths.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GameInputData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(GameInputData, _Data);

  var _super = _createSuper(GameInputData);

  /**
   * @type {number}
   */

  /**
   * @type {string}
   */

  /**
   * @type {string}
   */

  /**
   * @type {DynamicAttribute}
   */

  /**
   * @param {string} name
   * @param {string} key
   * @param {DynamicAttribute} value
   */
  function GameInputData(name, key, value) {
    var _this;

    (0, _classCallCheck2["default"])(this, GameInputData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "key", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value", void 0);
    _this.id = _Maths["default"].generateId();
    _this.name = name;
    _this.key = key;
    _this.value = value;
    return _this;
  }
  /**
   * @param {number} id
   */


  (0, _createClass2["default"])(GameInputData, [{
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @param {string} name
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @param {string} key
     */

  }, {
    key: "setKey",
    value: function setKey(key) {
      this.key = key;
    }
    /**
     * @param {DynamicAttribute} value
     */

  }, {
    key: "setValue",
    value: function setValue(value) {
      this.value = value;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getKey",
    value: function getKey() {
      return this.key;
    }
    /**
     * @return {DynamicAttribute}
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }]);
  return GameInputData;
}(_Data2["default"]);

exports["default"] = GameInputData;

},{"../../utils/Maths.js":83,"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],60:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

var _ClientError = _interopRequireDefault(require("../../exception/type/ClientError.js"));

var _GameInput = _interopRequireDefault(require("../../preference/gameInput/GameInput.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GameInputPreferenceData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(GameInputPreferenceData, _Data);

  var _super = _createSuper(GameInputPreferenceData);

  /**
   * @type {GameInput[]}
   */
  function GameInputPreferenceData() {
    var _this;

    (0, _classCallCheck2["default"])(this, GameInputPreferenceData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputs", void 0);
    _this.inputs = [];
    return _this;
  }
  /**
   * @param {string} name
   * @param {string} key
   * @param {DynamicAttribute} value
   * @return {GameInput}
   */


  (0, _createClass2["default"])(GameInputPreferenceData, [{
    key: "addInput",
    value: function addInput(name, key, value) {
      if (this.findByName(name)) {
        throw new _ClientError["default"]("Game Input \"".concat(name, "\" already created"));
      }

      return this.add(name, key, value);
    }
    /**
     * @param {string} name
     * @param {string} key
     * @param {DynamicAttribute} value
     * @return {GameInput}
     */

  }, {
    key: "tryAddInput",
    value: function tryAddInput(name, key, value) {
      if (!this.findByName(name)) {
        return this.add(name, key, value);
      }
    }
    /**
     * @private
     * @param {string} name
     * @param {string} key
     * @param {DynamicAttribute} value
     * @return {GameInput}
     */

  }, {
    key: "add",
    value: function add(name, key, value) {
      var gameInput = new _GameInput["default"](name, key, value);
      this.inputs.push(gameInput);
      return gameInput;
    }
    /**
     * @param {number} id
     * @return {GameInput}
     */

  }, {
    key: "find",
    value: function find(id) {
      return this.inputs.find(function (input) {
        return input.getId() === id;
      });
    }
    /**
     * @param {string} name
     * @return {GameInput}
     */

  }, {
    key: "findByName",
    value: function findByName(name) {
      return this.inputs.find(function (input) {
        return input.getName() === name;
      });
    }
    /**
     * @param {GameInput} gameInput
     */

  }, {
    key: "delete",
    value: function _delete(gameInput) {
      var index = this.getInputs().findIndex(function (element) {
        return element === gameInput;
      });

      if (index >= 0) {
        return this.getInputs().splice(index, 1);
      } else {
        throw new _ClientError["default"]("Game Input \"".concat(gameInput.getName(), "\" not found!"));
      }
    }
    /**
     * @param {GameInput[]} inputs
     */

  }, {
    key: "setInputs",
    value: function setInputs(inputs) {
      this.inputs = inputs;
    }
    /**
     * @return {GameInput[]}
     */

  }, {
    key: "getInputs",
    value: function getInputs() {
      return this.inputs;
    }
    /**
     * @param {GameInput[]} inputs
     */

  }, {
    key: "concatInputs",
    value: function concatInputs(inputs) {
      this.concat(this.inputs, inputs, function (tItem, sItem) {
        return tItem.getName() === sItem.getName();
      });
    }
  }]);
  return GameInputPreferenceData;
}(_Data2["default"]);

exports["default"] = GameInputPreferenceData;

},{"../../exception/type/ClientError.js":34,"../../preference/gameInput/GameInput.js":44,"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],61:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Maths = _interopRequireDefault(require("../../utils/Maths.js"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var LayerGroupData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(LayerGroupData, _Data);

  var _super = _createSuper(LayerGroupData);

  /**
   * @type {number}
   */

  /**
   * @type {string}
   */

  /**
   * @type {number}
   */

  /**
   * @param {string} name
   * @param {number} rank
   */
  function LayerGroupData(name, rank) {
    var _this;

    (0, _classCallCheck2["default"])(this, LayerGroupData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rank", void 0);
    _this.id = _Maths["default"].generateId();
    _this.name = name;
    _this.rank = rank;
    return _this;
  }
  /**
   * @return {number}
   */


  (0, _createClass2["default"])(LayerGroupData, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @param {number} id
     */

  }, {
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @param {string} name
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getRank",
    value: function getRank() {
      return this.rank;
    }
    /**
     * @param {number} rank
     */

  }, {
    key: "setRank",
    value: function setRank(rank) {
      this.rank = rank;
    }
  }]);
  return LayerGroupData;
}(_Data2["default"]);

exports["default"] = LayerGroupData;

},{"../../utils/Maths.js":83,"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],62:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

var _ClientError = _interopRequireDefault(require("../../exception/type/ClientError.js"));

var _LayerGroup = _interopRequireDefault(require("../../preference/layerGroup/LayerGroup.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var LayerGroupPreferenceData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(LayerGroupPreferenceData, _Data);

  var _super = _createSuper(LayerGroupPreferenceData);

  /**
   * @type {LayerGroup[]}
   */
  function LayerGroupPreferenceData() {
    var _this;

    (0, _classCallCheck2["default"])(this, LayerGroupPreferenceData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layers", void 0);
    _this.layers = [];
    return _this;
  }
  /**
   * @param {LayerGroup[]} layers
   */


  (0, _createClass2["default"])(LayerGroupPreferenceData, [{
    key: "setLayers",
    value: function setLayers(layers) {
      this.layers = layers;
    }
    /**
     * @param {string} name
     * @param {number} rank
     * @return {LayerGroup}
     */

  }, {
    key: "addLayer",
    value: function addLayer(name, rank) {
      if (this.findByName(name)) {
        throw new _ClientError["default"]("Layer Group \"".concat(name, "\" already created"));
      }

      return this.add(name, rank);
    }
    /**
     * @param {string} name
     * @return {LayerGroup}
     */

  }, {
    key: "tryAddLayer",
    value: function tryAddLayer(name) {
      if (!this.findByName(name)) {
        return this.add(name);
      }
    }
    /**
     * @private
     * @param {string} name
     * @param {number} rank
     * @return {LayerGroup}
     */

  }, {
    key: "add",
    value: function add(name, rank) {
      var layerGroup = new _LayerGroup["default"](name, rank);
      this.layers.push(layerGroup);
      return layerGroup;
    }
    /**
     * @param {number} id
     * @return {LayerGroup}
     */

  }, {
    key: "find",
    value: function find(id) {
      return this.layers.find(function (layer) {
        return layer.getId() === id;
      });
    }
    /**
     * @param {string} name
     * @return {LayerGroup}
     */

  }, {
    key: "findByName",
    value: function findByName(name) {
      return this.layers.find(function (layer) {
        return layer.getName() === name;
      });
    }
    /**
     * @param {LayerGroup} layer
     */

  }, {
    key: "delete",
    value: function _delete(layer) {
      var index = this.getLayers().findIndex(function (element) {
        return element === layer;
      });

      if (index >= 0) {
        return this.getLayers().splice(index, 1);
      } else {
        throw new _ClientError["default"]("Layer Group \"".concat(layer.getName(), "\" not found!"));
      }
    }
    /**
     * @return {LayerGroup[]}
     */

  }, {
    key: "getLayers",
    value: function getLayers() {
      return this.layers;
    }
    /**
     * @param {LayerGroup[]} layers
     */

  }, {
    key: "concatLayers",
    value: function concatLayers(layers) {
      this.concat(this.layers, layers, function (tItem, sItem) {
        return tItem.getName() === sItem.getName();
      });
    }
  }]);
  return LayerGroupPreferenceData;
}(_Data2["default"]);

exports["default"] = LayerGroupPreferenceData;

},{"../../exception/type/ClientError.js":34,"../../preference/layerGroup/LayerGroup.js":45,"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],63:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Maths = _interopRequireDefault(require("../../utils/Maths.js"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MaskGroupData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(MaskGroupData, _Data);

  var _super = _createSuper(MaskGroupData);

  /**
   * @type {number}
   */

  /**
   * @type {string}
   */

  /**
   * @param {string} name
   */
  function MaskGroupData(name) {
    var _this;

    (0, _classCallCheck2["default"])(this, MaskGroupData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    _this.id = _Maths["default"].generateId();
    _this.name = name;
    return _this;
  }
  /**
   * @return {number}
   */


  (0, _createClass2["default"])(MaskGroupData, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @param {number} id
     */

  }, {
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @param {string} name
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }]);
  return MaskGroupData;
}(_Data2["default"]);

exports["default"] = MaskGroupData;

},{"../../utils/Maths.js":83,"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],64:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

var _MaskGroup = _interopRequireDefault(require("../../preference/maskgroup/MaskGroup.js"));

var _ClientError = _interopRequireDefault(require("../../exception/type/ClientError.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MaskGroupPreferenceData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(MaskGroupPreferenceData, _Data);

  var _super = _createSuper(MaskGroupPreferenceData);

  /**
   * @type {MaskGroup[]}
   */
  function MaskGroupPreferenceData() {
    var _this;

    (0, _classCallCheck2["default"])(this, MaskGroupPreferenceData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "masks", void 0);
    _this.masks = [];
    return _this;
  }
  /**
   * @param {MaskGroup[]} masks
   */


  (0, _createClass2["default"])(MaskGroupPreferenceData, [{
    key: "setMasks",
    value: function setMasks(masks) {
      this.masks = masks;
    }
    /**
     * @param {string} name
     * @return {MaskGroup}
     */

  }, {
    key: "addMask",
    value: function addMask(name) {
      if (this.findByName(name)) {
        throw new _ClientError["default"]("Mask Group \"".concat(name, "\" already created"));
      }

      return this.add(name);
    }
    /**
     * @param {string} name
     * @return {MaskGroup}
     */

  }, {
    key: "tryAddMask",
    value: function tryAddMask(name) {
      if (!this.findByName(name)) {
        return this.add(name);
      }
    }
    /**
     * @private
     * @param {string} name
     * @return {MaskGroup}
     */

  }, {
    key: "add",
    value: function add(name) {
      var maskGroup = new _MaskGroup["default"](name);
      this.masks.push(maskGroup);
      return maskGroup;
    }
    /**
     * @param {number} id
     * @return {MaskGroup}
     */

  }, {
    key: "find",
    value: function find(id) {
      return this.masks.find(function (mask) {
        return mask.getId() === id;
      });
    }
    /**
     * @param {string} name
     * @return {MaskGroup}
     */

  }, {
    key: "findByName",
    value: function findByName(name) {
      return this.masks.find(function (mask) {
        return mask.getName() === name;
      });
    }
    /**
     * @param {MaskGroup} mask
     */

  }, {
    key: "delete",
    value: function _delete(mask) {
      var index = this.getMasks().findIndex(function (element) {
        return element === mask;
      });

      if (index >= 0) {
        return this.getMasks().splice(index, 1);
      } else {
        throw new _ClientError["default"]("Mask Group \"".concat(mask.getName(), "\" not found!"));
      }
    }
    /**
     * @return {MaskGroup[]}
     */

  }, {
    key: "getMasks",
    value: function getMasks() {
      return this.masks;
    }
    /**
     * @param {MaskGroup[]} masks
     */

  }, {
    key: "concatMasks",
    value: function concatMasks(masks) {
      this.concat(this.masks, masks, function (tItem, sItem) {
        return tItem.getName() === sItem.getName();
      });
    }
  }]);
  return MaskGroupPreferenceData;
}(_Data2["default"]);

exports["default"] = MaskGroupPreferenceData;

},{"../../exception/type/ClientError.js":34,"../../preference/maskgroup/MaskGroup.js":46,"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],65:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MaterialData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(MaterialData, _Data);

  var _super = _createSuper(MaterialData);

  function MaterialData() {
    var _this;

    (0, _classCallCheck2["default"])(this, MaterialData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    return _this;
  }

  (0, _createClass2["default"])(MaterialData, [{
    key: "setId",

    /**
     * @param {number} id
     */
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * @param {string} name
     * @return {string}
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }]);
  return MaterialData;
}(_Data2["default"]);

exports["default"] = MaterialData;

},{"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],66:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {PhysicsData}
 * @extends {Data}
 */
var PhysicsData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(PhysicsData, _Data);

  var _super = _createSuper(PhysicsData);

  function PhysicsData() {
    var _this;

    (0, _classCallCheck2["default"])(this, PhysicsData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "physicsEngine", void 0);
    return _this;
  }

  (0, _createClass2["default"])(PhysicsData, [{
    key: "setPhysicsEngine",

    /**
     * @param {PhysicsEngine} physicsEngine
     */
    value: function setPhysicsEngine(physicsEngine) {
      this.physicsEngine = physicsEngine;
    }
    /**
     * @return {PhysicsEngine}
     */

  }, {
    key: "getPhysicsEngine",
    value: function getPhysicsEngine() {
      return this.physicsEngine;
    }
  }]);
  return PhysicsData;
}(_Data2["default"]);

exports["default"] = PhysicsData;

},{"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],67:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {PhysicsEngineData}
 * @extends {Data}
 */
var PhysicsEngineData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(PhysicsEngineData, _Data);

  var _super = _createSuper(PhysicsEngineData);

  function PhysicsEngineData() {
    (0, _classCallCheck2["default"])(this, PhysicsEngineData);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(PhysicsEngineData, [{
    key: "setPhysicsManager",

    /**
     * Set the physics manager that loaded the phyiscs engine
     * @param {PhysicsData} physicsManager
     */
    value: function setPhysicsManager(physicsManager) {
      this.physicsManager = physicsManager;
    }
    /**
     * Get the physics manager that loaded the phyiscs engine
     */

  }, {
    key: "getPhysicsManager",
    value: function getPhysicsManager() {
      return this.physicsManager;
    }
  }]);
  return PhysicsEngineData;
}(_Data2["default"]);

exports["default"] = PhysicsEngineData;

},{"./Data.js":56,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],68:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var PreferenceData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(PreferenceData, _Data);

  var _super = _createSuper(PreferenceData);

  function PreferenceData() {
    var _this;

    (0, _classCallCheck2["default"])(this, PreferenceData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "gameInput", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "maskGroup", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerGroup", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "tag", void 0);
    return _this;
  }

  (0, _createClass2["default"])(PreferenceData, [{
    key: "setGameInput",

    /**
     * @param {GameInputPreference} gameInput
     */
    value: function setGameInput(gameInput) {
      this.gameInput = gameInput;
    }
    /**
     * @return {GameInputPreference}
     */

  }, {
    key: "getGameInput",
    value: function getGameInput() {
      return this.gameInput;
    }
    /**
     * @param {MaskGroupPreference} maskGroup
     */

  }, {
    key: "setMaskGroup",
    value: function setMaskGroup(maskGroup) {
      this.maskGroup = maskGroup;
    }
    /**
     * @return {MaskGroupPreference}
     */

  }, {
    key: "getMaskGroup",
    value: function getMaskGroup() {
      return this.maskGroup;
    }
    /**
     * @param {LayerGroupPreference} layerGroup
     */

  }, {
    key: "setLayerGroup",
    value: function setLayerGroup(layerGroup) {
      this.layerGroup = layerGroup;
    }
    /**
     * @return {LayerGroupPreference}
     */

  }, {
    key: "getLayerGroup",
    value: function getLayerGroup() {
      return this.layerGroup;
    }
    /**
     * @param {TagPreference} tag
     */

  }, {
    key: "setTag",
    value: function setTag(tag) {
      this.tag = tag;
    }
    /**
     * @return {TagPreference}
     */

  }, {
    key: "getTag",
    value: function getTag() {
      return this.tag;
    }
  }]);
  return PreferenceData;
}(_Data2["default"]);

exports["default"] = PreferenceData;

},{"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],69:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RegistryData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(RegistryData, _Data);

  var _super = _createSuper(RegistryData);

  /**
   * @protected
   */

  /**
   * @protected
   * @type {*[]}
   */

  /**
   * @param {string} name
   */
  function RegistryData(name) {
    var _this;

    (0, _classCallCheck2["default"])(this, RegistryData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "registry", void 0);
    _this.name = name;
    _this.registry = [];
    return _this;
  }
  /**
   * @param {string} name
   */


  (0, _createClass2["default"])(RegistryData, [{
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * @param {*[]} registry
     */

  }, {
    key: "setRegistry",
    value: function setRegistry(registry) {
      this.registry = registry;
    }
    /**
     * @return {*[]}
     */

  }, {
    key: "getRegistry",
    value: function getRegistry() {
      return this.registry;
    }
    /**
     * @param {*[]} registry
     */

  }, {
    key: "concatRegistry",
    value: function concatRegistry(registry) {
      this.concat(this.registry, registry, function (tItem, sItem) {
        return tItem.getName() === sItem.getName();
      });
    }
  }]);
  return RegistryData;
}(_Data2["default"]);

exports["default"] = RegistryData;

},{"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],70:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

var _UnitManager = _interopRequireDefault(require("../../manager/UnitManager.js"));

var _Maths = _interopRequireDefault(require("../../utils/Maths.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SceneData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(SceneData, _Data);

  var _super = _createSuper(SceneData);

  /**
   * @type {number}
   */

  /**
   * @type {string}
   */

  /**
   * @type {number}
   */

  /**
   * @type {boolean}
   */

  /**
   * @type {boolean}
   */

  /**
   * @param {string} name
   */
  function SceneData(name) {
    var _this;

    (0, _classCallCheck2["default"])(this, SceneData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "index", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "active", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "included", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "unitManager", void 0);
    _this.id = _Maths["default"].generateId();
    _this.name = name;
    _this.active = false;
    _this.included = false;
    _this.unitManager = new _UnitManager["default"]();
    return _this;
  }
  /**
   * @param {number} id
   */


  (0, _createClass2["default"])(SceneData, [{
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @param {number} index
     */

  }, {
    key: "setIndex",
    value: function setIndex(index) {
      this.index = index;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getIndex",
    value: function getIndex() {
      return this.index;
    }
    /**
     * @param {string} name
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * @param {UnitManagerData} unitManager
     */

  }, {
    key: "setUnitManager",
    value: function setUnitManager(unitManager) {
      this.unitManager = unitManager;
    }
    /**
     * @return {UnitManager}
     */

  }, {
    key: "getUnitManager",
    value: function getUnitManager() {
      return this.unitManager;
    }
    /**
     * @param {boolean} active
     */

  }, {
    key: "setActive",
    value: function setActive(active) {
      this.active = active;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getActive",
    value: function getActive() {
      return this.active;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isActive",
    value: function isActive() {
      return this.getActive();
    }
    /**
     * @param {boolean} included
     */

  }, {
    key: "setIncluded",
    value: function setIncluded(included) {
      this.included = included;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getIncluded",
    value: function getIncluded() {
      return this.included;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isIncluded",
    value: function isIncluded() {
      return this.getIncluded();
    }
  }]);
  return SceneData;
}(_Data2["default"]);

exports["default"] = SceneData;

},{"../../manager/UnitManager.js":37,"../../utils/Maths.js":83,"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],71:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SceneManagerData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(SceneManagerData, _Data);

  var _super = _createSuper(SceneManagerData);

  function SceneManagerData() {
    var _this;

    (0, _classCallCheck2["default"])(this, SceneManagerData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scenes", void 0);
    return _this;
  }

  (0, _createClass2["default"])(SceneManagerData, [{
    key: "getScenes",

    /**
     * @return {Scene[]}
     */
    value: function getScenes() {
      return this.scenes;
    }
    /**
     * @param {Scene[]} scenes
     */

  }, {
    key: "setScenes",
    value: function setScenes(scenes) {
      this.scenes = scenes;
    }
  }, {
    key: "concatScenes",
    value: function concatScenes(scenes) {
      this.setScenes(scenes);
    }
  }]);
  return SceneManagerData;
}(_Data2["default"]);

exports["default"] = SceneManagerData;

},{"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],72:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @extends {Data}
 */
var ScriptManagerData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(ScriptManagerData, _Data);

  var _super = _createSuper(ScriptManagerData);

  /**
   * @type {AScript[]}
   */
  function ScriptManagerData() {
    var _this;

    (0, _classCallCheck2["default"])(this, ScriptManagerData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scripts", void 0);
    _this.scripts = [];
    return _this;
  }
  /**
   * @return {AScript[]}
   */


  (0, _createClass2["default"])(ScriptManagerData, [{
    key: "getScripts",
    value: function getScripts() {
      return this.scripts;
    }
    /**
     * @param {AScript[]} scripts
     */

  }, {
    key: "setScripts",
    value: function setScripts(scripts) {
      this.scripts = scripts;
    }
    /**
     * @param {AScript[]} scripts
     */

  }, {
    key: "concatScripts",
    value: function concatScripts(scripts) {
      this.setScripts(scripts);
    }
  }]);
  return ScriptManagerData;
}(_Data2["default"]);

exports["default"] = ScriptManagerData;

},{"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],73:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Maths = _interopRequireDefault(require("../../utils/Maths.js"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TagData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(TagData, _Data);

  var _super = _createSuper(TagData);

  /**
   * @type {number}
   */

  /**
   * @type {string}
   */

  /**
   * @param {string} name
   */
  function TagData(name) {
    var _this;

    (0, _classCallCheck2["default"])(this, TagData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    _this.id = _Maths["default"].generateId();
    _this.name = name;
    return _this;
  }
  /**
   * @return {number}
   */


  (0, _createClass2["default"])(TagData, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @param {number} id
     */

  }, {
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @param {string} name
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }]);
  return TagData;
}(_Data2["default"]);

exports["default"] = TagData;

},{"../../utils/Maths.js":83,"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],74:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

var _ClientError = _interopRequireDefault(require("../../exception/type/ClientError.js"));

var _Tag = _interopRequireDefault(require("../../preference/tag/Tag.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TagPreferenceData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(TagPreferenceData, _Data);

  var _super = _createSuper(TagPreferenceData);

  /**
   * @type {Tag[]}
   */
  function TagPreferenceData() {
    var _this;

    (0, _classCallCheck2["default"])(this, TagPreferenceData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "tags", void 0);
    _this.tags = [];
    return _this;
  }
  /**
   * @param {Tag[]} tags
   */


  (0, _createClass2["default"])(TagPreferenceData, [{
    key: "setTags",
    value: function setTags(tags) {
      this.tags = tags;
    }
    /**
     * @param {string} name
     * @return {Tag}
     */

  }, {
    key: "addTag",
    value: function addTag(name) {
      if (this.findByName(name)) {
        throw new _ClientError["default"]("Tag \"".concat(name, "\" already created"));
      }

      return this.add(name);
    }
    /**
     * @param {string} name
     * @return {Tag}
     */

  }, {
    key: "tryAddTag",
    value: function tryAddTag(name) {
      if (!this.findByName(name)) {
        return this.add(name);
      }
    }
    /**
     * @private
     * @param {string} name
     * @return {Tag}
     */

  }, {
    key: "add",
    value: function add(name) {
      var tag = new _Tag["default"](name);
      this.tags.push(tag);
      return tag;
    }
    /**
     * @param {number} id
     * @return {Tag}
     */

  }, {
    key: "find",
    value: function find(id) {
      return this.tags.find(function (tag) {
        return tag.getId() === id;
      });
    }
    /**
     * @param {string} name
     * @return {Tag}
     */

  }, {
    key: "findByName",
    value: function findByName(name) {
      return this.tags.find(function (tag) {
        return tag.getName() === name;
      });
    }
    /**
     * @param {Tag} tag
     */

  }, {
    key: "delete",
    value: function _delete(tag) {
      var index = this.getTags().findIndex(function (element) {
        return element === tag;
      });

      if (index >= 0) {
        return this.getTags().splice(index, 1);
      } else {
        throw new _ClientError["default"]("Tag \"".concat(tag.getName(), "\" not found!"));
      }
    }
    /**
     * @return {Tag[]}
     */

  }, {
    key: "getTags",
    value: function getTags() {
      return this.tags;
    }
    /**
     * @param {Tag[]} tags
     */

  }, {
    key: "concatTags",
    value: function concatTags(tags) {
      this.concat(this.tags, tags, function (tItem, sItem) {
        return tItem.getName() === sItem.getName();
      });
    }
  }]);
  return TagPreferenceData;
}(_Data2["default"]);

exports["default"] = TagPreferenceData;

},{"../../exception/type/ClientError.js":34,"../../preference/tag/Tag.js":47,"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],75:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _ComponentData = _interopRequireDefault(require("./ComponentData.js"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

var _Maths = _interopRequireDefault(require("../../utils/Maths.js"));

var _ClientError = _interopRequireDefault(require("../../exception/type/ClientError.js"));

var _CommonUtil = _interopRequireDefault(require("../../utils/CommonUtil.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UnitData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(UnitData, _Data);

  var _super = _createSuper(UnitData);

  /**
   * @type {number}
   */

  /**
   * @type {string}
   */

  /**
   * @type {number}
   */

  /**
   * @type {number}
   */

  /**
   * @type {number}
   */

  /**
   * @type {number|null}
   */

  /**
   * @type {ComponentData[]}
   */

  /**
   * @type {boolean}
   */

  /**
   * @type {number}
   */

  /**
   * @type {boolean}
   */
  function UnitData(name) {
    var _this;

    (0, _classCallCheck2["default"])(this, UnitData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "maskGroupId", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerId", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "tagId", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "unitParentId", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "components", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "enabled", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "assetId", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "dontDestroy", void 0);
    _this.id = _Maths["default"].generateId();
    _this.name = name || 'Custom Component';
    _this.components = [];
    _this.unitParentId = null;
    _this.enabled = true;
    _this.dontDestroy = false;
    return _this;
  }
  /**
   * @param {number} id
   */


  (0, _createClass2["default"])(UnitData, [{
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @param {number} maskGroupId
     */

  }, {
    key: "setMaskGroupId",
    value: function setMaskGroupId(maskGroupId) {
      this.maskGroupId = maskGroupId;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getMaskGroupId",
    value: function getMaskGroupId() {
      return this.maskGroupId;
    }
    /**
     * @param {number} layerId
     */

  }, {
    key: "setLayerId",
    value: function setLayerId(layerId) {
      this.layerId = layerId;
    }
    /**
     * @return {number|string}
     */

  }, {
    key: "getLayerId",
    value: function getLayerId() {
      return this.layerId;
    }
    /**
     * @param {number} tagId
     */

  }, {
    key: "setTagId",
    value: function setTagId(tagId) {
      this.tagId = tagId;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getTagId",
    value: function getTagId() {
      return this.tagId;
    }
    /**
     * @param {string} name
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * @param {number|null} unitParentId
     */

  }, {
    key: "setUnitParentId",
    value: function setUnitParentId(unitParentId) {
      this.unitParentId = unitParentId;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getUnitParentId",
    value: function getUnitParentId() {
      return this.unitParentId;
    }
    /**
     * @param {ComponentData[]} components
     */

  }, {
    key: "setComponents",
    value: function setComponents(components) {
      this.components = components;
    }
    /**
     * @return {ComponentData[]}
     */

  }, {
    key: "getComponents",
    value: function getComponents() {
      return this.components;
    }
    /**
     * @param {boolean} enabled
     */

  }, {
    key: "setEnabled",
    value: function setEnabled(enabled) {
      this.enabled = enabled;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getEnabled",
    value: function getEnabled() {
      return this.enabled;
    }
    /**
     * @param {boolean} dontDestroy
     */

  }, {
    key: "setDontDestroy",
    value: function setDontDestroy(dontDestroy) {
      this.dontDestroy = dontDestroy;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getDontDestroy",
    value: function getDontDestroy() {
      return this.dontDestroy;
    }
    /**
     * @param {number} assetId
     */

  }, {
    key: "setAssetId",
    value: function setAssetId(assetId) {
      this.assetId = assetId;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getAssetId",
    value: function getAssetId() {
      return this.assetId;
    }
    /**
     * @template T
     * @param {T} type
     * @return {T}
     */

  }, {
    key: "getComponent",
    value: function getComponent(type) {
      if (!(type.prototype instanceof _ComponentData["default"])) {
        throw new _ClientError["default"]("Component type must be instance of ComponentData (".concat(type.name, " given)"));
      }

      if (!type.prototype.isUnique()) {
        throw new _ClientError["default"]("Component type ".concat(type.name, " is not unique (use findComponentsByClass instead)"));
      }

      return this.getComponents().find(function (component) {
        return component.constructor === type;
      });
    }
    /**
     * @template T
     * @param {T} type
     * @return {T}
     */

  }, {
    key: "findComponentByClass",
    value: function findComponentByClass(type) {
      return this.getComponents().find(function (component) {
        return component instanceof type;
      });
    }
    /**
     * @template T
     * @param {T} type
     * @return {T[]}
     */

  }, {
    key: "findComponentsByClass",
    value: function findComponentsByClass(type) {
      return this.getComponents().filter(function (component) {
        return component instanceof type;
      });
    }
    /**
     * @param {ComponentData[]} componentClasses
     * @return {boolean}
     */

  }, {
    key: "hasComponentsByClasses",
    value: function hasComponentsByClasses(componentClasses) {
      for (var iComponentClass in componentClasses) {
        var componentClass = componentClasses[iComponentClass];

        if (componentClasses.hasOwnProperty(iComponentClass) && !this.findComponentsByClass(componentClass).length) {
          return false;
        }
      }

      return true;
    }
    /**
     * @param {ComponentData[]} componentClasses
     * @return {boolean}
     */

  }, {
    key: "hasEnabledComponentsByClasses",
    value: function hasEnabledComponentsByClasses(componentClasses) {
      for (var iComponentClass in componentClasses) {
        var componentClass = componentClasses[iComponentClass];
        var componentsFound = this.findComponentsByClass(componentClass);
        var hasComponentNotEnabled = componentsFound.find(function (component) {
          return !component.isEnabled();
        });

        if (componentClasses.hasOwnProperty(iComponentClass) && (!componentsFound.length || hasComponentNotEnabled)) {
          return false;
        }
      }

      return true;
    }
    /**
     * @param {ComponentData[]} componentClasses
     * @return {boolean}
     */

  }, {
    key: "hasAnyComponentsByClasses",
    value: function hasAnyComponentsByClasses(componentClasses) {
      for (var iComponentClass in componentClasses) {
        var componentClass = componentClasses[iComponentClass];

        if (componentClasses.hasOwnProperty(iComponentClass) && this.findComponentsByClass(componentClass).length) {
          return true;
        }
      }

      return false;
    }
    /**
     * @param {ComponentData[]} componentClasses
     * @return {boolean}
     */

  }, {
    key: "hasComponents",
    value: function hasComponents(componentClasses) {
      for (var iComponentClass in componentClasses) {
        var componentClass = componentClasses[iComponentClass];

        if (componentClasses.hasOwnProperty(iComponentClass) && !this.getComponent(componentClass)) {
          return false;
        }
      }

      return true;
    }
    /**
     * @param {ComponentData[]} componentClasses
     * @return {boolean}
     */

  }, {
    key: "hasEnabledComponents",
    value: function hasEnabledComponents(componentClasses) {
      for (var iComponentClass in componentClasses) {
        var componentClass = componentClasses[iComponentClass];

        if (componentClasses.hasOwnProperty(iComponentClass)) {
          var component = this.getComponent(componentClass);

          if (!component || !component.isEnabled()) {
            return false;
          }
        }
      }

      return true;
    }
    /**
     * @param {ComponentData[]} componentClasses
     * @return {boolean}
     */

  }, {
    key: "hasAnyComponents",
    value: function hasAnyComponents(componentClasses) {
      for (var iComponentClass in componentClasses) {
        var componentClass = componentClasses[iComponentClass];

        if (componentClasses.hasOwnProperty(iComponentClass) && this.getComponent(componentClass)) {
          return true;
        }
      }

      return false;
    }
    /**
     * @template T
     * @param {T} componentClass
     * @return {T}
     */

  }, {
    key: "createComponent",
    value: function createComponent(componentClass) {
      var _this2 = this;

      if (!componentClass.prototype.isUnique() || !this.getComponent(componentClass)) {
        var component = new componentClass();

        _CommonUtil["default"].setupName(component, component.getName(), function (name) {
          return component.setName(name);
        }, function (name) {
          return _this2.findComponentByName(name);
        });

        this.components.push(component);
        return component;
      } else {
        throw new _ClientError["default"]("Component ".concat(componentClass.name, " already created!"));
      }
    }
    /**
     * @param {Component[]} componentClasses
     * @return {Component[]}
     */

  }, {
    key: "createComponents",
    value: function createComponents(componentClasses) {
      var _this3 = this;

      return componentClasses.map(function (componentClass) {
        return _this3.createComponent(componentClass);
      });
    }
    /**
     * @param {number} componentId
     */

  }, {
    key: "deleteComponent",
    value: function deleteComponent(componentId) {
      var iComponent = this.findIndexComponentById(componentId);
      this.components.splice(iComponent, 1);
    }
    /**
     * @param {number} componentId
     * @return {number}
     */

  }, {
    key: "findIndexComponentById",
    value: function findIndexComponentById(componentId) {
      return this.components.findIndex(function (component) {
        return component.id === componentId;
      });
    }
    /**
     * @param {number} componentId
     * @return {Component}
     */

  }, {
    key: "findComponentById",
    value: function findComponentById(componentId) {
      return this.components.find(function (component) {
        return component.id === componentId;
      });
    }
    /**
     * @param {string} name
     * @return {Component}
     */

  }, {
    key: "findComponentByName",
    value: function findComponentByName(name) {
      return this.components.find(function (component) {
        return component.getName() === name;
      });
    }
    /**
     * @param {ComponentData[]} components
     */

  }, {
    key: "concatComponents",
    value: function concatComponents(components) {
      this.concat(this.components, components, function (tItem, sItem) {
        return tItem.getName() === sItem.getName();
      });
    }
  }]);
  return UnitData;
}(_Data2["default"]);

exports["default"] = UnitData;

},{"../../exception/type/ClientError.js":34,"../../utils/CommonUtil.js":81,"../../utils/Maths.js":83,"./ComponentData.js":55,"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],76:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @extends {Data}
 */
var UnitManagerData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(UnitManagerData, _Data);

  var _super = _createSuper(UnitManagerData);

  function UnitManagerData() {
    var _this;

    (0, _classCallCheck2["default"])(this, UnitManagerData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "units", void 0);
    return _this;
  }

  (0, _createClass2["default"])(UnitManagerData, [{
    key: "setUnits",

    /**
     * @param {Unit[]} units
     */
    value: function setUnits(units) {
      this.units = units;
    }
    /**
     * @return {Unit[]}
     */

  }, {
    key: "getUnits",
    value: function getUnits() {
      return this.units;
    }
  }, {
    key: "deleteAll",
    value: function deleteAll() {
      this.units = [];
    }
    /**
     * @param {Unit[]} units
     */

  }, {
    key: "concatUnits",
    value: function concatUnits(units) {
      this.setUnits(units);
    }
  }]);
  return UnitManagerData;
}(_Data2["default"]);

exports["default"] = UnitManagerData;

},{"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],77:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

var _SystemError = _interopRequireDefault(require("../../exception/type/SystemError.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {WorldData}
 * @extends {Data}
 *
 * @property {Camera} camera
 */
var WorldData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(WorldData, _Data);

  var _super = _createSuper(WorldData);

  function WorldData() {
    var _this;

    (0, _classCallCheck2["default"])(this, WorldData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "tabManager", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "preference", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "functionRegistry", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "componentRegistry", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "materialRegistry", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "camera", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "assetsManager", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sceneManager", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "resolution", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showGrid", void 0);
    return _this;
  }

  (0, _createClass2["default"])(WorldData, [{
    key: "set",

    /**
     * @param {World} data
     */
    value: function set(data) {
      var _this2 = this;

      if (data instanceof WorldData) {
        Object.getOwnPropertyNames(this).map(function (prop) {
          return _this2[prop] = data[prop];
        });
        this.reload();
      } else {
        throw new _SystemError["default"]('Cannot set the new world, data must be instance of World class');
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      throw new _SystemError["default"]('World.reload must be implemented!');
    }
    /**
     * @param {TabManagerData} tabManager
     */

  }, {
    key: "setTabManager",
    value: function setTabManager(tabManager) {
      this.tabManager = tabManager;
    }
    /**
     * @param {Preference} preference
     */

  }, {
    key: "setPreference",
    value: function setPreference(preference) {
      this.preference = preference;
    }
    /**
     * @param {FunctionRegistry} functionRegistry
     */

  }, {
    key: "setFunctionRegistry",
    value: function setFunctionRegistry(functionRegistry) {
      this.functionRegistry = functionRegistry;
    }
    /**
     * @param {ComponentRegistry} componentRegistry
     */

  }, {
    key: "setComponentRegistry",
    value: function setComponentRegistry(componentRegistry) {
      this.componentRegistry = componentRegistry;
    }
    /**
     * @param {MaterialRegistry} materialRegistry
     */

  }, {
    key: "setMaterialRegistry",
    value: function setMaterialRegistry(materialRegistry) {
      this.materialRegistry = materialRegistry;
    }
    /**
     * @param {CameraData} camera
     */

  }, {
    key: "setCamera",
    value: function setCamera(camera) {
      this.camera = camera;
    }
    /**
     * @param {TerrainManagerData} terrainManager
     */

  }, {
    key: "setTerrainManager",
    value: function setTerrainManager(terrainManager) {
      this.terrainManager = terrainManager;
    }
    /**
     * @param {AssetsManagerData} assetsManager
     */

  }, {
    key: "setAssetsManager",
    value: function setAssetsManager(assetsManager) {
      this.assetsManager = assetsManager;
    }
    /**
     * @param {SceneManagerData} sceneManager
     */

  }, {
    key: "setSceneManager",
    value: function setSceneManager(sceneManager) {
      this.sceneManager = sceneManager;
    }
    /**
     * @return {TabManager}
     */

  }, {
    key: "getTabManager",
    value: function getTabManager() {
      return this.tabManager;
    }
    /**
     * @return {Preference}
     */

  }, {
    key: "getPreference",
    value: function getPreference() {
      return this.preference;
    }
    /**
     * @return {TerrainManager}
     */

  }, {
    key: "getTerrainManager",
    value: function getTerrainManager() {
      return this.terrainManager;
    }
    /**
     * @return {AssetsManager}
     */

  }, {
    key: "getAssetsManager",
    value: function getAssetsManager() {
      return this.assetsManager;
    }
    /**
     * @return {SceneManager}
     */

  }, {
    key: "getSceneManager",
    value: function getSceneManager() {
      return this.sceneManager;
    }
    /**
     * @return {FunctionRegistry}
     */

  }, {
    key: "getFunctionRegistry",
    value: function getFunctionRegistry() {
      return this.functionRegistry;
    }
    /**
     * @return {ComponentRegistry}
     */

  }, {
    key: "getComponentRegistry",
    value: function getComponentRegistry() {
      return this.componentRegistry;
    }
    /**
     * @return {MaterialRegistry}
     */

  }, {
    key: "getMaterialRegistry",
    value: function getMaterialRegistry() {
      return this.materialRegistry;
    }
    /**
     * Get the principal camera (active)
     * @return {Camera}
     */

  }, {
    key: "getCamera",
    value: function getCamera() {
      return this.camera;
    }
    /**
     * @return {Size}
     */

  }, {
    key: "getResolution",
    value: function getResolution() {
      return this.resolution;
    }
    /**
     * @param {Size} resolution
     */

  }, {
    key: "setResolution",
    value: function setResolution(resolution) {
      this.resolution = resolution;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getShowGrid",
    value: function getShowGrid() {
      return this.showGrid;
    }
    /**
     * @param {boolean} showGrid
     */

  }, {
    key: "setShowGrid",
    value: function setShowGrid(showGrid) {
      this.showGrid = showGrid;
    }
  }], [{
    key: "new",
    value: function _new() {
      this.instance = new this();
    }
  }]);
  return WorldData;
}(_Data2["default"]);

(0, _defineProperty2["default"])(WorldData, "instance", void 0);
var _default = WorldData;
exports["default"] = _default;

},{"../../exception/type/SystemError.js":35,"./Data.js":56,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],78:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrimitiveShape = exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _UnitData2 = _interopRequireDefault(require("../project/data/UnitData.js"));

var _GUIPropertyComponent = _interopRequireDefault(require("../component/internal/gui/property/GUIPropertyComponent.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Unit = /*#__PURE__*/function (_UnitData) {
  (0, _inherits2["default"])(Unit, _UnitData);

  var _super = _createSuper(Unit);

  function Unit(defaultComponentClasses) {
    var _this;

    (0, _classCallCheck2["default"])(this, Unit);
    _this = _super.call(this);

    _this.init(defaultComponentClasses || []);

    return _this;
  }
  /**
   * @param {Class<ComponentData>[]} defaultComponentClasses
   */


  (0, _createClass2["default"])(Unit, [{
    key: "init",
    value: function init(defaultComponentClasses) {
      var _this2 = this;

      defaultComponentClasses.forEach(function (componentClass) {
        return _this2.createComponent(componentClass);
      });
    }
    /**
     * @param {Component} componentInstance
     * @return {boolean}
     */

  }, {
    key: "hasComponentInstance",
    value: function hasComponentInstance(componentInstance) {
      return !!this.getComponents().find(function (component) {
        return component === componentInstance;
      });
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.getComponent(_GUIPropertyComponent["default"]).isSelected();
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isVisible",
    value: function isVisible() {
      return this.isEnabled();
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isEnabled",
    value: function isEnabled() {
      return this.getEnabled();
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isLocked",
    value: function isLocked() {
      return this.getComponent(_GUIPropertyComponent["default"]).isLocked();
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isFocused",
    value: function isFocused() {
      return this.getComponent(_GUIPropertyComponent["default"]).isFocused();
    }
  }, {
    key: "select",
    value: function select() {
      this.getComponent(_GUIPropertyComponent["default"]).setSelected(true);
    }
  }, {
    key: "unselect",
    value: function unselect() {
      this.getComponent(_GUIPropertyComponent["default"]).setSelected(false);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.getComponent(_GUIPropertyComponent["default"]).setFocused(true);
    }
  }, {
    key: "unfocus",
    value: function unfocus() {
      this.getComponent(_GUIPropertyComponent["default"]).setFocused(false);
    }
    /**
     * @param {World} world
     * @return {number}
     */

  }, {
    key: "getRank",
    value: function getRank(world) {
      return world.getRankUnit(this);
    }
  }]);
  return Unit;
}(_UnitData2["default"]);

exports["default"] = Unit;
var PrimitiveShape = {
  RECT: 'rect',
  CIRCLE: 'circle',
  LIGHT_POINT: 'light_point',
  LINE: 'line',
  ARROW_RIGHT: 'arrow_right',
  ARROW_DOWN: 'arrow_down',
  ARROW_RECT_RIGHT: 'arrow_rect_right',
  ARROW_RECT_DOWN: 'arrow_rect_down',
  GRID: 'grid',
  RECT_CROSS: 'rect_cross',
  NODE: 'node',
  CAMERA: 'camera',
  TEXT: 'text',
  CURVE: 'curve'
};
exports.PrimitiveShape = PrimitiveShape;

},{"../component/internal/gui/property/GUIPropertyComponent.js":32,"../project/data/UnitData.js":75,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":18}],79:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ObjectHelper = _interopRequireDefault(require("./ObjectHelper.js"));

var ArrayHelper = /*#__PURE__*/function () {
  function ArrayHelper() {
    (0, _classCallCheck2["default"])(this, ArrayHelper);
  }

  (0, _createClass2["default"])(ArrayHelper, null, [{
    key: "isEqual",

    /**
     * @param {Array} array1
     * @param {Array} array2
     * @param {Function} comparator
     * @return {boolean}
     */
    value: function isEqual(array1, array2) {
      var comparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (array1.length !== array2.length) {
        return false;
      }

      for (var iArray1 in array1) {
        var element1 = array1[iArray1];
        var element2 = array2[iArray1];

        if (typeof comparator === 'function') {
          if (!comparator(element1, element2)) {
            return false;
          }
        } else if (_.isObject(element1) && _.isObject(element2)) {
          if (!_ObjectHelper["default"].isEqual(element1, element2)) {
            return false;
          }
        } else if (array1[iArray1] !== array2[iArray1]) {
          return false;
        }
      }

      return true;
    }
    /**
     * @param {*[]} array
     * @param {number} indexA
     * @param {number} indexB
     */

  }, {
    key: "permute",
    value: function permute(array, indexA, indexB) {
      var elementB = array[indexB];
      array[indexB] = array[indexA];
      array[indexA] = elementB;
    }
  }]);
  return ArrayHelper;
}();

exports["default"] = ArrayHelper;

},{"./ObjectHelper.js":84,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],80:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _SystemError = _interopRequireDefault(require("../exception/type/SystemError.js"));

var _StringHelper = _interopRequireDefault(require("./StringHelper.js"));

/**
 * @class {ClassHelper}
 */
var ClassHelper = /*#__PURE__*/function () {
  function ClassHelper() {
    (0, _classCallCheck2["default"])(this, ClassHelper);
  }

  (0, _createClass2["default"])(ClassHelper, null, [{
    key: "getSetter",

    /**
     * Get the setter name
     * @param {*} object
     * @param {string} key
     * @return {string}
     */
    value: function getSetter(object, key) {
      var setter;

      if (object.constructor === Array) {
        setter = 'push';
      } else {
        var prefix = 'set';
        setter = "".concat(prefix).concat(key.charAt(0).toUpperCase() + key.slice(1));

        if (typeof object[setter] !== 'function') {
          throw new _SystemError["default"]("".concat(setter, " must be implemented for ").concat(object.constructor.name));
        }
      }

      return setter;
    }
    /**
     * Get the getter name
     * @param {*} object
     * @param {string} key
     * @return {string}
     */

  }, {
    key: "getGetter",
    value: function getGetter(object, key) {
      var getter;

      if (object.constructor === Array) {
        getter = key;
      } else {
        var prefix = 'get';
        getter = "".concat(prefix).concat(key.charAt(0).toUpperCase() + key.slice(1));

        if (typeof object[getter] !== 'function') {
          if (object.constructor === String) {
            throw new _SystemError["default"]("".concat(key, ": Object was expected, but \"").concat(object, "\" was provided"));
          } else {
            throw new _SystemError["default"]("".concat(key, ": ").concat(getter, " must be implemented for ").concat(object.constructor.name));
          }
        }
      }

      return getter;
    }
    /**
     * @param {Function} setter
     * @return {string}
     */

  }, {
    key: "getAttributeFromSetter",
    value: function getAttributeFromSetter(setter) {
      var setterName = setter.name;
      var regexSetter = new RegExp('^set(.+)$');
      var setterParts = setterName.match(regexSetter);

      if (setterParts.length > 0) {
        return _StringHelper["default"].lowFirstLetter(setterParts[1]);
      }

      throw new _SystemError["default"]("".concat(setterName, " not a function or a setter function"));
    }
  }]);
  return ClassHelper;
}();

var _default = ClassHelper;
exports["default"] = _default;

},{"../exception/type/SystemError.js":35,"./StringHelper.js":86,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],81:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var CommonUtil = /*#__PURE__*/function () {
  function CommonUtil() {
    (0, _classCallCheck2["default"])(this, CommonUtil);
  }

  (0, _createClass2["default"])(CommonUtil, null, [{
    key: "setupName",

    /**
     * @param {Unit|Component|Scene} object
     * @param {string} initialName
     * @param {Function} setName
     * @param {Function} findByName
     */
    value: function setupName(object, initialName, setName, findByName) {
      var name = initialName;
      var existUnit = null;
      var iDuplicate = 0;

      do {
        setName(name);
        existUnit = findByName(name);

        if (existUnit) {
          iDuplicate++;
          name = "".concat(initialName, " (").concat(iDuplicate, ")");
        }
      } while (existUnit);
    }
  }]);
  return CommonUtil;
}();

exports["default"] = CommonUtil;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],82:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _DynamicAttribute = _interopRequireDefault(require("../pobject/DynamicAttribute.js"));

var _AttributeType = _interopRequireWildcard(require("../pobject/AttributeType.js"));

var _ClientError = _interopRequireDefault(require("../exception/type/ClientError.js"));

var _Layout = _interopRequireDefault(require("../layout/Layout.js"));

var _Component = _interopRequireDefault(require("../component/Component.js"));

var _RegexHelper = _interopRequireDefault(require("./RegexHelper.js"));

var _Vector = _interopRequireDefault(require("./Vector.js"));

var DynamicAttributeHelper = /*#__PURE__*/function () {
  function DynamicAttributeHelper() {
    (0, _classCallCheck2["default"])(this, DynamicAttributeHelper);
  }

  (0, _createClass2["default"])(DynamicAttributeHelper, null, [{
    key: "create",

    /**
     * @param {string} name
     * @param {number} type
     * @param {*} defaultValue
     * @param {*} rule
     * @param {boolean} internal
     */
    value: function create(name, type) {
      var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var rule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var internal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      return new _DynamicAttribute["default"](name, type, defaultValue, rule, internal);
    }
    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @param {number} type
     * @param {*} defaultValue
     * @param {*} rule
     * @param {boolean} internal
     */

  }, {
    key: "add",
    value: function add(target, name, type) {
      var defaultValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var rule = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var internal = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

      if (!this.tryGet(target, name)) {
        target.push(this.create(name, type, defaultValue, rule, internal));
      } else {
        throw new _ClientError["default"]("Attribute ".concat(name, " already defined"));
      }
    }
    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @return {DynamicAttribute}
     */

  }, {
    key: "get",
    value: function get(target, name) {
      var componentAttribute = this.tryGet(target, name);

      if (!componentAttribute) {
        throw new _ClientError["default"]("Attribute ".concat(name, " not supported"));
      }

      return componentAttribute;
    }
    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @return {DynamicAttribute}
     */

  }, {
    key: "tryGet",
    value: function tryGet(target, name) {
      return target.find(function (attribute) {
        return attribute.getAttrName() === name;
      });
    }
    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     */

  }, {
    key: "delete",
    value: function _delete(target, name) {
      var index = target.findIndex(function (pAttribute) {
        return pAttribute.getAttrName() === name;
      });

      if (index >= 0) {
        target.splice(index, 1);
      }
    }
    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @param {*} value
     */

  }, {
    key: "setValue",
    value: function setValue(target, name, value) {
      var attribute = this.get(target, name);
      attribute.setAttrValue(value);
    }
    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @return {*}
     */

  }, {
    key: "getValue",
    value: function getValue(target, name) {
      return this.get(target, name).getAttrValue();
    }
    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @return {number}
     */

  }, {
    key: "getType",
    value: function getType(target, name) {
      return this.get(target, name).getAttrType();
    }
    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @return {*}
     */

  }, {
    key: "getRule",
    value: function getRule(target, name) {
      return this.get(target, name).getAttrRule();
    }
    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @return {number}
     */

  }, {
    key: "getId",
    value: function getId(target, name) {
      return this.get(target, name).getId();
    }
    /**
     * @param {DynamicAttribute[]} target
     * @param {number} id
     * @return {DynamicAttribute}
     */

  }, {
    key: "findById",
    value: function findById(target, id) {
      return target.find(function (attribute) {
        return attribute.getId() === id;
      });
    }
    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @return {DynamicAttribute}
     */

  }, {
    key: "findByName",
    value: function findByName(target, name) {
      return target.find(function (attribute) {
        return attribute.getAttrName() === name;
      });
    }
    /**
     * @param {DynamicAttribute[]} target
     * @param {number} index
     * @return {DynamicAttribute}
     */

  }, {
    key: "findByIndex",
    value: function findByIndex(target, index) {
      return target.find(function (attribute, attrIndex) {
        return attrIndex === index;
      });
    }
    /**
     * @param {string|number|boolean} value
     * @return {number}
     */

  }, {
    key: "findTypeOfValue",
    value: function findTypeOfValue(value) {
      if (_.isString(value)) {
        return _AttributeType.TYPES.STRING;
      } else if (_.isNumber(value)) {
        return _AttributeType.TYPES.NUMBER;
      } else if (_.isBoolean(value)) {
        return _AttributeType.TYPES.BOOLEAN;
      }

      return _AttributeType.TYPES.ANY;
    }
    /**
     * @param {World} world
     * @param {UnitSelector} unitSelector
     * @param {DynamicAttribute} attribute
     * @param {boolean} isListInstances
     * @param {string|null} pBindName
     * @param {number|null} arrayIndex
     * @param {string|null} pAttributeName
     * @return {FormField[]}
     */

  }, {
    key: "getFormFields",
    value: function getFormFields(world, unitSelector, attribute) {
      var _this = this;

      var isListInstances = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var pBindName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var arrayIndex = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      var pAttributeName = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
      var bindName = "".concat(pBindName || attribute.getAttrName()).concat(arrayIndex !== null ? "[".concat(arrayIndex, "]") : '');
      var attributeName = pAttributeName || attribute.getAttrName();
      var dynamicAttribute = !pBindName;
      var attrType = arrayIndex !== null ? _AttributeType["default"].getArrayElementType(attribute.getAttrType()) : attribute.getAttrType();
      var formField;

      if (attrType === _AttributeType.TYPES.UNIT) {
        if (isListInstances) {
          var units = world.getUnitManager().getUnits().map(function (unit) {
            return {
              value: unit.getId(),
              label: unit.getName()
            };
          });
          formField = [{
            bind: bindName,
            label: attributeName,
            type: _Layout["default"].form.DROPDOWN,
            list: units,
            draggable: true,
            dynamicAttribute: dynamicAttribute
          }];
        } else {
          formField = [{
            bind: bindName,
            label: "".concat(attributeName),
            type: _Layout["default"].form.TEXT,
            dynamicAttribute: dynamicAttribute
          }];
        }
      } else if (attrType === _AttributeType.TYPES.COMPONENT) {
        var components = world.getComponentRegistry().getInstances().map(function (component) {
          return {
            value: component.getName(),
            label: component.getName()
          };
        });
        formField = [{
          bind: bindName,
          label: attributeName,
          type: _Layout["default"].form.DROPDOWN,
          list: components,
          dynamicAttribute: dynamicAttribute
        }];
      } else if (attrType === _AttributeType.TYPES.MATERIAL) {
        var materials = world.getMaterialRegistry().getInstances().map(function (material) {
          return {
            value: material.getName(),
            label: material.getName()
          };
        });
        formField = [{
          bind: bindName,
          label: attributeName,
          type: _Layout["default"].form.DROPDOWN,
          list: materials,
          dynamicAttribute: dynamicAttribute
        }];
      } else if (attrType === _AttributeType.TYPES.COMPONENT_INSTANCE && isListInstances) {
        var selectedUnit = unitSelector.getFirstSelected(world);
        var componentInstances = selectedUnit.getComponents().filter(function (component) {
          return !component.isHidden() && !component.isUnique();
        }).map(function (component) {
          return {
            value: component.getId(),
            label: component.getName()
          };
        });
        formField = [{
          bind: bindName,
          label: attributeName,
          type: _Layout["default"].form.DROPDOWN,
          list: componentInstances,
          dynamicAttribute: dynamicAttribute
        }];
      } else if (attrType === _AttributeType.TYPES.MASK_GROUP_INSTANCE && isListInstances) {
        var listMaskGroups = world.getPreference().getMaskGroup().getMasks().map(function (maskGroup) {
          return {
            value: maskGroup.getId(),
            label: maskGroup.getName()
          };
        });
        formField = [{
          bind: bindName,
          label: attributeName,
          type: _Layout["default"].form.DROPDOWN,
          list: listMaskGroups,
          dynamicAttribute: dynamicAttribute
        }];
      } else if (attrType === _AttributeType.TYPES.AUDIO && isListInstances) {
        var listAudios = world.getAssetsManager().getAudioAssets().map(function (audio) {
          return {
            value: audio.getId(),
            label: audio.getName()
          };
        });
        formField = [{
          bind: bindName,
          label: attributeName,
          type: _Layout["default"].form.DROPDOWN,
          list: listAudios,
          draggable: true,
          dynamicAttribute: dynamicAttribute
        }];
      } else if (attrType === _AttributeType.TYPES.IMAGE && isListInstances) {
        var listMeshes = world.getAssetsManager().getImageAssets().map(function (mesh) {
          return {
            value: mesh.getId(),
            label: mesh.getName()
          };
        });
        formField = [{
          bind: bindName,
          label: attributeName,
          type: _Layout["default"].form.DROPDOWN,
          list: listMeshes,
          draggable: true,
          dynamicAttribute: dynamicAttribute
        }];
      } else if (attrType === _AttributeType.TYPES.UNIT_INSTANT && isListInstances) {
        var listUnitInstants = world.getAssetsManager().getUnitAssets().map(function (instant) {
          return {
            value: instant.getId(),
            label: instant.getName()
          };
        });
        formField = [{
          bind: bindName,
          label: attributeName,
          type: _Layout["default"].form.DROPDOWN,
          list: listUnitInstants,
          draggable: true,
          dynamicAttribute: dynamicAttribute
        }];
      } else if (attrType === _AttributeType.TYPES.SCENE && isListInstances) {
        var listScenes = world.getSceneManager().getScenes().map(function (scene) {
          return {
            value: scene.getId(),
            label: scene.getName()
          };
        });
        formField = [{
          bind: bindName,
          label: attributeName,
          type: _Layout["default"].form.DROPDOWN,
          list: listScenes,
          dynamicAttribute: dynamicAttribute
        }];
      } else if (attrType === _AttributeType.TYPES.FUNCTION) {
        var listFunctions = world.getFunctionRegistry().getCustomFunctionInstances().map(function (func) {
          return {
            value: func.getName(),
            label: func.getName()
          };
        });
        formField = [{
          bind: bindName,
          label: attributeName,
          type: _Layout["default"].form.DROPDOWN,
          list: listFunctions,
          dynamicAttribute: dynamicAttribute
        }];
      } else if (attrType === _AttributeType.TYPES.FONT && isListInstances) {
        var listFonts = world.getAssetsManager().getFontAssets().map(function (font) {
          return {
            value: font.getId(),
            label: font.getName()
          };
        });
        formField = [{
          bind: bindName,
          label: attributeName,
          type: _Layout["default"].form.DROPDOWN,
          list: listFonts,
          draggable: true,
          dynamicAttribute: dynamicAttribute
        }];
      } else if (attrType === _AttributeType.TYPES.BOOLEAN && isListInstances) {
        formField = [{
          bind: bindName,
          label: "".concat(attributeName, " "),
          type: _Layout["default"].form.CHECKBOX,
          dynamicAttribute: dynamicAttribute
        }];
      } else if (attrType === _AttributeType.TYPES.COLOR && isListInstances) {
        formField = [{
          bind: bindName,
          label: "".concat(attributeName, " "),
          type: _Layout["default"].form.COLOR,
          dynamicAttribute: dynamicAttribute
        }];
      } else if (attrType === _AttributeType.TYPES.RANGE && isListInstances) {
        var rule = attribute.getAttrRule() || [];
        formField = [{
          bind: bindName,
          label: "".concat(attributeName, " "),
          type: _Layout["default"].form.RANGE,
          options: {
            min: rule[0],
            max: rule[1],
            step: rule[2]
          },
          dynamicAttribute: dynamicAttribute
        }];
      } else if (attrType === _AttributeType.TYPES.VECTOR && isListInstances) {
        formField = [{
          bind: bindName,
          label: attributeName,
          type: _Layout["default"].form.GROUP,
          items: [{
            bind: "".concat(bindName, ".x"),
            label: "X",
            type: _Layout["default"].form.NUMBER,
            size: 0.5,
            dynamicAttribute: dynamicAttribute
          }, {
            bind: "".concat(bindName, ".y"),
            label: "Y",
            type: _Layout["default"].form.NUMBER,
            size: 0.5,
            dynamicAttribute: dynamicAttribute
          }]
        }];
      } else if (attrType === _AttributeType.TYPES.SIZE && isListInstances) {
        formField = [{
          bind: bindName,
          label: attributeName,
          type: _Layout["default"].form.GROUP,
          items: [{
            bind: "".concat(bindName, ".width"),
            label: "Width",
            type: _Layout["default"].form.NUMBER,
            size: 0.5,
            dynamicAttribute: dynamicAttribute
          }, {
            bind: "".concat(bindName, ".height"),
            label: "Height",
            type: _Layout["default"].form.NUMBER,
            size: 0.5,
            dynamicAttribute: dynamicAttribute
          }]
        }];
      } else if (attrType === _AttributeType.TYPES.STYLE && isListInstances) {
        var listColors = world.getAssetsManager().getColorAssets().map(function (color) {
          return {
            value: color.getId(),
            label: color.getName()
          };
        });
        formField = [{
          bind: "".concat(bindName, ".borderSize"),
          label: "BorderSize",
          type: _Layout["default"].form.RANGE,
          options: {
            min: 0,
            max: 20,
            step: 1
          },
          dynamicAttribute: dynamicAttribute
        }, {
          bind: "".concat(bindName, ".color"),
          label: "Border Color",
          type: _Layout["default"].form.COLOR,
          dynamicAttribute: dynamicAttribute
        }, {
          bind: "".concat(bindName, ".colorOpacity"),
          label: "Border opacity",
          type: _Layout["default"].form.RANGE,
          options: {
            min: 0,
            max: 1,
            step: 0.01
          },
          dynamicAttribute: dynamicAttribute
        }, {
          bind: "".concat(bindName, ".fillColor"),
          label: "Fill Color",
          type: _Layout["default"].form.COLOR,
          dynamicAttribute: dynamicAttribute
        }, {
          bind: "".concat(bindName, ".gradientColorAssetId"),
          label: 'Fill Gradient color',
          type: _Layout["default"].form.DROPDOWN,
          list: listColors,
          dynamicAttribute: dynamicAttribute
        }, {
          bind: "".concat(bindName, ".fillColorOpacity"),
          label: "Fill opacity",
          type: _Layout["default"].form.RANGE,
          options: {
            min: 0,
            max: 1,
            step: 0.01
          },
          dynamicAttribute: dynamicAttribute
        }, {
          bind: "".concat(bindName, ".opacity"),
          label: "Opacity",
          type: _Layout["default"].form.RANGE,
          options: {
            min: 0,
            max: 1,
            step: 0.01
          },
          dynamicAttribute: dynamicAttribute
        }, {
          bind: "".concat(bindName, ".shadowColor"),
          label: "Shadow Color",
          type: _Layout["default"].form.COLOR,
          dynamicAttribute: dynamicAttribute
        }, {
          bind: "".concat(bindName, ".shadowPosition"),
          label: 'Shadow Position',
          type: _Layout["default"].form.GROUP,
          items: [{
            bind: "".concat(bindName, ".shadowPosition.x"),
            label: 'Y',
            type: _Layout["default"].form.NUMBER,
            size: 0.5,
            dynamicAttribute: dynamicAttribute
          }, {
            bind: "".concat(bindName, ".shadowPosition.y"),
            label: 'Y',
            type: _Layout["default"].form.NUMBER,
            size: 0.5,
            dynamicAttribute: dynamicAttribute
          }]
        }, {
          bind: "".concat(bindName, ".shadowBlur"),
          label: "Shadow blur",
          type: _Layout["default"].form.NUMBER,
          dynamicAttribute: dynamicAttribute
        }];
      } else if (attrType === _AttributeType.TYPES.LIST && isListInstances) {
        var _rule = attribute.getAttrRule();

        var list = _rule.map(function (eRule) {
          return {
            value: eRule,
            label: eRule
          };
        });

        formField = [{
          bind: bindName,
          label: attributeName,
          type: _Layout["default"].form.DROPDOWN,
          list: list,
          dynamicAttribute: dynamicAttribute
        }];
      } else if (attrType === (_AttributeType.TYPES.ARRAY | _AttributeType.TYPES.LIST) && isListInstances) {
        var _rule2 = attribute.getAttrRule();

        var _list = _rule2.map(function (eRule) {
          return {
            value: eRule,
            label: eRule
          };
        });

        formField = [{
          bind: bindName,
          label: attributeName,
          type: _Layout["default"].form.MULTI_BUTTON,
          list: _list,
          dynamicAttribute: dynamicAttribute
        }];
      } else if (attrType === _AttributeType.TYPES.NUMBER && isListInstances) {
        formField = [{
          bind: bindName,
          label: attributeName,
          type: _Layout["default"].form.NUMBER,
          dynamicAttribute: dynamicAttribute
        }];
      } else if (_AttributeType["default"].isArrayType(attrType) && isListInstances) {
        var array = attribute.getAttrValue() || [];
        var size = array.length;
        formField = [{
          bind: bindName,
          label: attributeName,
          type: _Layout["default"].form.GROUP,
          dynamicAttribute: dynamicAttribute,
          items: [{
            bind: "size[".concat(bindName, "]"),
            label: 'Size',
            type: _Layout["default"].form.NUMBER,
            dynamicAttribute: dynamicAttribute
          }].concat((0, _toConsumableArray2["default"])(Array.from({
            length: size
          }).reduce(function (listElement, current, index) {
            return [].concat((0, _toConsumableArray2["default"])(listElement), (0, _toConsumableArray2["default"])(_this.getFormFields(world, unitSelector, attribute, isListInstances, null, index, "Element ".concat(index))));
          }, [])))
        }];
      } else {
        formField = [{
          bind: bindName,
          label: attributeName,
          type: _Layout["default"].form.TEXT,
          dynamicAttribute: dynamicAttribute
        }];
      }

      return formField;
    }
    /**
     * @param {*} value
     * @param {string} type
     * @param {World} world
     * @return {*}
     */

  }, {
    key: "getKeyByType",
    value: function getKeyByType(value, type, world) {
      switch (type) {
        case _AttributeType.TYPES.UNIT:
        case _AttributeType.TYPES.ANIMATION:
        case _AttributeType.TYPES.COMPONENT_INSTANCE:
        case _AttributeType.TYPES.MASK_GROUP_INSTANCE:
        case _AttributeType.TYPES.AUDIO:
        case _AttributeType.TYPES.UNIT_INSTANT:
        case _AttributeType.TYPES.SCENE:
        case _AttributeType.TYPES.FONT:
          return value.getId();

        case _AttributeType.TYPES.FUNCTION:
        case _AttributeType.TYPES.COMPONENT:
          return value.getName();
      }

      return value;
    }
    /**
     * @param {*} value
     * @param {number} type
     * @param {World} world
     * @return {*}
     */

  }, {
    key: "getValueByType",
    value: function getValueByType(value, type, world) {
      var newValue = value;

      if (newValue === '[undefined]') {
        return undefined;
      }

      switch (type) {
        case _AttributeType.TYPES.UNIT:
          var unitManager = world.getUnitManager();
          newValue = unitManager.hasUnit(value) ? value : world.findUnitById(parseInt(value));

          if (!newValue) {
            throw new _ClientError["default"]("".concat(this.constructor.name, ": Unit \"").concat(value, "\" not found"));
          }

          break;

        case _AttributeType.TYPES.ANIMATION:
          var animationManager = world.getAnimationManager();
          newValue = animationManager.hasAnimation(value) ? value : animationManager.findById(parseInt(value));

          if (!newValue) {
            throw new _ClientError["default"]("".concat(this.constructor.name, ": Animation \"").concat(value, "\" not found"));
          }

          break;

        case _AttributeType.TYPES.COMPONENT:
          var component = world.getComponentRegistry().getInstance(value);

          if (!component || !component.constructor) {
            throw new _ClientError["default"]("".concat(this.constructor.name, ": Component \"").concat(value, "\" not found"));
          }

          newValue = component.constructor;
          break;

        case _AttributeType.TYPES.COMPONENT_INSTANCE:
          var unitManagerComponent = world.getUnitManager();
          var componentInstance = unitManagerComponent.hasComponent(value) ? value : world.getUnitManager().findComponentById(parseInt(value));

          if (!componentInstance) {
            throw new _ClientError["default"]("".concat(this.constructor.name, ": Component Instance \"").concat(value, "\" not found"));
          }

          newValue = componentInstance;
          break;

        case _AttributeType.TYPES.MASK_GROUP_INSTANCE:
          var maskGroupPref = world.getPreference().getMaskGroup();
          var maskGroupInstance = maskGroupPref.hasMaskGroup(value) ? value : world.getPreference().getMaskGroup().find(parseInt(value));

          if (!maskGroupInstance) {
            throw new _ClientError["default"]("".concat(this.constructor.name, ": Mask Group Instance \"").concat(value, "\" not found"));
          }

          newValue = maskGroupInstance;
          break;

        case _AttributeType.TYPES.AUDIO:
          var audio = world.getAssetsManager().findAssetAudioById(value);

          if (!audio) {
            throw new _ClientError["default"]("".concat(this.constructor.name, ": Audio \"").concat(value, "\" not found"));
          }

          newValue = audio.getType();
          break;

        case _AttributeType.TYPES.UNIT_INSTANT:
          var assetManager = world.getAssetsManager();
          var unitInstant = assetManager.hasAsset(value) ? value : world.getAssetsManager().findAssetUnitById(value);

          if (!unitInstant) {
            throw new _ClientError["default"]("".concat(this.constructor.name, ": Unit Instant \"").concat(value, "\" not found"));
          }

          newValue = unitInstant;
          break;

        case _AttributeType.TYPES.SCENE:
          var sceneManager = world.getSceneManager();
          var scene = sceneManager.hasScene(value) ? value : sceneManager.findById(value);

          if (!scene) {
            throw new _ClientError["default"]("".concat(this.constructor.name, ": Scene \"").concat(value, "\" not found"));
          }

          newValue = scene;
          break;

        case _AttributeType.TYPES.FUNCTION:
          var functionRegistry = world.getFunctionRegistry();
          var func = functionRegistry.hasInstance(value) ? value : functionRegistry.getInstance(value);

          if (!func) {
            throw new _ClientError["default"]("".concat(this.constructor.name, ": Function \"").concat(value, "\" not found"));
          }

          newValue = func;
          break;

        case _AttributeType.TYPES.FONT:
          var font = world.getAssetsManager().findAssetFontById(value);

          if (!font) {
            throw new _ClientError["default"]("".concat(this.constructor.name, ": Font \"").concat(value, "\" not found"));
          }

          newValue = font.getType();
          break;

        case _AttributeType.TYPES.ARRAY | _AttributeType.TYPES.ANY:
          if (!_.isArray(value)) {
            throw new _ClientError["default"]("".concat(this.constructor.name, ": \"").concat(value, "\" is not an array"));
          }

          newValue = value;
          break;

        case _AttributeType.TYPES.ARRAY | _AttributeType.TYPES.COMPONENT_INSTANCE:
          if (!_.isArray(value) || !value.every(function (eArray) {
            return eArray instanceof _Component["default"];
          })) {
            throw new _ClientError["default"]("".concat(this.constructor.name, ": \"").concat(value, "\" is not an array"));
          }

          newValue = value;
          break;

        case _AttributeType.TYPES.ARRAY | _AttributeType.TYPES.DYNAMIC_ATTRIBUTE:
          if (!_.isArray(value) || !value.every(function (eArray) {
            return eArray instanceof _DynamicAttribute["default"];
          })) {
            throw new _ClientError["default"]("".concat(this.constructor.name, ": \"").concat(value, "\" is not an array of DynamicAttribute"));
          }

          newValue = value;
          break;

        case _AttributeType.TYPES.DYNAMIC_ATTRIBUTE:
          if (!(value instanceof _DynamicAttribute["default"])) {
            throw new _ClientError["default"]("".concat(this.constructor.name, ": \"").concat(value, "\" is not a DynamicAttribute"));
          }

          newValue = value;
          break;

        case _AttributeType.TYPES.NUMBER:
          newValue = parseFloat(value);
          break;

        case _AttributeType.TYPES.RANGE:
          newValue = parseFloat(value);
          break;

        case _AttributeType.TYPES.BOOLEAN:
          newValue = value === 'true' || value === '1' || value === true;
          break;
      }

      return newValue;
    }
    /**
     * @param {*} value
     * @param {number} type
     * @param {World} world
     * @return {*}
     */

  }, {
    key: "validateValueByType",
    value: function validateValueByType(value, type, world) {
      if (value === '[undefined]') {
        return true;
      }

      switch (type) {
        case _AttributeType.TYPES.UNIT:
          return world.getUnitManager().hasUnit(value);

        case _AttributeType.TYPES.ANIMATION:
          return world.getAnimationManager().hasAnimation(value);

        case _AttributeType.TYPES.COMPONENT:
          return world.getComponentRegistry().hasInstance(value);

        case _AttributeType.TYPES.COMPONENT_INSTANCE:
          return world.getUnitManager().hasComponent(value);

        case _AttributeType.TYPES.MASK_GROUP_INSTANCE:
          var maskGroupPref = world.getPreference().getMaskGroup();
          return maskGroupPref.hasMaskGroup(value);

        case _AttributeType.TYPES.AUDIO:
          return world.getAssetsManager().hasAsset(value);

        case _AttributeType.TYPES.UNIT_INSTANT:
          return world.getAssetsManager().hasAsset(value);

        case _AttributeType.TYPES.SCENE:
          return world.getSceneManager().hasScene(value);

        case _AttributeType.TYPES.FUNCTION:
          return world.getFunctionRegistry().hasInstance(value);

        case _AttributeType.TYPES.FONT:
          return world.getAssetsManager().hasAsset(value);

        case _AttributeType.TYPES.ARRAY | _AttributeType.TYPES.ANY:
          return _.isArray(value);

        case _AttributeType.TYPES.ARRAY | _AttributeType.TYPES.COMPONENT_INSTANCE:
          return _.isArray(value) && value.every(function (eArray) {
            return eArray instanceof _Component["default"];
          });

        case _AttributeType.TYPES.ARRAY | _AttributeType.TYPES.DYNAMIC_ATTRIBUTE:
          return _.isArray(value) && value.every(function (eArray) {
            return eArray instanceof _DynamicAttribute["default"];
          });

        case _AttributeType.TYPES.DYNAMIC_ATTRIBUTE:
          return value instanceof _DynamicAttribute["default"];

        case _AttributeType.TYPES.VECTOR:
          return value instanceof _Vector["default"];

        case _AttributeType.TYPES.NUMBER:
          return !isNaN(value) && !isNaN(parseFloat(value));

        case _AttributeType.TYPES.RANGE:
          return !isNaN(value) && !isNaN(parseFloat(value));

        case _AttributeType.TYPES.BOOLEAN:
          return value === 'true' || value === '1' || value === true || value === '0' || value === false || value === 'false' || value === null || value === '';

        case _AttributeType.TYPES.STRING:
          return _.isString(value) || _.isNumber(value);

        case _AttributeType.TYPES.ANY:
          return true;
      }

      return false;
    }
    /**
     * @param {number} attributeType
     * @return {string}
     */

  }, {
    key: "getAttributeTypeName",
    value: function getAttributeTypeName(attributeType) {
      var typeName = _AttributeType.TYPES_NAME.find(function (type) {
        return type.value === attributeType;
      });

      if (typeName) {
        return typeName.label;
      }

      throw new _ClientError["default"]("Attribute type not recognized \"".concat(typeName, "\""));
    }
    /**
     * @param {string} fieldName
     * @return {boolean}
     */

  }, {
    key: "isSizeField",
    value: function isSizeField(fieldName) {
      return !!fieldName.match(_RegexHelper["default"].FIELD_NAME_SIZE);
    }
    /**
     * @param {string} fieldName
     * @return {boolean}
     */

  }, {
    key: "isArrayIndexField",
    value: function isArrayIndexField(fieldName) {
      return !!fieldName.match(_RegexHelper["default"].FIELD_NAME_ARRAY_INDEX);
    }
    /**
     * @param {string} fieldName
     * @return {string}
     */

  }, {
    key: "getAttributeName",
    value: function getAttributeName(fieldName) {
      if (this.isSizeField(fieldName)) {
        var fieldMatch = fieldName.match(_RegexHelper["default"].FIELD_NAME_SIZE);
        return fieldMatch[1];
      } else if (this.isArrayIndexField(fieldName)) {
        var _fieldMatch = fieldName.match(_RegexHelper["default"].FIELD_NAME_ARRAY_INDEX);

        return _fieldMatch[1];
      }

      return fieldName;
    }
    /**
     * @param {string} fieldName
     * @return {number|null}
     */

  }, {
    key: "getAttributeArrayIndex",
    value: function getAttributeArrayIndex(fieldName) {
      if (this.isArrayIndexField(fieldName)) {
        var fieldMatch = fieldName.match(_RegexHelper["default"].FIELD_NAME_ARRAY_INDEX);
        return parseInt(fieldMatch[2]);
      }

      return null;
    }
  }]);
  return DynamicAttributeHelper;
}();

exports["default"] = DynamicAttributeHelper;

},{"../component/Component.js":27,"../exception/type/ClientError.js":34,"../layout/Layout.js":36,"../pobject/AttributeType.js":40,"../pobject/DynamicAttribute.js":41,"./RegexHelper.js":85,"./Vector.js":87,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/interopRequireWildcard":13,"@babel/runtime/helpers/toConsumableArray":21}],83:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * Maths libs
 */
var Maths = /*#__PURE__*/function () {
  function Maths() {
    (0, _classCallCheck2["default"])(this, Maths);
  }

  (0, _createClass2["default"])(Maths, null, [{
    key: "generateId",

    /**
     * Generate an uniqu ID
     * @return {number}
     */
    value: function generateId() {
      return Date.now() + parseInt(Math.random() * 100000);
    }
    /**
     * Convert degree to randian
     * @param {Number} deg
     */

  }, {
    key: "fromDegree",
    value: function fromDegree(deg) {
      return deg * Math.PI / 180;
    }
    /**
     * Convert radian to degree
     * @param {Number} rad
     */

  }, {
    key: "toDegree",
    value: function toDegree(rad) {
      return Math.round(rad * 180 / Math.PI * 100) / 100;
    }
    /**
     * Get random value within an interval
     * @param {Number} min
     * @param {Number} max
     */

  }, {
    key: "randomInterval",
    value: function randomInterval(min, max) {
      return Math.random() * (max - min) + min;
    }
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} t
     * @return {number}
     */

  }, {
    key: "cosineInterpolate",
    value: function cosineInterpolate(a, b, t) {
      var c = (1 - Math.cos(t * 3.1415927)) * .5;
      return (1. - c) * a + c * b;
    }
    /**
     * @param {number[]} intervalOutputs
     * @param {number[]} intervalInputs
     * @param {number} input
     * @param {number} outOfRange
     * @return {number}
     */

  }, {
    key: "fromInterval",
    value: function fromInterval(intervalOutputs, intervalInputs, input) {
      var outOfRange = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      if (input < intervalInputs[0] || input > intervalInputs[1]) {
        return outOfRange;
      }

      return intervalOutputs[0] + input / (intervalInputs[1] - intervalInputs[0]) * (intervalOutputs[1] - intervalOutputs[0]);
    }
    /**
     * @param {number} intensityParam
     */

  }, {
    key: "getIntensity",
    value: function getIntensity(intensityParam) {
      return 1 / (1 + 0.045 * intensityParam + 0.0075 * Math.pow(intensityParam, 2));
    }
  }]);
  return Maths;
}();

var _default = Maths;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],84:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _StringHelper = _interopRequireDefault(require("./StringHelper.js"));

var _ClassHelper = _interopRequireDefault(require("./ClassHelper.js"));

var _SystemError = _interopRequireDefault(require("../exception/type/SystemError.js"));

/**
 * @class {ObjectHelper}
 */
var ObjectHelper = /*#__PURE__*/function () {
  function ObjectHelper() {
    (0, _classCallCheck2["default"])(this, ObjectHelper);
  }

  (0, _createClass2["default"])(ObjectHelper, null, [{
    key: "isEqual",

    /**
     * @param {Object} object1
     * @param {Object} object2
     * @return {boolean}
     */
    value: function isEqual(object1, object2) {
      return !Object.getOwnPropertyNames(object1).find(function (prop) {
        return !object2 || object1[prop] !== object2[prop];
      });
    }
    /**
     * @param {Object} target
     * @param {Object} source
     */

  }, {
    key: "assign",
    value: function assign(target, source) {
      var _this = this;

      Object.getOwnPropertyNames(source).forEach(function (srcProperty) {
        var setterProperty = "set".concat(_StringHelper["default"].capFirstLetter(srcProperty));
        var valProperty = source[srcProperty];

        if (_.isObject(valProperty)) {
          _this.assign(target[srcProperty], valProperty);
        } else {
          target && target[setterProperty](valProperty);
        }
      });
    }
    /**
     * @param {Object} object
     * @param {Function|ArrayConstructor} prototype
     * @returns {{index: number|null, key: string, value: *}[]}
     */

  }, {
    key: "getProperties",
    value: function getProperties(object, prototype) {
      if (prototype === Array) {
        return _.isArray(object) ? object.map(function (value, index) {
          return {
            index: index,
            key: 'element',
            value: value
          };
        }) : [];
      } else if (_.isObject(object)) {
        try {
          var tempPrototype = new prototype();
          return Object.getOwnPropertyNames(tempPrototype).map(function (prop) {
            var value;

            if (object) {
              if (object.constructor === Object) {
                value = object[prop];
              } else {
                var getter = _ClassHelper["default"].getGetter(object, prop);

                value = object[getter]();
              }
            }

            return {
              key: prop,
              value: value,
              index: null
            };
          });
        } catch (e) {
          throw new _SystemError["default"]("ObjectHelper (\"".concat(prototype.name, "\") : ").concat(e.message));
        }
      }
    }
    /**
     * @param {Object|Array} object
     * @param {string} property
     * @param {Object|Array} propertyValue
     */

  }, {
    key: "setProperty",
    value: function () {
      var _setProperty = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(object, property, propertyValue) {
        var concatAttr, setter;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_.isArray(object)) {
                  _context.next = 4;
                  break;
                }

                object.push(propertyValue);
                _context.next = 17;
                break;

              case 4:
                if (!_.isArray(propertyValue)) {
                  _context.next = 13;
                  break;
                }

                concatAttr = "concat".concat(_StringHelper["default"].capFirstLetter(property));

                if (!_.isFunction(object[concatAttr])) {
                  _context.next = 10;
                  break;
                }

                object[concatAttr](propertyValue);
                _context.next = 11;
                break;

              case 10:
                throw new _SystemError["default"]("Method ".concat(concatAttr, " not defined for ").concat(object.constructor.name));

              case 11:
                _context.next = 17;
                break;

              case 13:
                if (!(object !== null && object !== undefined)) {
                  _context.next = 17;
                  break;
                }

                setter = _ClassHelper["default"].getSetter(object, property);
                _context.next = 17;
                return object[setter](propertyValue);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function setProperty(_x, _x2, _x3) {
        return _setProperty.apply(this, arguments);
      }

      return setProperty;
    }()
  }]);
  return ObjectHelper;
}();

var _default = ObjectHelper;
exports["default"] = _default;

},{"../exception/type/SystemError.js":35,"./ClassHelper.js":80,"./StringHelper.js":86,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/regenerator":26}],85:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var RegexHelper = function RegexHelper() {
  (0, _classCallCheck2["default"])(this, RegexHelper);
};

exports["default"] = RegexHelper;
(0, _defineProperty2["default"])(RegexHelper, "FIELD_NAME_SIZE", /^size\[([^\]]+)]$/);
(0, _defineProperty2["default"])(RegexHelper, "FIELD_NAME_ARRAY_INDEX", /^([^\[]+)\[([0-9]+)]$/);
(0, _defineProperty2["default"])(RegexHelper, "NEXT_JUMP", /^\[NEXT].*/);

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],86:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var StringHelper = /*#__PURE__*/function () {
  function StringHelper() {
    (0, _classCallCheck2["default"])(this, StringHelper);
  }

  (0, _createClass2["default"])(StringHelper, null, [{
    key: "capFirstLetter",

    /**
     * @param {string} string
     * @return {string}
     */
    value: function capFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    /**
     * @param {string} string
     * @return {string}
     */

  }, {
    key: "lowFirstLetter",
    value: function lowFirstLetter(string) {
      return string.charAt(0).toLowerCase() + string.slice(1);
    }
  }]);
  return StringHelper;
}();

exports["default"] = StringHelper;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],87:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * Vector class.
 * Define a vector coordinate (X, Y)
 */
var Vector = /*#__PURE__*/function () {
  function Vector() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      x: 0,
      y: 0,
      z: 0
    },
        x = _ref.x,
        y = _ref.y,
        z = _ref.z;

    (0, _classCallCheck2["default"])(this, Vector);
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }
  /**
   * @param {number|string} x
   */


  (0, _createClass2["default"])(Vector, [{
    key: "setX",
    value: function setX(x) {
      this.x = parseFloat(x) || 0;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getX",
    value: function getX() {
      return this.x;
    }
    /**
     * @param {number|string} y
     */

  }, {
    key: "setY",
    value: function setY(y) {
      this.y = parseFloat(y) || 0;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getY",
    value: function getY() {
      return this.y;
    }
    /**
     * @param {number|string} z
     */

  }, {
    key: "setZ",
    value: function setZ(z) {
      this.z = parseFloat(z) || 0;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getZ",
    value: function getZ() {
      return this.z;
    }
    /**
     * @param {Vector} vector
     * @return {boolean}
     */

  }, {
    key: "equals",
    value: function equals(vector) {
      return this.x === vector.x && this.y === vector.y && this.z === vector.z;
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "abs",
    value: function abs() {
      return new Vector({
        x: Math.abs(this.getX()),
        y: Math.abs(this.getY())
      });
    }
    /**
     * @return {Vector}
     */

  }], [{
    key: "zero",
    value: function zero() {
      return new Vector({
        x: 0,
        y: 0
      });
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "one",
    value: function one() {
      return new Vector({
        x: 1,
        y: 1
      });
    }
    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {number}
     */

  }, {
    key: "cross",
    value: function cross(vectorA, vectorB) {
      return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
    }
    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {number}
     */

  }, {
    key: "dot",
    value: function dot(vectorA, vectorB) {
      return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
    }
    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {Vector}
     */

  }, {
    key: "add",
    value: function add(vectorA, vectorB) {
      return new Vector({
        x: vectorA.x + vectorB.x,
        y: vectorA.y + vectorB.y,
        z: vectorA.z + vectorB.z
      });
    }
    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {Vector}
     */

  }, {
    key: "subtract",
    value: function subtract(vectorA, vectorB) {
      return new Vector({
        x: vectorA.x - vectorB.x,
        y: vectorA.y - vectorB.y,
        z: vectorA.z - vectorB.z
      });
    }
    /**
     * @param {Vector} vector
     * @param {number} value
     * @return {Vector}
     */

  }, {
    key: "multiply",
    value: function multiply(vector, value) {
      return new Vector({
        x: vector.x * value,
        y: vector.y * value,
        z: vector.z * value
      });
    }
    /**
     * @param {Vector} vector
     * @return {Vector}
     */

  }, {
    key: "sign",
    value: function sign(vector) {
      return this.linearDivide(vector, this.abs(vector));
    }
    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {Vector}
     */

  }, {
    key: "linearMultiply",
    value: function linearMultiply(vectorA, vectorB) {
      return new Vector({
        x: vectorA.x * vectorB.x,
        y: vectorA.y * vectorB.y,
        z: vectorA.z * vectorB.z
      });
    }
    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {Vector}
     */

  }, {
    key: "linearDivide",
    value: function linearDivide(vectorA, vectorB) {
      return new Vector({
        x: vectorB.x ? vectorA.x / vectorB.x : 0,
        y: vectorB.y ? vectorA.y / vectorB.y : 0,
        z: vectorB.z ? vectorA.z / vectorB.z : 0
      });
    }
    /**
     * @param {Vector} vector
     * @param {number} value
     * @return {Vector}
     */

  }, {
    key: "divide",
    value: function divide(vector, value) {
      return new Vector({
        x: vector.x / value,
        y: vector.y / value,
        z: vector.z / value
      });
    }
    /**
     * @param {Vector} vector
     * @return {number}
     */

  }, {
    key: "length",
    value: function length(vector) {
      return Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));
    }
    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {number}
     */

  }, {
    key: "distance",
    value: function distance(vectorA, vectorB) {
      return Math.sqrt(Math.pow(vectorB.x - vectorA.x, 2) + Math.pow(vectorB.y - vectorA.y, 2));
    }
    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @param {number} constant
     * @return {Vector}
     */

  }, {
    key: "lerp",
    value: function lerp(vectorA, vectorB, constant) {
      return this.add(this.multiply(vectorA, constant), this.multiply(vectorB, 1 - constant));
    }
    /**
     * @param {Vector} vector
     * @return {Vector}
     */

  }, {
    key: "normalize",
    value: function normalize(vector) {
      return this.divide(vector, this.length(vector));
    }
    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {number}
     */

  }, {
    key: "angle",
    value: function angle(vectorA, vectorB) {
      var signedAngleRadian = Math.atan2(vectorB.y, vectorB.x) - Math.atan2(vectorA.y, vectorA.x);
      return signedAngleRadian || 0;
    }
    /**
     * @param {Size} size
     * @return {Vector}
     */

  }, {
    key: "fromSize",
    value: function fromSize(size) {
      return new Vector({
        x: size.getWidth(),
        y: size.getHeight()
      });
    }
    /**
     * @param {Vector} vector
     * @return {Vector}
     */

  }, {
    key: "abs",
    value: function abs(vector) {
      return new Vector({
        x: Math.abs(vector.x),
        y: Math.abs(vector.y)
      });
    }
    /**
     * @param {number} t
     * @param {number} t1
     * @param {Vector} v1
     * @param {number} t2
     * @param {Vector} v2
     * @return {Vector}
     */

  }, {
    key: "interpolate",
    value: function interpolate(t, t1, v1, t2, v2) {
      return Vector.add(v1, Vector.multiply(Vector.subtract(v2, v1), (t - t1) / (t2 - t1)));
    }
  }]);
  return Vector;
}();

var _default = Vector;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],88:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "WorldData", {
  enumerable: true,
  get: function get() {
    return _WorldData["default"];
  }
});
Object.defineProperty(exports, "UnitManagerData", {
  enumerable: true,
  get: function get() {
    return _UnitManagerData["default"];
  }
});
Object.defineProperty(exports, "UnitData", {
  enumerable: true,
  get: function get() {
    return _UnitData["default"];
  }
});
Object.defineProperty(exports, "ComponentData", {
  enumerable: true,
  get: function get() {
    return _ComponentData["default"];
  }
});
Object.defineProperty(exports, "Vector", {
  enumerable: true,
  get: function get() {
    return _Vector["default"];
  }
});
Object.defineProperty(exports, "Style", {
  enumerable: true,
  get: function get() {
    return _Style["default"];
  }
});
Object.defineProperty(exports, "Size", {
  enumerable: true,
  get: function get() {
    return _Size["default"];
  }
});
Object.defineProperty(exports, "CameraData", {
  enumerable: true,
  get: function get() {
    return _CameraData["default"];
  }
});
Object.defineProperty(exports, "PhysicsData", {
  enumerable: true,
  get: function get() {
    return _PhysicsData["default"];
  }
});
Object.defineProperty(exports, "PhysicsEngineData", {
  enumerable: true,
  get: function get() {
    return _PhysicsEngineData["default"];
  }
});
Object.defineProperty(exports, "AssetsManagerData", {
  enumerable: true,
  get: function get() {
    return _AssetsManagerData["default"];
  }
});
Object.defineProperty(exports, "AssetData", {
  enumerable: true,
  get: function get() {
    return _AssetData["default"];
  }
});
Object.defineProperty(exports, "FolderData", {
  enumerable: true,
  get: function get() {
    return _FolderData["default"];
  }
});
Object.defineProperty(exports, "DynamicAttribute", {
  enumerable: true,
  get: function get() {
    return _DynamicAttribute["default"];
  }
});
Object.defineProperty(exports, "BlobData", {
  enumerable: true,
  get: function get() {
    return _BlobData["default"];
  }
});
Object.defineProperty(exports, "ScriptManagerData", {
  enumerable: true,
  get: function get() {
    return _ScriptManagerData["default"];
  }
});
Object.defineProperty(exports, "AScriptData", {
  enumerable: true,
  get: function get() {
    return _AScriptData["default"];
  }
});
Object.defineProperty(exports, "ANodeData", {
  enumerable: true,
  get: function get() {
    return _ANodeData["default"];
  }
});
Object.defineProperty(exports, "AssetTypeData", {
  enumerable: true,
  get: function get() {
    return _AssetTypeData["default"];
  }
});
Object.defineProperty(exports, "RegistryData", {
  enumerable: true,
  get: function get() {
    return _RegistryData["default"];
  }
});
Object.defineProperty(exports, "FunctionData", {
  enumerable: true,
  get: function get() {
    return _FunctionData["default"];
  }
});
Object.defineProperty(exports, "StackOperation", {
  enumerable: true,
  get: function get() {
    return _StackOperation["default"];
  }
});
Object.defineProperty(exports, "PreferenceData", {
  enumerable: true,
  get: function get() {
    return _PreferenceData["default"];
  }
});
Object.defineProperty(exports, "GameInputPreferenceData", {
  enumerable: true,
  get: function get() {
    return _GameInputPreferenceData["default"];
  }
});
Object.defineProperty(exports, "GameInputData", {
  enumerable: true,
  get: function get() {
    return _GameInputData["default"];
  }
});
Object.defineProperty(exports, "MaskGroupPreferenceData", {
  enumerable: true,
  get: function get() {
    return _MaskGroupPreferenceData["default"];
  }
});
Object.defineProperty(exports, "MaskGroupData", {
  enumerable: true,
  get: function get() {
    return _MaskGroupData["default"];
  }
});
Object.defineProperty(exports, "MaterialData", {
  enumerable: true,
  get: function get() {
    return _MaterialData["default"];
  }
});
Object.defineProperty(exports, "SceneData", {
  enumerable: true,
  get: function get() {
    return _SceneData["default"];
  }
});
Object.defineProperty(exports, "SceneManagerData", {
  enumerable: true,
  get: function get() {
    return _SceneManagerData["default"];
  }
});
Object.defineProperty(exports, "TagPreferenceData", {
  enumerable: true,
  get: function get() {
    return _TagPreferenceData["default"];
  }
});
Object.defineProperty(exports, "TagData", {
  enumerable: true,
  get: function get() {
    return _TagData["default"];
  }
});
Object.defineProperty(exports, "LayerGroupPreferenceData", {
  enumerable: true,
  get: function get() {
    return _LayerGroupPreferenceData["default"];
  }
});
Object.defineProperty(exports, "LayerGroupData", {
  enumerable: true,
  get: function get() {
    return _LayerGroupData["default"];
  }
});

var _WorldData = _interopRequireDefault(require("../app/project/data/WorldData.js"));

var _UnitManagerData = _interopRequireDefault(require("../app/project/data/UnitManagerData.js"));

var _UnitData = _interopRequireDefault(require("../app/project/data/UnitData.js"));

var _ComponentData = _interopRequireDefault(require("../app/project/data/ComponentData.js"));

var _Vector = _interopRequireDefault(require("../app/utils/Vector.js"));

var _Style = _interopRequireDefault(require("../app/pobject/Style.js"));

var _Size = _interopRequireDefault(require("../app/pobject/Size.js"));

var _CameraData = _interopRequireDefault(require("../app/project/data/CameraData.js"));

var _PhysicsData = _interopRequireDefault(require("../app/project/data/PhysicsData.js"));

var _PhysicsEngineData = _interopRequireDefault(require("../app/project/data/PhysicsEngineData.js"));

var _AssetsManagerData = _interopRequireDefault(require("../app/project/data/AssetsManagerData.js"));

var _AssetData = _interopRequireDefault(require("../app/project/data/AssetData.js"));

var _FolderData = _interopRequireDefault(require("../app/project/data/FolderData.js"));

var _DynamicAttribute = _interopRequireDefault(require("../app/pobject/DynamicAttribute.js"));

var _BlobData = _interopRequireDefault(require("../app/project/data/BlobData.js"));

var _ScriptManagerData = _interopRequireDefault(require("../app/project/data/ScriptManagerData.js"));

var _AScriptData = _interopRequireDefault(require("../app/project/data/AScriptData.js"));

var _ANodeData = _interopRequireDefault(require("../app/project/data/ANodeData.js"));

var _AssetTypeData = _interopRequireDefault(require("../app/project/data/AssetTypeData.js"));

var _RegistryData = _interopRequireDefault(require("../app/project/data/RegistryData.js"));

var _FunctionData = _interopRequireDefault(require("../app/project/data/FunctionData.js"));

var _StackOperation = _interopRequireDefault(require("../app/operation/StackOperation.js"));

var _PreferenceData = _interopRequireDefault(require("../app/project/data/PreferenceData.js"));

var _GameInputPreferenceData = _interopRequireDefault(require("../app/project/data/GameInputPreferenceData.js"));

var _GameInputData = _interopRequireDefault(require("../app/project/data/GameInputData.js"));

var _MaskGroupPreferenceData = _interopRequireDefault(require("../app/project/data/MaskGroupPreferenceData.js"));

var _MaskGroupData = _interopRequireDefault(require("../app/project/data/MaskGroupData.js"));

var _MaterialData = _interopRequireDefault(require("../app/project/data/MaterialData.js"));

var _SceneData = _interopRequireDefault(require("../app/project/data/SceneData.js"));

var _SceneManagerData = _interopRequireDefault(require("../app/project/data/SceneManagerData.js"));

var _TagPreferenceData = _interopRequireDefault(require("../app/project/data/TagPreferenceData.js"));

var _TagData = _interopRequireDefault(require("../app/project/data/TagData.js"));

var _LayerGroupPreferenceData = _interopRequireDefault(require("../app/project/data/LayerGroupPreferenceData.js"));

var _LayerGroupData = _interopRequireDefault(require("../app/project/data/LayerGroupData.js"));

},{"../app/operation/StackOperation.js":39,"../app/pobject/DynamicAttribute.js":41,"../app/pobject/Size.js":42,"../app/pobject/Style.js":43,"../app/project/data/ANodeData.js":48,"../app/project/data/AScriptData.js":49,"../app/project/data/AssetData.js":50,"../app/project/data/AssetTypeData.js":51,"../app/project/data/AssetsManagerData.js":52,"../app/project/data/BlobData.js":53,"../app/project/data/CameraData.js":54,"../app/project/data/ComponentData.js":55,"../app/project/data/FolderData.js":57,"../app/project/data/FunctionData.js":58,"../app/project/data/GameInputData.js":59,"../app/project/data/GameInputPreferenceData.js":60,"../app/project/data/LayerGroupData.js":61,"../app/project/data/LayerGroupPreferenceData.js":62,"../app/project/data/MaskGroupData.js":63,"../app/project/data/MaskGroupPreferenceData.js":64,"../app/project/data/MaterialData.js":65,"../app/project/data/PhysicsData.js":66,"../app/project/data/PhysicsEngineData.js":67,"../app/project/data/PreferenceData.js":68,"../app/project/data/RegistryData.js":69,"../app/project/data/SceneData.js":70,"../app/project/data/SceneManagerData.js":71,"../app/project/data/ScriptManagerData.js":72,"../app/project/data/TagData.js":73,"../app/project/data/TagPreferenceData.js":74,"../app/project/data/UnitData.js":75,"../app/project/data/UnitManagerData.js":76,"../app/project/data/WorldData.js":77,"../app/utils/Vector.js":87,"@babel/runtime/helpers/interopRequireDefault":12}]},{},[88])(88)
});
