archy
=====

Render nested hierarchies `npm ls` style with unicode pipes.

example
=======

``` js
var archy = require('archy');
var s = archy({
  label : 'beep',
  nodes : [
    'ity',
    {
      label : 'boop',
      nodes : [
        {
          label : 'o_O',
          nodes : [
            {
              label : 'oh',
              nodes : [ 'hello', 'puny' ]
            },
            'human'
          ]
        },
        'party!'
      ]
    }
  ]
});
console.log(s);
```

output

```
beep
├── ity
└─┬ boop
  ├─┬ o_O
  │ ├─┬ oh
  │ │ ├── hello
  │ │ └── puny
  │ └── human
  └── party!
```

methods
=======

var archy = require('archy')

archy(obj, prefix='')
---------------------

Return a string representation of `obj` with unicode pipe characters like how
`npm ls` looks.

install
=======

With [npm](http://npmjs.org) do:

```
npm install archy
```

license
=======

MIT/X11
