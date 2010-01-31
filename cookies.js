/*
 * JS Cookies Library
 *
 * Copyright (c) 2010 Robert Sosinski (http://www.robertsosinski.com)
 * Offical Web Site (http://github.com/robertsosinski/js-cookies)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
window.cookies = {
  set: function(name, value, days) {
    var expires;
    if (name) {
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
      }
      else {
        expires = "";
      }
      document.cookie = name + "=" + escape(value) + expires + "; path=/";
    }
  },
  
  // requires jQuery and jQuery-JSON
  setJSON: function(name, value, days) {
    this.set(name, jQuery.toJSON(value), days);
  },
  
  get: function(name) {
    if (name) {
      var match = document.cookie.match(new RegExp(name + "=(.*?)(?:;|$)"));      
      if (match) {
        return unescape(match[1].replace(/\+/g, "%20"));
      }
    }
  },
  
  // requires jQuery and jQuery-JSON
  getJSON: function(name) {
    var value = this.get(name);
    if (value) {
      return jQuery.evalJSON(value);
    }
  },
  
  list: function() {
    var matches = document.cookie.split(new RegExp("=|; "));
    if (matches.length > 1) {
      var cookies = new Array(matches.length / 2);
      for (var i = 0, j = 0; j < matches.length; j+=2) {
        cookies[i++] = matches[j];
      }
      return cookies;
    }
    return [];
  },
  
  // delete is a reserved word, so appending an underscore
  delete_: function(name) {
    this.set(name, "" , -1);
  }
};
