export function processPolyfills() {


    /*
     * String.includes
     */

    if (!String.prototype.includes) {
        (function() {
            'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
            var toString = {}.toString;
            var defineProperty = (function() {
                // IE 8 only supports `Object.defineProperty` on DOM elements
                try {
                    var object = {};
                    var $defineProperty = Object.defineProperty;
                    var result = $defineProperty(object, object, object) && $defineProperty;
                } catch (error) {
                }
                return result;
            } ());
            var indexOf = ''.indexOf;
            var includes = function(search: string) {
                if (this == null) {
                    throw new TypeError();
                }
                var string = String(this);
                if (search && toString.call(search) === '[object RegExp]') {
                    throw new TypeError();
                }
                var stringLength = string.length;
                var searchString = String(search);
                var searchLength = searchString.length;
                var position = arguments.length > 1 ? arguments[1] : undefined;
                // `ToInteger`
                var pos = position ? Number(position) : 0;
                if (pos !== pos) { // better `isNaN`
                    pos = 0;
                }
                var start = Math.min(Math.max(pos, 0), stringLength);
                // Avoid the `indexOf` call if no match is possible
                if (searchLength + start > stringLength) {
                    return false;
                }
                return indexOf.call(string, searchString, pos) !== -1;
            };
            if (defineProperty) {
                defineProperty(String.prototype, 'includes', {
                    'value': includes,
                    'configurable': true,
                    'writable': true,
                });
            } else {
                String.prototype.includes = includes;
            }
        } ());
    }


    /*
     * String.startsWith
     */

    if (!String.prototype.startsWith) {
        (function() {
            'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
            var defineProperty = (function() {
                // IE 8 only supports `Object.defineProperty` on DOM elements
                try {
                    var object = {};
                    var $defineProperty = Object.defineProperty;
                    var result = $defineProperty(object, object, object) && $defineProperty;
                } catch (error) {
                }
                return result;
            } ());
            var toString = {}.toString;
            var startsWith = function(search: string) {
                if (this == null) {
                    throw new TypeError();
                }
                var string = String(this);
                if (search && toString.call(search) === '[object RegExp]') {
                    throw new TypeError();
                }
                var stringLength = string.length;
                var searchString = String(search);
                var searchLength = searchString.length;
                var position = arguments.length > 1 ? arguments[1] : undefined;
                // `ToInteger`
                var pos = position ? Number(position) : 0;
                if (pos !== pos) { // better `isNaN`
                    pos = 0;
                }
                var start = Math.min(Math.max(pos, 0), stringLength);
                // Avoid the `indexOf` call if no match is possible
                if (searchLength + start > stringLength) {
                    return false;
                }
                var index = -1;
                while (++index < searchLength) {
                    if (string.charCodeAt(start + index) !== searchString.charCodeAt(index)) {
                        return false;
                    }
                }
                return true;
            };
            if (defineProperty) {
                defineProperty(String.prototype, 'startsWith', {
                    'value': startsWith,
                    'configurable': true,
                    'writable': true,
                });
            } else {
                String.prototype.startsWith = startsWith;
            }
        } ());
    }


    /*
     * Object.keys
     */

    if (!Object.keys) {
        Object.keys = function(
            o, // object
            k, // key
            r  // result array
        ) {
            // initialize object and result
            r = [];
            // iterate over object keys
            for (k in o)
                // fill result array with non-prototypical keys
                /* tslint:disable */
                r.hasOwnProperty.call(o, k) && r.push(k);
                /* tslint:enabled */
            // return result
            return r;
        };
    }






}
