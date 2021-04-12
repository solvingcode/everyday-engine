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
  CALL: 'call'
};
exports.OPERATIONS = OPERATIONS;

},{"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/interopRequireDefault":8}],15:[function(require,module,exports){
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
  function DynamicAttribute() {
    (0, _classCallCheck2["default"])(this, DynamicAttribute);
    (0, _defineProperty2["default"])(this, "id", void 0);
    (0, _defineProperty2["default"])(this, "attrName", void 0);
    (0, _defineProperty2["default"])(this, "attrType", void 0);
    (0, _defineProperty2["default"])(this, "attrValue", void 0);
    this.id = _Maths["default"].generateId();
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
     * @param {string} type
     */

  }, {
    key: "setAttrType",
    value: function setAttrType(type) {
      this.attrType = type;
    }
    /**
     * @return {string}
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

},{"../utils/Maths.js":37,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/interopRequireDefault":8}],16:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var NodeInput = /*#__PURE__*/function () {
  function NodeInput() {
    (0, _classCallCheck2["default"])(this, NodeInput);
    (0, _defineProperty2["default"])(this, "sourceNodeId", void 0);
    (0, _defineProperty2["default"])(this, "targetId", void 0);
  }

  (0, _createClass2["default"])(NodeInput, [{
    key: "getSourceNodeId",

    /**
     * @return {number}
     */
    value: function getSourceNodeId() {
      return this.sourceNodeId;
    }
    /**
     * @param {number} sourceNodeId
     */

  }, {
    key: "setSourceNodeId",
    value: function setSourceNodeId(sourceNodeId) {
      this.sourceNodeId = sourceNodeId;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getTargetId",
    value: function getTargetId() {
      return this.targetId;
    }
    /**
     * @param {number} targetId
     */

  }, {
    key: "setTargetId",
    value: function setTargetId(targetId) {
      this.targetId = targetId;
    }
  }]);
  return NodeInput;
}();

exports["default"] = NodeInput;

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
    (0, _defineProperty2["default"])(this, "colorOpacity", 1);
    (0, _defineProperty2["default"])(this, "fillColor", void 0);
    (0, _defineProperty2["default"])(this, "fillColorOpacity", 1);
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
   * @type {number}
   */

  /**
   * @type {NodeInput[]}
   */
  function ANodeData() {
    var _this;

    (0, _classCallCheck2["default"])(this, ANodeData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sourceId", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputs", void 0);
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
     * @return {number}
     */

  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.sourceId;
    }
    /**
     * @param {number} sourceId
     */

  }, {
    key: "setSourceId",
    value: function setSourceId(sourceId) {
      this.sourceId = sourceId;
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

},{"../../utils/Maths.js":37,"./Data.js":27,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],20:[function(require,module,exports){
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
   * @type {ANode[]}
   */

  /**
   * @type {string}
   */

  /**
   * @type {string}
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "nodes", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "status", void 0);
    _this.id = _Maths["default"].generateId();
    _this.name = name;
    _this.nodes = [];
    _this.status = STATUS.NEW;
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
    /**
     * @return {ANode[]}
     */

  }, {
    key: "getNodes",
    value: function getNodes() {
      return this.nodes;
    }
    /**
     * @param {ANode[]} nodes
     */

  }, {
    key: "setNodes",
    value: function setNodes(nodes) {
      this.nodes = nodes;
    }
    /**
     * @param {ANode[]} nodes
     */

  }, {
    key: "concatNodes",
    value: function concatNodes(nodes) {
      this.setNodes(nodes);
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

},{"../../utils/Maths.js":37,"./Data.js":27,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],21:[function(require,module,exports){
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
  return AssetData;
}(_Data2["default"]);

var _default = AssetData;
exports["default"] = _default;

},{"./Data.js":27,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],22:[function(require,module,exports){
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "data", void 0);
    return _this;
  }

  (0, _createClass2["default"])(AssetTypeData, [{
    key: "setData",

    /**
     * @param {*} data
     */
    value: function setData(data) {
      this.data = data;
    }
    /**
     * @return {*}
     */

  }, {
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }]);
  return AssetTypeData;
}(_Data2["default"]);

exports["default"] = AssetTypeData;

},{"./Data.js":27,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],23:[function(require,module,exports){
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

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "assets", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "folders", void 0);
    return _this;
  }

  (0, _createClass2["default"])(AssetsManagerData, [{
    key: "getAssets",

    /**
     * @return {Asset[]}
     */
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

},{"./Data.js":27,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],24:[function(require,module,exports){
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

},{"./Data.js":27,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/asyncToGenerator":2,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9,"@babel/runtime/regenerator":13}],25:[function(require,module,exports){
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

},{"./Data.js":27,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],26:[function(require,module,exports){
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
  function ComponentData(name) {
    var _this;

    (0, _classCallCheck2["default"])(this, ComponentData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "attributes", void 0);
    _this.id = _Maths["default"].generateId();
    _this.name = name || 'Custom Component';
    _this.attributes = [];
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
     * @return {boolean}
     */

  }, {
    key: "isHidden",
    value: function isHidden() {
      return false;
    }
    /**
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
      });
    }
  }]);
  return ComponentData;
}(_Data2["default"]);

exports["default"] = ComponentData;

},{"../../utils/Maths.js":37,"./Data.js":27,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],27:[function(require,module,exports){
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
     */

  }, {
    key: "concat",
    value: function concat(target, source, criteria) {
      if (target && source) {
        source.forEach(function (sItem) {
          var existIndex = target.findIndex(function (tItem) {
            return criteria(tItem, sItem);
          });

          if (existIndex >= 0) {
            target[existIndex] = _.cloneDeep(sItem);
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

},{"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/interopRequireDefault":8}],28:[function(require,module,exports){
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

},{"./Data.js":27,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],29:[function(require,module,exports){
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
    _this.id = _Maths["default"].generateId();
    _this.name = name;
    _this.inputs = [];
    _this.stack = [];
    _this.output = null;
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
  }]);
  return FunctionData;
}(_Data2["default"]);

exports["default"] = FunctionData;

},{"../../utils/Maths.js":37,"./Data.js":27,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],30:[function(require,module,exports){
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

},{"./Data.js":27,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],31:[function(require,module,exports){
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

},{"./Data.js":27,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],32:[function(require,module,exports){
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

},{"./Data.js":27,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],33:[function(require,module,exports){
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

},{"./Data.js":27,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],34:[function(require,module,exports){
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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UnitData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(UnitData, _Data);

  var _super = _createSuper(UnitData);

  function UnitData(name) {
    var _this;

    (0, _classCallCheck2["default"])(this, UnitData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "components", void 0);
    _this.id = _Maths["default"].generateId();
    _this.name = name || 'Custom Component';
    _this.components = [];
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
     * @template T
     * @param {T} type
     * @return {T}
     */

  }, {
    key: "getComponent",
    value: function getComponent(type) {
      if (!(type.prototype instanceof _ComponentData["default"])) {
        throw new TypeError("Component type must be instance of ComponentData (".concat(type.name, " given)"));
      }

      return this.getComponents().find(function (component) {
        return component instanceof type;
      });
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
     * @param {Class<ComponentData>} componentClass
     */

  }, {
    key: "createComponent",
    value: function createComponent(componentClass) {
      if (!this.getComponent(componentClass)) {
        this.components.push(new componentClass());
      } else {
        throw new TypeError("Component ".concat(componentClass.name, " already created!"));
      }
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

},{"../../utils/Maths.js":37,"./ComponentData.js":26,"./Data.js":27,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],35:[function(require,module,exports){
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

},{"./Data.js":27,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],36:[function(require,module,exports){
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "unitManager", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scriptManager", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "functionRegistry", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "camera", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "physics", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "assetsManager", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "cameraUnitId", void 0);
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
        throw new TypeError('Cannot set the new world, data must be instance of World class');
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      throw new TypeError('World.reload must be implemented!');
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
     * @param {FunctionRegistry} functionRegistry
     */

  }, {
    key: "setFunctionRegistry",
    value: function setFunctionRegistry(functionRegistry) {
      this.functionRegistry = functionRegistry;
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
     * @param {AssetsManagerData} assetsManager
     */

  }, {
    key: "setAssetsManager",
    value: function setAssetsManager(assetsManager) {
      this.assetsManager = assetsManager;
    }
    /**
     * @param {ScriptManager} scriptManager
     */

  }, {
    key: "setScriptManager",
    value: function setScriptManager(scriptManager) {
      this.scriptManager = scriptManager;
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
     * @return {UnitManager}
     */

  }, {
    key: "getUnitManager",
    value: function getUnitManager() {
      return this.unitManager;
    }
    /**
     * @return {ScriptManager}
     */

  }, {
    key: "getScriptManager",
    value: function getScriptManager() {
      return this.scriptManager;
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
     * @return {FunctionRegistry}
     */

  }, {
    key: "getFunctionRegistry",
    value: function getFunctionRegistry() {
      return this.functionRegistry;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getCameraUnitId",
    value: function getCameraUnitId() {
      return this.cameraUnitId;
    }
    /**
     * @param {number} id
     */

  }, {
    key: "setCameraUnitId",
    value: function setCameraUnitId(id) {
      this.cameraUnitId = id;
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

},{"./Data.js":27,"@babel/runtime/helpers/assertThisInitialized":1,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":9}],37:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/interopRequireDefault":8}],38:[function(require,module,exports){
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
     * @param {Vector} vector
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
  }]);
  return Vector;
}();

var _default = Vector;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/interopRequireDefault":8}],39:[function(require,module,exports){
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
Object.defineProperty(exports, "NodeInput", {
  enumerable: true,
  get: function get() {
    return _NodeInput["default"];
  }
});
Object.defineProperty(exports, "StackOperation", {
  enumerable: true,
  get: function get() {
    return _StackOperation["default"];
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

var _NodeInput = _interopRequireDefault(require("../app/pobject/NodeInput.js"));

var _StackOperation = _interopRequireDefault(require("../app/operation/StackOperation.js"));

},{"../app/operation/StackOperation.js":14,"../app/pobject/DynamicAttribute.js":15,"../app/pobject/NodeInput.js":16,"../app/pobject/Size.js":17,"../app/pobject/Style.js":18,"../app/project/data/ANodeData.js":19,"../app/project/data/AScriptData.js":20,"../app/project/data/AssetData.js":21,"../app/project/data/AssetTypeData.js":22,"../app/project/data/AssetsManagerData.js":23,"../app/project/data/BlobData.js":24,"../app/project/data/CameraData.js":25,"../app/project/data/ComponentData.js":26,"../app/project/data/FolderData.js":28,"../app/project/data/FunctionData.js":29,"../app/project/data/PhysicsData.js":30,"../app/project/data/PhysicsEngineData.js":31,"../app/project/data/RegistryData.js":32,"../app/project/data/ScriptManagerData.js":33,"../app/project/data/UnitData.js":34,"../app/project/data/UnitManagerData.js":35,"../app/project/data/WorldData.js":36,"../app/utils/Vector.js":38,"@babel/runtime/helpers/interopRequireDefault":8}]},{},[39])(39)
});
