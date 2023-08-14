import React, { useEffect, useRef } from 'react'

const App = () => {
  const ff = useRef(null);
  const ok = () => {
    ff.current.focus();
  }
  // useEffect(() => {
  //   ff.current.focus();
  // }, [])
  // const abc = useRef(0);
  // console.log('abc::: ', abc.current);
  // const GoPluse = () => {
  //   abc.current = abc.current + 1;
  //   alert(abc.current)
  // }
  return (
    <>
      <input type="text" ref={ ff } />
      <button onClick={ ok }>Click</button>
      {/* <h1>{ abc.current }</h1>
      <button onClick={ GoPluse }>Click</button> */}
    </>
  )
}

export default App