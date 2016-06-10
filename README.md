jquery.insight
====
jQuery plugin to check if elements are in viewport.

Usage
-----

This is a setup showing the default settings:

```javascript
$('selector').insight({
  fn: function(insight, position) {},
  classIn:      'insight',
  classAbove:   'insight-above',
  classBelow:   'insight-below',
  classLeft:    'insight-left',
  classRight:   'insight-right',
  container:    $(window)
});
```

License
-------

[MIT License](LICENSE)
