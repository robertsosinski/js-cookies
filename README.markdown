JS-Cookies Plugin
=================

JS-Cookies is a simple interface to list, get, set and delete cookies.  If you 
are also using Douglas Crockford's JSON library, you can set entire object literals
as cookies too, as they will be automatically converted to and evaluated as JSON.

If you are using a different JavaScript framework or JSON library, you can also 
easily edit `getJSON` and `setJSON` to use the appropriate methods.

Usage
=====

Within the scope of the current domain, you can list all cookies:

    cookies.list(); // => ["apple", "banana", "cherry"]

Show the value within a cookie:

    cookies.get("apple"); // => "macintosh"

Set the value for a cookie:

    cookies.set("banana", "cavendish"); // => undefined

And also delete a cookie.

    cookies.delete_("banana"); // => undefined

NOTE: JS-Cookies uses "delete_" with a trailing underscore as "delete" is a 
reserved word in JavaScript, and its usage fails on certain browsers.

You can also get and set object literals using `getJSON` and `setJSON`.
  
    cookies.setJSON("basket", {"pear": "bosc", "kiwi": "little spotted"}); // => undefined
    
    cookies.getJSON("basket"); // => {"pear": "bosc", "kiwi": "little spotted"}

Feedback
========

If you have any questions, comments or just want to talk shop about JavaScript, feel free to reach me 
through my website at http://www.robertsosinski.com.

