import React ,{ useState, useCallback } from 'react';
import { render } from 'react-dom';
import { useTransition, animated } from 'react-spring';
import '../App.css';

// Alfabeto dos contatos com animação
const pages = [
  ({ style }) => <animated.div style={{ ...style }}>A</animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>B</animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>C</animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>D</animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>E</animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>F</animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>G</animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>H</animated.div>
]

export default function Scroll() {
    const [index, set] = useState(0)
    const onClick = useCallback(() => set(state => (state + 1) % 8), [])
    const transitions = useTransition(index, p => p, {
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })
    return (
      <div className="simple-trans-main" onClick={onClick}>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item]
          return <Page key={key} style={props} />
        })}
      </div>
    )
  }
  
  render(<Scroll />, document.getElementById('root'))