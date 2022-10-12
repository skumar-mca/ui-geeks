export const REACT_LINK = [
  {
    label: 'Introduction',
    link: '/react/introduction',
    tags: [
      'Declarative',
      'Single Page Application',
      'Key Features',
      'Virtual DOM',
      'Shadow DOM',
      'React Fiber',
      'Milestones',
      'Create React App',
      'CRA',
      'Why React'
    ],
    children: [
      {
        label: 'Single Page Application'
      },
      {
        label: 'Key Features'
      },
      {
        label: 'What is Virtual DOM?'
      },
      {
        label: 'Is the Shadow DOM the same as the Virtual DOM',
        shortLabel: 'Shadow vs Virtual DOM'
      },
      {
        label: 'What is React Fiber',
        shortLabel: 'React Fiber'
      },
      {
        label: 'Important Milestones'
      },
      {
        label: 'Create React App'
      },
      {
        label: 'Hello World'
      },
      {
        label: 'Why React'
      }
    ]
  },
  {
    label: 'JSX',
    link: '/react/jsx',
    tags: [
      'JSX',
      'Expressions in JSX',
      'Attributes with JSX',
      'Children with JSX',
      'Injection Attacks',
      'Rendering Elements'
    ],
    children: [
      {
        label: 'Why JSX'
      },
      {
        label: 'Embedding Expressions in JSX',
        shortLabel: 'Embedding Expressions'
      },
      {
        label: 'Specifying Attributes with JSX',
        shortLabel: 'Specifying Attributes'
      },
      {
        label: 'Specifying Children with JSX',
        shortLabel: 'Specifying Children'
      },
      {
        label: 'JSX Prevents Injection Attacks',
        shortLabel: 'Prevents Injection Attacks'
      },
      {
        label: 'JSX Represents Objects',
        shortLabel: 'Represents Objects'
      },
      {
        label: 'Using Spread Attributes',
        shortLabel: 'Spread Attributes'
      },
      {
        label: 'Rendering Elements'
      }
    ]
  },
  {
    label: 'Components',
    link: '/react/components',
    tags: [
      'Components',
      'Function Component',
      'Class Component',
      'Props',
      'State',
      'Phases of a component'
    ],
    children: [
      {
        label: 'Function Component'
      },
      {
        label: 'Class Component'
      },
      {
        label: 'Props'
      },
      {
        label: 'State'
      },
      {
        label: 'Phases of a component',
        shortLabel: 'Phases'
      }
    ]
  },
  {
    label: 'Class Component',
    link: '/react/class-component',
    tags: [
      'Class Components',
      'defaultProps',
      'Class Properties',
      'displayName',
      'Lifecycle Methods',
      'constructor()',
      'render()',
      'getDerivedStateFromProps()',
      'componentDidMount()',
      'getDerivedStateFromProps()',
      'shouldComponentUpdate()',
      'getSnapshotBeforeUpdate()',
      'componentDidUpdate()',
      'componentWillUnmount()',
      'getDerivedStateFromError()',
      'componentDidCatch()'
    ],
    children: [
      {
        label: 'Using Props',
        shortLabel: 'Props'
      },
      {
        label: 'Class Properties'
      },
      {
        label: 'Lifecycle Methods',
        shortLabel: 'Lifecycle Methods'
      },
      {
        label: 'constructor()'
      },
      {
        label: 'static getDerivedStateFromProps()',
        shortLabel: 'getDerivedStateFromProps'
      },
      {
        label: 'render()',
        shortLabel: 'render()'
      },
      {
        label: 'componentDidMount()',
        shortLabel: 'componentDidMount()'
      },
      {
        label: 'static getDerivedStateFromProps()',
        shortLabel: 'getDerivedStateFromProps()'
      },
      {
        label: 'shouldComponentUpdate()',
        shortLabel: 'shouldComponentUpdate()'
      },
      {
        label: 'getSnapshotBeforeUpdate()',
        shortLabel: 'getSnapshotBeforeUpdate()'
      },
      {
        label: 'componentWillUnmount()',
        shortLabel: 'componentWillUnmount()'
      },
      {
        label: 'componentDidUpdate()',
        shortLabel: 'componentDidUpdate()'
      },
      {
        label: 'Error Handling Methods',
        shortLabel: 'Error Handling',
        children: [
          {
            label: 'static getDerivedStateFromError()',
            shortLabel: 'getDerivedStateFromError()'
          },
          {
            label: 'componentDidCatch()'
          }
        ]
      }
    ]
  },
  {
    label: 'Function Component',
    link: '/react/function-component',
    tags: ['Function Component', 'Adding State', 'useEffect()', 'useState()'],
    children: [
      {
        label: 'Adding State'
      },
      {
        label: 'Lifecycle Methods',
        shortLabel: 'Lifecycle Methods',
        children: [
          {
            label: 'useEffect()'
          }
        ]
      }
    ]
  },
  {
    label: 'Controlled Component',
    link: '/react/controlled-component',
    tags: ['Controlled Components']
  },
  {
    label: 'Uncontrolled Component',
    link: '/react/uncontrolled-component',
    tags: ['Uncontrolled Components', 'Refs']
  },
  {
    label: 'Fragments',
    link: '/react/fragments',
    tags: ['Fragments', 'Wrapper Hell']
  },
  {
    label: 'Lists',
    link: '/react/lists',
    tags: ['Lists', 'Keys'],
    children: [
      {
        label: 'Keys'
      }
    ]
  },
  {
    label: 'Forms',
    link: '/react/forms',
    tags: [
      'Forms',
      'Controlled Components',
      'Uncontrolled Components',
      'Default Values',
      'Handling Events',
      'Synthetic Event'
    ],
    children: [
      {
        label: 'Default Values'
      },
      {
        label: 'Handling Events'
      },
      {
        label: 'Synthetic Event'
      }
    ]
  },
  {
    label: 'Hooks',
    link: '/react/hooks',
    tags: [
      'Hooks',
      'Rules of Hooks',
      'useState()',
      'Functional Updates',
      'Lazy initial state',
      'Bailing out state update',
      'Batching state updates',
      'useEffect() As componentDidMount()',
      'useEffect() As componentWillUnmount()',
      'useEffect() As componentDidUpdate()',
      'useContext()',
      'useReducer()',
      'useCallback()',
      'useMemo()',
      'useRef()',
      'useImperativeHandle()',
      'useLayoutEffect()'
    ],
    children: [
      {
        label: 'Rules of Hooks'
      },
      {
        label: 'useState()',
        children: [
          {
            label: 'Functional Updates'
          },
          {
            label: 'Lazy initial state'
          },
          {
            label: 'Bailing out of a state update',
            shortLabel: 'Bailing out state update'
          },
          {
            label: 'Batching of state updates',
            shortLabel: 'Batching state updates'
          }
        ]
      },
      {
        label: 'useEffect()'
      },
      {
        label: 'useContext()'
      },
      {
        label: 'useReducer()'
      },
      {
        label: 'useCallback()'
      },
      {
        label: 'useMemo()'
      },
      {
        label: 'useRef()'
      },
      {
        label: 'useImperativeHandle()'
      },
      {
        label: 'useLayoutEffect()'
      }
    ]
  },
  {
    label: 'Context',
    link: '/react/context',
    tags: [
      'Context',
      'Context API',
      'React.createContext',
      'Context.Provider',
      'Class.contextType',
      'Context.Consumer',
      'Context.displayName',
      'Issues using Context'
    ],
    children: [
      {
        label: 'When to use Context'
      },
      {
        label: 'React.createContext'
      },
      {
        label: 'Context.Provider'
      },
      {
        label: 'Class.contextType'
      },
      {
        label: 'Context.Consumer'
      },
      {
        label: 'Context.displayName'
      },
      {
        label: 'Issues using Context'
      }
    ]
  },
  {
    label: 'Render Props',
    link: '/react/render-props',
    tags: ['Render Props', 'Sharing Component State']
  },
  {
    label: 'Error Boundary',
    link: '/react/error-boundary',
    tags: ['Error Boundaries', 'Error Boundary', 'Errors']
  }
];
