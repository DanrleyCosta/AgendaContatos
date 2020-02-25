import React ,{ useState, useCallback } from 'react';
import { render } from 'react-dom';
import { useTransition, animated } from 'react-spring';
import '../App.css';
import List from './ListContact';

// Alfabeto dos contatos com animação
const pages = [
  ({ style }) => <animated.div style={{ ...style }}>A<List></List></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>B<List></List></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>C<List></List></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>D<List></List></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>E<List></List></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>F<List></List></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>G<List></List></animated.div>
]

export default function Scroll() {
    const [index, set] = useState(0)    
    const onClick = useCallback(() => set(state => (state + 1) % 8), [])
    const transitions = useTransition(index, p => p, {
      from: { opacity: 0, transform: 'translate3d(50%,0,0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })
    return (
      <div id="idclick" className="simple-trans-main" onClick={onClick}>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item]
          return <Page key={key} style={props} />
        })}
      </div>
    )
  }
  
  render(<Scroll />, document.getElementById('root'))