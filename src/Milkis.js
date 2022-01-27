export const _fetch = function(fetchImpl) {
  return function(url) {
    return function(options) {
      return function() {
        return fetchImpl(url, options).catch(function(e) {
          // we have to wrap node-fetch's non-Error error :(
          throw new Error(e);
        });
      };
    };
  };
};

export const jsonImpl = function(response) {
  return function() {
    return response.json().catch(function(e) {
      throw new Error(e);
    });
  };
};

export const textImpl = function(response) {
  return function() {
    return response.text();
  };
};

export const headersImpl = function (response) {
  var d = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  // for of cannot be used in ES5
  try {
    for (var _iterator = response.headers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      h = _step.value;
      d[h[0]] = h[1];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  ;
  return d;
};

export const arrayBufferImpl = function(response) {
  return function() {
    return response.arrayBuffer();
  };
};

export const fromRecordImpl = function(r) {
  return r;
};
