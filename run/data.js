(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.EngineData = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],7:[function(require,module,exports){
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
},{"./setPrototypeOf":10}],8:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],9:[function(require,module,exports){
var _typeof = require("@babel/runtime/helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"./assertThisInitialized":1,"@babel/runtime/helpers/typeof":11}],10:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":12}],14:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var EntityProps = /*#__PURE__*/function () {
  function EntityProps() {
    (0, _classCallCheck2["default"])(this, EntityProps);
    (0, _defineProperty2["default"])(this, "style", void 0);
    (0, _defineProperty2["default"])(this, "name", void 0);
    (0, _defineProperty2["default"])(this, "position", void 0);
    (0, _defineProperty2["default"])(this, "rotation", void 0);
    (0, _defineProperty2["default"])(this, "size", void 0);
    (0, _defineProperty2["default"])(this, "advancedStyle", void 0);
    (0, _defineProperty2["default"])(this, "noiseConfigs", void 0);
  }

  (0, _createClass2["default"])(EntityProps, [{
    key: "setAdvancedStyle",

    /**
     * @param {Style} advancedStyle
     */
    value: function setAdvancedStyle(advancedStyle) {
      this.advancedStyle = advancedStyle;
    }
    /**
     * @return {Style}
     */

  }, {
    key: "getAdvancedStyle",
    value: function getAdvancedStyle() {
      return this.advancedStyle;
    }
    /**
     * @param {PerlinNoiseConfig} noiseConfigs
     */

  }, {
    key: "setNoiseConfigs",
    value: function setNoiseConfigs(noiseConfigs) {
      this.noiseConfigs = noiseConfigs;
    }
    /**
     * @return {PerlinNoiseConfig}
     */

  }, {
    key: "getNoiseConfigs",
    value: function getNoiseConfigs() {
      return this.noiseConfigs;
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
     * Set the entity's position
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
     * @param {Size} value
     */

  }, {
    key: "setSize",
    value: function setSize(value) {
      this.size = value;
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
     * @param {string} style
     */

  }, {
    key: "setStyle",
    value: function setStyle(style) {
      this.style = style;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getStyle",
    value: function getStyle() {
      return this.style;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setRotation",
    value: function setRotation(value) {
      this.rotation = value;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getRotation",
    value: function getRotation() {
      return this.rotation;
    }
  }]);
  return EntityProps;
}();

var _default = EntityProps;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/interopRequireDefault":8}],15:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * @class {PerlinNoiseConfig}
 */
var PerlinNoiseConfig = /*#__PURE__*/function () {
  function PerlinNoiseConfig() {
    (0, _classCallCheck2["default"])(this, PerlinNoiseConfig);
    this.seed = null;
    this.octaves = null;
    this.amplitude = null;
    this.persistence = null;
    this.smoothness = null;
  }
  /**
   * @param {number} value
   */


  (0, _createClass2["default"])(PerlinNoiseConfig, [{
    key: "setSeed",
    value: function setSeed(value) {
      this.seed = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getSeed",
    value: function getSeed() {
      return this.seed;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setOctaves",
    value: function setOctaves(value) {
      this.octaves = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getOctaves",
    value: function getOctaves() {
      return this.octaves;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setAmplitude",
    value: function setAmplitude(value) {
      this.amplitude = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getAmplitude",
    value: function getAmplitude() {
      return this.amplitude;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setPersistence",
    value: function setPersistence(value) {
      this.persistence = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getPersistence",
    value: function getPersistence() {
      return this.persistence;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setSmoothness",
    value: function setSmoothness(value) {
      this.smoothness = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getSmoothness",
    value: function getSmoothness() {
      return this.smoothness;
    }
  }]);
  return PerlinNoiseConfig;
}();

var _default = PerlinNoiseConfig;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/interopRequireDefault":8}],16:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var PhysicsProps = /*#__PURE__*/function () {
  function PhysicsProps() {
    (0, _classCallCheck2["default"])(this, PhysicsProps);
    (0, _defineProperty2["default"])(this, "velocity", void 0);
    (0, _defineProperty2["default"])(this, "angularVelocity", void 0);
    (0, _defineProperty2["default"])(this, "speed", void 0);
    (0, _defineProperty2["default"])(this, "density", void 0);
    (0, _defineProperty2["default"])(this, "force", void 0);
    (0, _defineProperty2["default"])(this, "fixed", void 0);
    (0, _defineProperty2["default"])(this, "motion", void 0);
  }

  (0, _createClass2["default"])(PhysicsProps, [{
    key: "setVelocity",

    /**
     * @param {Vector} velocity
     */
    value: function setVelocity(velocity) {
      this.velocity = velocity;
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getVelocity",
    value: function getVelocity() {
      return this.velocity;
    }
    /**
     * @param {number} angularVelocity
     */

  }, {
    key: "setAngularVelocity",
    value: function setAngularVelocity(angularVelocity) {
      this.angularVelocity = angularVelocity;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getAngularVelocity",
    value: function getAngularVelocity() {
      return this.angularVelocity;
    }
    /**
     * @param {number} speed
     */

  }, {
    key: "setSpeed",
    value: function setSpeed(speed) {
      this.speed = speed;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getSpeed",
    value: function getSpeed() {
      return this.speed;
    }
    /**
     * @param {number} density
     */

  }, {
    key: "setDensity",
    value: function setDensity(density) {
      this.density = density;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getDensity",
    value: function getDensity() {
      return this.density;
    }
    /**
     * @param {Vector} force
     */

  }, {
    key: "setForce",
    value: function setForce(force) {
      this.force = force;
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getForce",
    value: function getForce() {
      return this.force;
    }
    /**
     * @param {boolean} fixed
     */

  }, {
    key: "setFixed",
    value: function setFixed(fixed) {
      this.fixed = fixed;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getFixed",
    value: function getFixed() {
      return this.fixed;
    }
    /**
     * @param {boolean} motion
     */

  }, {
    key: "setMotion",
    value: function setMotion(motion) {
      this.motion = motion;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getMotion",
    value: function getMotion() {
      return this.motion;
    }
  }]);
  return PhysicsProps;
}();

var _default = PhysicsProps;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/interopRequireDefault":8}],17:[function(require,module,exports){
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
   * @param {number} width
   */


  (0, _createClass2["default"])(Size, [{
    key: "setWidth",
    value: function setWidth(width) {
      this.width = width;
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
     * @param {number} height
     */

  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.height = height;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }
  }]);
  return Size;
}();

var _default = Size;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/typeof":11}],18:[function(require,module,exports){
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
 * @class {Style}
 */
var Style = /*#__PURE__*/function () {
  function Style() {
    (0, _classCallCheck2["default"])(this, Style);
    (0, _defineProperty2["default"])(this, "color", void 0);
    (0, _defineProperty2["default"])(this, "fillColor", void 0);
    (0, _defineProperty2["default"])(this, "backgroundImageRepeat", void 0);
    (0, _defineProperty2["default"])(this, "opacity", void 0);
    (0, _defineProperty2["default"])(this, "borderSize", void 0);
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
     * @param {boolean} backgroundImageRepeat
     */

  }, {
    key: "setBackgroundImageRepeat",
    value: function setBackgroundImageRepeat(backgroundImageRepeat) {
      this.backgroundImageRepeat = backgroundImageRepeat;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getBackgroundImageRepeat",
    value: function getBackgroundImageRepeat() {
      return this.backgroundImageRepeat;
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
     * @return {number}
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
  }]);
  return Style;
}();

var _default = Style;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/interopRequireDefault":8}],19:[function(require,module,exports){
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "entityId", void 0);
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
     * @param {number} entityId
     */

  }, {
    key: "setEntityId",
    value: function setEntityId(entityId) {
      this.entityId = entityId;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getEntityId",
    value: function getEntityId() {
      return this.entityId;
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

},{"./Data.js":20,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],20:[function(require,module,exports){
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
     * @param {number} id
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
  }]);
  return Data;
}();

(0, _defineProperty2["default"])(Data, "instance", void 0);
var _default = Data;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/interopRequireDefault":8}],21:[function(require,module,exports){
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

var _Size = _interopRequireDefault(require("../../pobject/Size.js"));

var _Vector = _interopRequireDefault(require("../../utils/Vector.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Class define all entity's data and props (getters and setters)
 * @abstract
 * @extends {Data}
 */
var EntityData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(EntityData, _Data);

  var _super = _createSuper(EntityData);

  /**
   * @param {EntityProps} props
   */
  function EntityData() {
    var _this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, EntityData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "shape", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "radius", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "vertices", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "physics", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "textureId", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectable", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "locked", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "visible", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "clonable", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "subEntity", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "style", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "entityLinkIds", void 0);
    _this.id = _Maths["default"].generateId();
    _this.selectable = true;
    _this.locked = false;
    _this.visible = false;
    _this.clonable = true;
    _this.subEntity = false;
    _this.entityLinkIds = [];

    _this.setProps(props);

    return _this;
  }
  /**
   * @param {number} id
   */


  (0, _createClass2["default"])(EntityData, [{
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @param {string} shape
     */

  }, {
    key: "setShape",
    value: function setShape(shape) {
      this.shape = shape;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getShape",
    value: function getShape() {
      return this.shape;
    }
    /**
     * @param {number} radius
     */

  }, {
    key: "setRadius",
    value: function setRadius(radius) {
      this.radius = radius;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getRadius",
    value: function getRadius() {
      return this.radius;
    }
    /**
     * @param {number[]} vertices
     */

  }, {
    key: "setVertices",
    value: function setVertices(vertices) {
      this.vertices = vertices;
    }
    /**
     * @return {number[]}
     */

  }, {
    key: "getVertices",
    value: function getVertices() {
      return this.vertices;
    }
    /**
     * @param {Style} advancedStyle
     */

  }, {
    key: "setAdvancedStyle",
    value: function setAdvancedStyle(advancedStyle) {
      this.advancedStyle = advancedStyle;
    }
    /**
     * @return {Style}
     */

  }, {
    key: "getAdvancedStyle",
    value: function getAdvancedStyle() {
      return this.advancedStyle;
    }
    /**
     * @param {PerlinNoiseConfig} noiseConfigs
     */

  }, {
    key: "setNoiseConfigs",
    value: function setNoiseConfigs(noiseConfigs) {
      this.noiseConfigs = noiseConfigs;
    }
    /**
     * @return {PerlinNoiseConfig}
     */

  }, {
    key: "getNoiseConfigs",
    value: function getNoiseConfigs() {
      return this.noiseConfigs;
    }
    /**
     * @param {EntityProps} props
     */

  }, {
    key: "setProps",
    value: function setProps(props) {
      this.props = props;
      props.style = props.style || {
        color: '#000000',
        fillColor: ''
      };
      this.name = props.name;
      this.position = props.position;
      this.rotation = props.rotation || 0;
      this.size = props.size || new _Size["default"](1);
      this.style = props.style;
      this.advancedStyle = Object.assign({
        backgroundImageBlob: '',
        backgroundImageRepeat: false
      }, props.advancedStyle || {});
      this.noiseConfigs = props.noiseConfigs || {};
    }
    /**
     * @return {EntityProps}
     */

  }, {
    key: "getProps",
    value: function getProps() {
      return this.props;
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
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @param {string} backgroundImageBlob
     */

  }, {
    key: "setBackgroundImageBlob",
    value: function setBackgroundImageBlob(backgroundImageBlob) {
      this.advancedStyle.backgroundImageBlob = backgroundImageBlob;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getBackgroundImageBlob",
    value: function getBackgroundImageBlob() {
      return this.advancedStyle.backgroundImageBlob;
    }
    /**
     * @param {boolean} repeat
     */

  }, {
    key: "setBackgroundImageRepeat",
    value: function setBackgroundImageRepeat(repeat) {
      this.advancedStyle.backgroundImageRepeat = repeat;
      this.setGenerated(false);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getBackgroundImageRepeat",
    value: function getBackgroundImageRepeat() {
      return this.advancedStyle.backgroundImageRepeat;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isBackgroundImageRepeat",
    value: function isBackgroundImageRepeat() {
      return this.getBackgroundImageRepeat();
    }
    /**
     * Set the entity's position
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
     * @param {string} x
     */

  }, {
    key: "setPositionX",
    value: function setPositionX(x) {
      var _this$position = this.position,
          y = _this$position.y,
          z = _this$position.z;
      this.setPositionAndGenerate(new _Vector["default"]({
        x: parseInt(x),
        y: y,
        z: z
      }));
    }
    /**
     * @param {string} y
     */

  }, {
    key: "setPositionY",
    value: function setPositionY(y) {
      var _this$position2 = this.position,
          x = _this$position2.x,
          z = _this$position2.z;
      this.setPositionAndGenerate(new _Vector["default"]({
        x: x,
        y: parseInt(y),
        z: z
      }));
    }
    /**
     * @param {string} z
     */

  }, {
    key: "setPositionZ",
    value: function setPositionZ(z) {
      var _this$position3 = this.position,
          x = _this$position3.x,
          y = _this$position3.y;
      this.setPositionAndGenerate({
        x: x,
        y: y,
        z: parseInt(z)
      });
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
    /**
     * @param {number} value
     */

  }, {
    key: "setRotation",
    value: function setRotation(value) {
      this.rotation = value;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getRotation",
    value: function getRotation() {
      return this.rotation;
    }
    /**
     * @param {{width: number, height: number}} value
     */

  }, {
    key: "setSize",
    value: function setSize(value) {
      this.size = value;
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
     * @return {number}
     */

  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.size.width;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.size.height;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getRotationDegree",
    value: function getRotationDegree() {
      return _Maths["default"].toDegree(this.rotation);
    }
    /**
     * @param {string|number} width
     */

  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this.setSizeAndGenerate({
        width: parseInt(width),
        height: this.size.height
      });
    }
    /**
     * @param {string|number} height
     */

  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.setSizeAndGenerate({
        width: this.size.width,
        height: parseInt(height)
      });
    }
    /**
     * @param {number} angle
     */

  }, {
    key: "setRotationDegree",
    value: function setRotationDegree(angle) {
      this.setRotationAndGenerate(_Maths["default"].fromDegree(angle));
    }
    /**
     * @param {string} style
     */

  }, {
    key: "setStyle",
    value: function setStyle(style) {
      this.style = style;
    }
    /**
     * @return {Style}
     */

  }, {
    key: "getStyle",
    value: function getStyle() {
      return this.style;
    }
    /**
     * @param {boolean} value
     */

  }, {
    key: "setVisible",
    value: function setVisible(value) {
      this.visible = value;
    }
    /**
     * @param {boolean} selectable
     */

  }, {
    key: "setSelectable",
    value: function setSelectable(selectable) {
      this.selectable = selectable;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getSelectable",
    value: function getSelectable() {
      return this.selectable;
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
     * @return {boolean}
     */

  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.selected;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.visible;
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
      this.locked = locked;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getLocked",
    value: function getLocked() {
      return this.locked;
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
     * @param {boolean} clonable
     */

  }, {
    key: "setClonable",
    value: function setClonable(clonable) {
      this.clonable = clonable;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getClonable",
    value: function getClonable() {
      return this.clonable;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setSeed",
    value: function setSeed(value) {
      this.noiseConfigs.seed = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getSeed",
    value: function getSeed() {
      return this.noiseConfigs.seed;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setOctaves",
    value: function setOctaves(value) {
      this.noiseConfigs.octaves = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getOctaves",
    value: function getOctaves() {
      return this.noiseConfigs.octaves;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setAmplitude",
    value: function setAmplitude(value) {
      this.noiseConfigs.amplitude = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getAmplitude",
    value: function getAmplitude() {
      return this.noiseConfigs.amplitude;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setPersistence",
    value: function setPersistence(value) {
      this.noiseConfigs.persistence = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getPersistence",
    value: function getPersistence() {
      return this.noiseConfigs.persistence;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setSmoothness",
    value: function setSmoothness(value) {
      this.noiseConfigs.smoothness = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getSmoothness",
    value: function getSmoothness() {
      return this.noiseConfigs.smoothness;
    }
    /**
     * @param {PhysicsProps} physics
     */

  }, {
    key: "setPhysics",
    value: function setPhysics(physics) {
      this.physics = physics;
    }
    /**
     * @return {PhysicsProps}
     */

  }, {
    key: "getPhysics",
    value: function getPhysics() {
      return this.physics;
    }
    /**
     * @param {number} textureId
     */

  }, {
    key: "setTextureId",
    value: function setTextureId(textureId) {
      this.textureId = textureId;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getTextureId",
    value: function getTextureId() {
      return this.textureId;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getSubEntity",
    value: function getSubEntity() {
      return this.subEntity;
    }
    /**
     * @param {boolean} subEntity
     */

  }, {
    key: "setSubEntity",
    value: function setSubEntity(subEntity) {
      this.subEntity = subEntity;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isSubEntity",
    value: function isSubEntity() {
      return this.getSubEntity();
    }
    /**
     * @return {number[]}
     */

  }, {
    key: "getEntityLinkIds",
    value: function getEntityLinkIds() {
      return this.entityLinkIds;
    }
    /**
     * @param {number[]} ids
     */

  }, {
    key: "setEntityLinkIds",
    value: function setEntityLinkIds(ids) {
      this.entityLinkIds = ids;
    }
  }]);
  return EntityData;
}(_Data2["default"]);

EntityData.shapes = {
  ELLIPSE: 'ellipse',
  RECT: 'rect',
  LINE: 'line',
  POLY: 'poly',
  CIRCLE: 'circle',
  ATTACH: 'attach',
  GROUP: 'group',
  VIRTUAL: 'virtual',
  COMPONENT: 'component'
};
var _default = EntityData;
exports["default"] = _default;

},{"../../pobject/Size.js":17,"../../utils/Maths.js":31,"../../utils/Vector.js":32,"./Data.js":20,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],22:[function(require,module,exports){
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {EntityManagerData}
 * @extends {Data}
 */
var EntityManagerData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(EntityManagerData, _Data);

  var _super = _createSuper(EntityManagerData);

  function EntityManagerData() {
    var _this;

    (0, _classCallCheck2["default"])(this, EntityManagerData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "entities", void 0);
    return _this;
  }

  (0, _createClass2["default"])(EntityManagerData, [{
    key: "setEntities",

    /**
     * @param {EntityData} entities
     */
    value: function setEntities(entities) {
      this.entities = entities;
    }
    /**
     * @return {EntityData[]}
     */

  }, {
    key: "getEntities",
    value: function getEntities() {
      return this.entities;
    }
  }]);
  return EntityManagerData;
}(_Data2["default"]);

var _default = EntityManagerData;
exports["default"] = _default;

},{"./Data.js":20,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],23:[function(require,module,exports){
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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var MeshData = /*#__PURE__*/function () {
  function MeshData() {
    (0, _classCallCheck2["default"])(this, MeshData);
    (0, _defineProperty2["default"])(this, "size", void 0);
    (0, _defineProperty2["default"])(this, "position", void 0);
    (0, _defineProperty2["default"])(this, "dataUrl", void 0);
  }

  (0, _createClass2["default"])(MeshData, [{
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
  return MeshData;
}();

var _default = MeshData;
exports["default"] = _default;

},{"@babel/runtime/helpers/asyncToGenerator":2,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/regenerator":13}],24:[function(require,module,exports){
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

},{"./Data.js":20,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],25:[function(require,module,exports){
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

},{"./Data.js":20,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],26:[function(require,module,exports){
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {TerrainData}
 * @extends {Data}
 */
var TerrainData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(TerrainData, _Data);

  var _super = _createSuper(TerrainData);

  function TerrainData() {
    var _this;

    (0, _classCallCheck2["default"])(this, TerrainData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "entityId", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "chunksNbr", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "chunkIds", void 0);
    return _this;
  }

  (0, _createClass2["default"])(TerrainData, [{
    key: "setEntityId",

    /**
     * @param {number} entityId
     */
    value: function setEntityId(entityId) {
      this.entityId = entityId;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getEntityId",
    value: function getEntityId() {
      return this.entityId;
    }
    /**
     * @param {number} chunksNbr
     */

  }, {
    key: "setChunksNbr",
    value: function setChunksNbr(chunksNbr) {
      this.chunksNbr = chunksNbr;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getChunksNbr",
    value: function getChunksNbr() {
      return this.chunksNbr;
    }
    /**
     * @param {number[]} chunkIds
     */

  }, {
    key: "setChunkIds",
    value: function setChunkIds(chunkIds) {
      this.chunkIds = chunkIds;
    }
    /**
     * @return {number[]}
     */

  }, {
    key: "getChunkIds",
    value: function getChunkIds() {
      return this.chunkIds;
    }
    /**
     * @param {Size} size
     */

  }, {
    key: "setSize",
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
  }]);
  return TerrainData;
}(_Data2["default"]);

var _default = TerrainData;
exports["default"] = _default;

},{"./Data.js":20,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],27:[function(require,module,exports){
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {TerrainManagerData}
 * @extends {Data}
 */
var TerrainManagerData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(TerrainManagerData, _Data);

  var _super = _createSuper(TerrainManagerData);

  function TerrainManagerData() {
    var _this;

    (0, _classCallCheck2["default"])(this, TerrainManagerData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "terrains", void 0);
    return _this;
  }

  (0, _createClass2["default"])(TerrainManagerData, [{
    key: "getTerrains",

    /**
     * @return {Terrain[]}
     */
    value: function getTerrains() {
      return this.terrains;
    }
    /**
     * @param {Terrain[]} terrains
     */

  }, {
    key: "setTerrains",
    value: function setTerrains(terrains) {
      this.terrains = terrains;
    }
  }]);
  return TerrainManagerData;
}(_Data2["default"]);

var _default = TerrainManagerData;
exports["default"] = _default;

},{"./Data.js":20,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],28:[function(require,module,exports){
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @abstract
 * @extends {Data}
 */
var TextureData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(TextureData, _Data);

  var _super = _createSuper(TextureData);

  function TextureData() {
    var _this;

    (0, _classCallCheck2["default"])(this, TextureData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mesh", void 0);
    return _this;
  }

  (0, _createClass2["default"])(TextureData, [{
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
     * @param {Mesh} mesh
     */

  }, {
    key: "setMesh",
    value: function setMesh(mesh) {
      this.mesh = mesh;
    }
    /**
     * @return {Mesh}
     */

  }, {
    key: "getMesh",
    value: function getMesh() {
      return this.mesh;
    }
  }]);
  return TextureData;
}(_Data2["default"]);

var _default = TextureData;
exports["default"] = _default;

},{"./Data.js":20,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],29:[function(require,module,exports){
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {TextureManagerData}
 * @extends {Data}
 */
var TextureManagerData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(TextureManagerData, _Data);

  var _super = _createSuper(TextureManagerData);

  function TextureManagerData() {
    var _this;

    (0, _classCallCheck2["default"])(this, TextureManagerData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "textures", void 0);
    return _this;
  }

  (0, _createClass2["default"])(TextureManagerData, [{
    key: "getTextures",

    /**
     * @return {Texture[]}
     */
    value: function getTextures() {
      return this.textures;
    }
    /**
     * @param {Texture[]} textures
     */

  }, {
    key: "setTextures",
    value: function setTextures(textures) {
      this.textures = textures;
    }
  }]);
  return TextureManagerData;
}(_Data2["default"]);

var _default = TextureManagerData;
exports["default"] = _default;

},{"./Data.js":20,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],30:[function(require,module,exports){
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {WorldData}
 * @extends {Data}
 *
 * @property {AiEngine} aiEngine
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "entityManager", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "camera", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "physics", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "terrainManager", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "textureManager", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "cameraEntityId", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "resolution", void 0);
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
        throw new TypeError('Cannot set the new world, data must be instance of World class');
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      throw new TypeError('World.reload must be implemented!');
    }
    /**
     * @param {EntityManagerData} entityManager
     */

  }, {
    key: "setEntityManager",
    value: function setEntityManager(entityManager) {
      this.entityManager = entityManager;
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
     * @param {PhysicsData} physics
     */

  }, {
    key: "setPhysics",
    value: function setPhysics(physics) {
      this.physics = physics;
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
     * @param {TextureManagerData} textureManager
     */

  }, {
    key: "setTextureManager",
    value: function setTextureManager(textureManager) {
      this.textureManager = textureManager;
    }
    /**
     * Get the physics manager
     * @return {Physics}
     */

  }, {
    key: "getPhysics",
    value: function getPhysics() {
      return this.physics;
    }
    /**
     * @return {EntityManager}
     */

  }, {
    key: "getEntityManager",
    value: function getEntityManager() {
      return this.entityManager;
    }
    /**
     * Get the Ai engine
     */

  }, {
    key: "getAiEngine",
    value: function getAiEngine() {
      return this.aiEngine;
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
     * @return {TextureManager}
     */

  }, {
    key: "getTextureManager",
    value: function getTextureManager() {
      return this.textureManager;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getCameraEntityId",
    value: function getCameraEntityId() {
      return this.cameraEntityId;
    }
    /**
     * @param {number} entityId
     */

  }, {
    key: "setCameraEntityId",
    value: function setCameraEntityId(entityId) {
      this.cameraEntityId = entityId;
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

},{"./Data.js":20,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],31:[function(require,module,exports){
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
  }]);
  return Maths;
}();

var _default = Maths;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/interopRequireDefault":8}],32:[function(require,module,exports){
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
    this.x = x;
    this.y = y;
    this.z = z || 0;
  }
  /**
   * @param {number} x
   */


  (0, _createClass2["default"])(Vector, [{
    key: "setX",
    value: function setX(x) {
      this.x = x;
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
     * @param {number} y
     */

  }, {
    key: "setY",
    value: function setY(y) {
      this.y = y;
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
     * @param {number} z
     */

  }, {
    key: "setZ",
    value: function setZ(z) {
      this.z = z;
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
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {number}
     */

  }], [{
    key: "cross",
    value: function cross(vectorA, vectorB) {
      return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
    }
    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {Vector}
     */

  }, {
    key: "add",
    value: function add(vectorA, vectorB) {
      return {
        x: vectorA.x + vectorB.x,
        y: vectorA.y + vectorB.y,
        z: vectorA.z + vectorB.z
      };
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
  }]);
  return Vector;
}();

var _default = Vector;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/interopRequireDefault":8}],33:[function(require,module,exports){
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
Object.defineProperty(exports, "EntityManagerData", {
  enumerable: true,
  get: function get() {
    return _EntityManagerData["default"];
  }
});
Object.defineProperty(exports, "EntityData", {
  enumerable: true,
  get: function get() {
    return _EntityData["default"];
  }
});
Object.defineProperty(exports, "Vector", {
  enumerable: true,
  get: function get() {
    return _Vector["default"];
  }
});
Object.defineProperty(exports, "PhysicsProps", {
  enumerable: true,
  get: function get() {
    return _PhysicsProps["default"];
  }
});
Object.defineProperty(exports, "Style", {
  enumerable: true,
  get: function get() {
    return _Style["default"];
  }
});
Object.defineProperty(exports, "EntityProps", {
  enumerable: true,
  get: function get() {
    return _EntityProps["default"];
  }
});
Object.defineProperty(exports, "Size", {
  enumerable: true,
  get: function get() {
    return _Size["default"];
  }
});
Object.defineProperty(exports, "PerlinNoiseConfig", {
  enumerable: true,
  get: function get() {
    return _PerlinNoiseConfig["default"];
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
Object.defineProperty(exports, "TerrainData", {
  enumerable: true,
  get: function get() {
    return _TerrainData["default"];
  }
});
Object.defineProperty(exports, "TextureManagerData", {
  enumerable: true,
  get: function get() {
    return _TextureManagerData["default"];
  }
});
Object.defineProperty(exports, "TerrainManagerData", {
  enumerable: true,
  get: function get() {
    return _TerrainManagerData["default"];
  }
});
Object.defineProperty(exports, "TextureData", {
  enumerable: true,
  get: function get() {
    return _TextureData["default"];
  }
});
Object.defineProperty(exports, "MeshData", {
  enumerable: true,
  get: function get() {
    return _MeshData["default"];
  }
});
Object.defineProperty(exports, "PhysicsEngineData", {
  enumerable: true,
  get: function get() {
    return _PhysicsEngineData["default"];
  }
});

var _WorldData = _interopRequireDefault(require("../app/project/data/WorldData.js"));

var _EntityManagerData = _interopRequireDefault(require("../app/project/data/EntityManagerData.js"));

var _EntityData = _interopRequireDefault(require("../app/project/data/EntityData.js"));

var _Vector = _interopRequireDefault(require("../app/utils/Vector.js"));

var _PhysicsProps = _interopRequireDefault(require("../app/pobject/PhysicsProps.js"));

var _Style = _interopRequireDefault(require("../app/pobject/Style.js"));

var _EntityProps = _interopRequireDefault(require("../app/pobject/EntityProps.js"));

var _Size = _interopRequireDefault(require("../app/pobject/Size.js"));

var _PerlinNoiseConfig = _interopRequireDefault(require("../app/pobject/PerlinNoiseConfig.js"));

var _CameraData = _interopRequireDefault(require("../app/project/data/CameraData.js"));

var _PhysicsData = _interopRequireDefault(require("../app/project/data/PhysicsData.js"));

var _TerrainData = _interopRequireDefault(require("../app/project/data/TerrainData.js"));

var _TextureManagerData = _interopRequireDefault(require("../app/project/data/TextureManagerData.js"));

var _TerrainManagerData = _interopRequireDefault(require("../app/project/data/TerrainManagerData.js"));

var _TextureData = _interopRequireDefault(require("../app/project/data/TextureData.js"));

var _MeshData = _interopRequireDefault(require("../app/project/data/MeshData.js"));

var _PhysicsEngineData = _interopRequireDefault(require("../app/project/data/PhysicsEngineData.js"));

},{"../app/pobject/EntityProps.js":14,"../app/pobject/PerlinNoiseConfig.js":15,"../app/pobject/PhysicsProps.js":16,"../app/pobject/Size.js":17,"../app/pobject/Style.js":18,"../app/project/data/CameraData.js":19,"../app/project/data/EntityData.js":21,"../app/project/data/EntityManagerData.js":22,"../app/project/data/MeshData.js":23,"../app/project/data/PhysicsData.js":24,"../app/project/data/PhysicsEngineData.js":25,"../app/project/data/TerrainData.js":26,"../app/project/data/TerrainManagerData.js":27,"../app/project/data/TextureData.js":28,"../app/project/data/TextureManagerData.js":29,"../app/project/data/WorldData.js":30,"../app/utils/Vector.js":32,"@babel/runtime/helpers/interopRequireDefault":8}]},{},[33])(33)
});
