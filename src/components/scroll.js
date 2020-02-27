import React ,{ useState, useCallback } from 'react';
import { render } from 'react-dom';
import { useTransition, animated } from 'react-spring';
import '../App.css';
import Teste from './Test';

// Alfabeto dos contatos com animação
const pages = [
  ({ style }) => <animated.div style={{ ...style }}>A<Teste letra="a"></Teste></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>B<Teste letra="b"></Teste></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>C<Teste letra="c"></Teste></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>D<Teste letra="d"></Teste></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>E<Teste letra="e"></Teste></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>F<Teste letra="f"></Teste></animated.div>,
  ({ style }) => <animated.div style={{ ...style }}>G<Teste letra="g"></Teste></animated.div>
]
// Scroll horizontal usando react-spring para formar a animação
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