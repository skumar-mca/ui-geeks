export const JSLINK = [
  {
    label: 'Introduction',
    link: '/fe/javascript/introduction',
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
    link: '/fe/javascript/history'
  },
  {
    label: 'How to include JavaScript code in webpage',
    link: '/fe/javascript/include-code',
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
    link: '/fe/javascript/console'
  },
  {
    label: 'Building block of JavaScript: the types',
    link: '/fe/javascript/data-types',
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
            label: 'Re-exporting/Aggregation'
          },
          {
            label: 'Wild-card (*) export statement'
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
