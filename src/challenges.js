/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  return elements.forEach((value, i) => {
    cb(value, i);
  });
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const resultingArr = [];
  elements.forEach(i => {
    resultingArr.push(cb(i));
  });
  return resultingArr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let counter = 0;
  return (...args) => {
    if (counter === n) {
      return null;
    }
    counter++;
    return cb(...args);
  };
};

const cacheFunction = cb => {
  // Should return a function that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  // ESSENTIAL --- Key = arg, value = result :: previously that didnt click

  const cache = {};
  return (...args) => {
    if (!(Object.prototype.hasOwnProperty.call(cache, args))) {
      const result = cb(args);
      cache[args] = result;
      return result;
    }
    return cache[args];
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str === '') {
    return '';
  }
  return reverseStr(str.substr(1)) + str.charAt(0);
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const firstVal = Object.values(obj)[0];

  for (let i = 1; i < Object.values(obj).length; i++) {
    if (firstVal !== Object.values(obj)[i]) {
      return false;
    }
  }
  return true;
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
