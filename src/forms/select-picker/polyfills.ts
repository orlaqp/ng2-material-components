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

/**
   * Remove all diatrics from the given text.
   * @access private
   * @param {String} text
   * @returns {String}
   */
export function normalizeToBase(text: string) {
    var rExps = [
        { re: /[\xC0-\xC6]/g, ch: "A" },
        { re: /[\xE0-\xE6]/g, ch: "a" },
        { re: /[\xC8-\xCB]/g, ch: "E" },
        { re: /[\xE8-\xEB]/g, ch: "e" },
        { re: /[\xCC-\xCF]/g, ch: "I" },
        { re: /[\xEC-\xEF]/g, ch: "i" },
        { re: /[\xD2-\xD6]/g, ch: "O" },
        { re: /[\xF2-\xF6]/g, ch: "o" },
        { re: /[\xD9-\xDC]/g, ch: "U" },
        { re: /[\xF9-\xFC]/g, ch: "u" },
        { re: /[\xC7-\xE7]/g, ch: "c" },
        { re: /[\xD1]/g, ch: "N" },
        { re: /[\xF1]/g, ch: "n" }
    ];
    $.each(rExps, function() {
        text = text.replace(this.re, this.ch);
    });
    return text;
}


export function htmlEscape(html: string) {
    var escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;'
    };
    var source = '(?:' + Object.keys(escapeMap).join('|') + ')',
        testRegexp = new RegExp(source),
        replaceRegexp = new RegExp(source, 'g'),
        string = html == null ? '' : '' + html;
    return testRegexp.test(string) ? string.replace(replaceRegexp, function(match) {
        return escapeMap[match];
    }) : string;
}
