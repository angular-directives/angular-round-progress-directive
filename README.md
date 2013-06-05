# Angular Round Progress Directive

This directive let you use a round progress thanks to an AngularJS directive.

## Requirements
- None, no dependency whatsoever. This directive only requires a web browser that can display canvas.

Load this directive with the following code:
```html
<script type="text/javascript" src="angular-round-progress-directive.js"></script>
```

Add a dependency to the module in your own module.
```js
var myModule = angular.module('MyModule', ['angular.directives-round-progress']);
```

Use the directive in your HTML files with the following code:
```html
<div ang:round:progress data-round-progress-model="scopeVariableName"></div>
```

### Parameters
- data-round-progress-model (string: required)
The name of the attribute in the $scope to use as input. The attribute in question should have the following structure:

```js
$scope.data = {
  maximum: 100,
  value: 75
};
```

The value attribute should be a number and the color attribute should be a string. This string can represent a color in any CSS compatible ways (HEX notation, RGB, RGBA, HSL).

A demonstration is visible in the file index.html.

## License
Copyright (c) 2013 Stephane Begaudeau
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
