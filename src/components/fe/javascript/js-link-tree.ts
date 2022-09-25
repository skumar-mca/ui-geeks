export const JSLINK = [
  {
    label: 'Introduction',
    link: '/fe/javascript/introduction',
    tags: [
      'interpreted',
      'compiled',
      'functions',
      'prototype',
      'multi paradigm',
      'single threaded',
      'dynamic language',
      'object oriented',
      'oops',
      'imperative',
      'declarative'
    ],
    children: [
      {
        label: 'Interpreted or Just-in-time Compiled',
        shortLabel: 'Interpreted/Compiled'
      },
      {
        label: 'First Class Functions'
      },
      {
        label: 'Prototype-based'
      },
      {
        label: 'Multi-paradigm'
      },
      {
        label: 'Single Threaded'
      },
      {
        label: 'Dynamic Language'
      },
      {
        label: 'Object-oriented'
      },
      {
        label: 'Imperative'
      },
      {
        label: 'Declarative'
      }
    ]
  },
  {
    label: 'History of JavaScript',
    link: '/fe/javascript/history',
    tags: ['history']
  },
  {
    label: 'Include JavaScript code',
    link: '/fe/javascript/include-code',
    tags: ['scripts', 'async', 'defer'],
    children: [
      {
        label: 'async'
      },
      {
        label: 'defer'
      }
    ]
  },
  {
    label: 'JavaScript Console',
    link: '/fe/javascript/console',
    tags: ['console']
  },
  {
    label: 'Building block of JavaScript: the types',
    link: '/fe/javascript/data-types',
    tags: [
      'types',
      'datatypes',
      'number',
      'string',
      'bigint',
      'null',
      'undefined',
      'boolean'
    ],
    children: [
      {
        label: 'Number',
        children: [
          {
            label: 'parseInt()'
          },
          {
            label: 'parseFloat()'
          }
        ]
      },
      {
        label: 'String'
      },
      {
        label: 'BigInt'
      },
      {
        label: 'Symbol'
      },
      {
        label: 'null'
      },
      {
        label: 'undefined'
      },
      {
        label: 'Boolean'
      }
    ]
  },
  {
    label: 'Grammar and types',
    link: '/fe/javascript/grammer',
    tags: [
      'grammer',
      'comments',
      'single line comment',
      'multi line comment',
      'variables',
      'let',
      'const',
      'var',
      'naming rules',
      'type conversion',
      'literals',
      'temporal dead zone',
      'tdz'
    ],
    children: [
      {
        label: 'Comments',
        children: [
          {
            label: 'Single Line Comment'
          },
          {
            label: 'Multi Line Comment'
          }
        ]
      },
      {
        label: 'Variables',
        children: [
          {
            label: 'let'
          },
          {
            label: 'const'
          },
          {
            label: 'var'
          }
        ]
      },
      {
        label: 'Variable naming rules'
      },
      {
        label: 'Evaluating Variables'
      },
      {
        label: 'Variable Scope'
      },
      {
        label: 'Variable Hoisting'
      },
      {
        label: 'Data type Conversion'
      },
      {
        label: 'Literals',
        children: [
          {
            label: 'Numeric Literals'
          },
          {
            label: 'String Literals'
          },
          {
            label: 'Template Literals'
          },
          {
            label: 'Tagged Templates'
          },
          {
            label: 'Boolean Literals'
          },
          {
            label: 'Array Literals'
          },
          {
            label: 'Object Literals'
          },
          {
            label: 'RegExp Literals'
          }
        ]
      },
      {
        label: 'Temporal Dead Zone (TDZ)'
      }
    ]
  },
  {
    label: 'Operators',
    link: '/fe/javascript/operators',
    tags: [
      'operators',
      'binary operators',
      'arithmetic opertors',
      'relational opertors',
      'equality opertors',
      'strict equality',
      'strict inequality',
      'assignment operators',
      'logical operators',
      'delete operator',
      'typeof operator',
      'void operator',
      'in operator',
      'instanceod operator',
      'ternary operator',
      'operator precedence',
      'short-circuit'
    ],
    children: [
      {
        label: 'Binary Operators',
        children: [
          {
            label: 'Arithmetic Operators'
          },
          {
            label: 'Relational Operators'
          },
          {
            label: 'Equality Operators',
            children: [
              {
                label: 'Type Coercion'
              },
              {
                label: 'Strict Equality',
                altLabel: 'Strict Equality "===" Operator',
                shortLabel: 'Strict Equality'
              },
              {
                label: 'Strict InEquality',
                altLabel: 'Strict InEquality "!==" Operator',
                shortLabel: 'Strict InEquality'
              }
            ]
          },
          {
            label: 'Assignment Operators'
          },
          {
            label: 'Binary Logical Operators',
            children: [
              {
                label: 'Logical AND (&&) operator'
              },
              {
                label: 'Logical OR (||) operator'
              },
              {
                label: 'Short-circuit evaluation'
              }
            ]
          }
        ]
      },
      {
        label: 'Unary Operators',
        children: [
          {
            label: 'Logical NOT (!) Operator'
          },
          {
            label: 'Unary operator "+"'
          },
          {
            label: 'delete Operator'
          },
          {
            label: 'typeof Operator'
          },
          {
            label: 'void Operator'
          },
          {
            label: 'in Operator'
          },
          {
            label: 'instanceof Operator'
          }
        ]
      },
      {
        label: 'Ternary (?:) Operator'
      },
      {
        label: 'Operator Precedence'
      }
    ]
  },
  {
    label: 'Control Structures',
    link: '/fe/javascript/control-structures',
    tags: [
      'conditional statements',
      'if else',
      'if-else',
      'switch case',
      'loop',
      'iterations',
      'for loop',
      'while loop',
      'do while loop',
      'for of loop',
      'for...of loop',
      'for in loop',
      'for...in loop'
    ],
    children: [
      {
        label: 'Conditional Statements',
        children: [
          {
            label: 'if-else'
          },
          {
            label: 'switch-case'
          }
        ]
      },
      {
        label: 'Looping/Iteration statements',
        shortLabel: 'Looping statements',
        children: [
          {
            label: 'while loop'
          },
          {
            label: 'do-while loop'
          },
          {
            label: 'for loop'
          },
          {
            label: 'for...of loop'
          },
          {
            label: 'for...in loop'
          }
        ]
      }
    ]
  },
  {
    label: 'Objects',
    link: '/fe/javascript/objects',
    tags: [
      'object',
      'creating objects',
      'accessing objects',
      'dot notation',
      'bracket notation',
      '[]'
    ],
    children: [
      {
        label: 'Accessing object properties',
        children: [
          {
            label: 'Using Dot Notation'
          },
          {
            label: 'Using Bracket Notation'
          }
        ]
      }
    ]
  },
  {
    label: 'Arrays',
    link: '/fe/javascript/arrays',
    tags: [
      'array',
      'accessing array elements',
      'array methods, tostring',
      'concat',
      'join',
      'pop',
      'push',
      'unshift',
      'shift',
      'slice',
      'splice',
      'sort',
      'reverse'
    ],
    children: [
      {
        label: 'Accessing Array Items'
      },
      {
        label: 'Array Methods',
        children: [
          {
            label: 'toString()'
          },
          {
            label: 'concat()'
          },
          {
            label: 'join(separator)'
          },
          {
            label: 'pop()'
          },
          {
            label: 'push()'
          },
          {
            label: 'unshift()'
          },
          {
            label: 'shift()'
          },
          {
            label: 'slice()'
          },
          {
            label: 'splice()'
          },
          {
            label: 'sort()'
          },
          {
            label: 'reverse()'
          }
        ]
      }
    ]
  },
  {
    label: 'Functions',
    link: '/fe/javascript/functions',
    tags: [
      'functions',
      'function declaration',
      'function expression',
      'invocation',
      'arguments',
      'rest parameters',
      'anonymous functions',
      'iife',
      'inner functions'
    ],
    children: [
      {
        label: 'Function declaration'
      },
      {
        label: 'Function expression'
      },
      {
        label: 'Function Invocation/Calling',
        shortLabel: 'Invocation'
      },
      {
        label: 'arguments'
      },
      {
        label: 'Rest parameters'
      },
      {
        label: 'Anonymous Functions',
        children: [
          {
            label: 'IIFE (Immediately Invoked Function Expression)',
            shortLabel: 'IIFE'
          }
        ]
      },
      {
        label: 'Inner Functions'
      }
    ]
  },
  {
    label: 'Closures',
    link: '/fe/javascript/closures',
    tags: [
      'closures',
      'lexical scope',
      'private member',
      'scope chain',
      'closure problems'
    ],
    children: [
      {
        label: 'Lexical Scope'
      },
      {
        label: 'Creating private methods/properties using Closures',
        shortLabel: 'Creating private members'
      },
      {
        label: 'Closure Scope Chain'
      },
      {
        label: 'Problem creating Closures in loop'
      },
      {
        label: 'Solutions to the above problem'
      }
    ]
  },
  {
    label: 'Arrow functions',
    link: '/fe/javascript/arrow-functions',
    tags: ['arrow functions', 'class fields'],
    children: [
      {
        label: 'Limitations of Arrow function'
      },
      {
        label: 'Arrow functions as class fields'
      },
      {
        label: 'Arrow function not to be used with call, apply and bind',
        shortLabel: 'Not use with call, apply and bind'
      },
      {
        label: 'No binding of "arguments" object'
      },
      {
        label: 'Returning "Object Literals"'
      },
      {
        label: 'Line breaks in arrow functions'
      },
      {
        label: 'Parsing Order'
      }
    ]
  },
  {
    label: 'JavaScript Modules',
    link: '/fe/javascript/modules',
    tags: [
      'modules',
      'javascript modules',
      'export',
      'named export',
      'default export',
      're-exporting',
      'import',
      'named import',
      'default import',
      'namespace import',
      'side effect namespace'
    ],
    children: [
      {
        label: 'export statement',
        children: [
          {
            label: 'Named Export'
          },
          {
            label:
              'Named export can be renamed while exporting from the module',
            shortLabel: 'Rename Named export'
          },
          {
            label: 'Default Export'
          },
          {
            label: 'Re-exporting'
          },
          {
            label: 'Wild-card (*) export statement',
            shortLabel: 'Rename Named export'
          }
        ]
      },
      {
        label: 'import statement',
        children: [
          {
            label: 'Named import'
          },
          {
            label: 'Default import'
          },
          {
            label: 'Namespace import'
          },
          {
            label: 'Side-effect import'
          }
        ]
      }
    ]
  },
  {
    label: 'The "this" keyword',
    link: '/fe/javascript/this-keyword',
    tags: [
      'this',
      'value of this',
      'apply',
      'bind',
      'call',
      'apply()',
      'bind()',
      'call()',
      'this in class',
      'this in function',
      'this in global',
      'derived class',
      'new opertor',
      'new.target',
      'new()',
      'this in event'
    ],
    children: [
      {
        label: 'Value of "this"',
        children: [
          {
            label: 'Value of "this" in the Global Context',
            shortLabel: 'In Global Context'
          },
          {
            label: 'Value of "this" in the Function Context',
            shortLabel: 'In Function Context',
            children: [
              {
                label: 'When "this" is not set by the function call',
                shortLabel: '"this", not set by function'
              },
              {
                label: 'When "this" is set by the function call',
                shortLabel: '"this", set by function',
                children: [
                  {
                    label: 'call()'
                  },
                  {
                    label: 'apply()'
                  },
                  {
                    label: 'bind()'
                  }
                ]
              }
            ]
          },
          {
            label: 'Value of "this" in the Class Context',
            shortLabel: 'In Class Context',
            children: [
              {
                label: 'Value of "this" in Derived Classes',
                shortLabel: 'In Derived Classes'
              }
            ]
          },
          {
            label: 'The "new" Operator',
            children: [
              {
                label: 'Using "new" with Functions'
              },
              {
                label: 'new.target'
              },
              {
                label: 'Using "new" with Classes'
              }
            ]
          },
          {
            label: 'Value of "this" in the Inline Event Handler',
            shortLabel: 'In Event Handler'
          }
        ]
      }
    ]
  },
  {
    label: 'Class',
    link: '/fe/javascript/class-keyword',
    tags: [
      'class',
      'class declaration',
      'class expression',
      'constructor',
      'constructor()',
      'this in class',
      'private fields',
      'protoytype',
      'static',
      'base class',
      'derived class',
      'mix ins'
    ],
    children: [
      {
        label: 'Class Declaration'
      },
      {
        label: 'Class Expression'
      },
      {
        label: 'constructor'
      },
      {
        label: 'static Methods and Properties'
      },
      {
        label: 'Binding "this" with prototype and static methods',
        shortLabel: 'Binding "this" to prototype/static'
      },
      {
        label: 'Private field declarations'
      },
      {
        label: 'Inheritance',
        children: [
          {
            label: 'Base/Parent/Inherited Class'
          },
          {
            label: 'Child/Derived Class'
          },
          {
            label: 'MIX-INS'
          }
        ]
      }
    ]
  },
  {
    label: 'Inheritance and the Prototype chain',
    link: '/fe/javascript/prototype-chain',
    tags: [
      'inheritance',
      'prototype',
      '__proto__',
      'setPrototypeOf',
      'Object.setPrototypeOf()',
      'Object.create()'
    ],
    children: [
      {
        label: 'Inheriting Properties',
        children: [
          {
            label: '__proto__'
          }
        ]
      },
      {
        label: 'Prototypes with Constructors'
      },
      {
        label: 'Object.setPrototypeOf()'
      },
      {
        label: 'Object.create()'
      }
    ]
  },
  {
    label: 'Strict mode',
    link: '/fe/javascript/strict-mode',
    tags: ['strict mode'],
    children: [
      {
        label: 'Invoking strict mode',
        shortLabel: 'Invoking'
      },
      {
        label: 'Restrictions applied by strict mode',
        shortLabel: 'Restrictions'
      }
    ]
  },
  {
    label: 'Hoisting',
    link: '/fe/javascript/hoisting',
    tags: [
      'hoisting',
      'function hoisting',
      'variable hoisting',
      'class hoisting'
    ],
    children: [
      {
        label: 'Function Hoisting'
      },
      {
        label: 'Variable Hoisting'
      },
      {
        label: 'Class Hoisting'
      }
    ]
  },
  {
    label: 'Exception Handling',
    link: '/fe/javascript/exception-handling',
    tags: [
      'exception handling',
      'throw',
      'try',
      'catch',
      'finally',
      'error',
      'error()'
    ],
    children: [
      {
        label: 'throw'
      },
      {
        label: 'try block'
      },
      {
        label: 'catch block'
      },
      {
        label: 'finally block'
      },
      {
        label: 'Error() constructor'
      }
    ]
  },
  {
    label: 'Iterators and Generators',
    link: '/fe/javascript/iterators-and-generators',
    tags: ['iterators', 'generators', 'iterables', 'iterators and generators'],
    children: [
      {
        label: 'Iterators'
      },
      {
        label: 'Generator'
      },
      {
        label: 'Iterables'
      }
    ]
  }
];
