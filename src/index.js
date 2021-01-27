import React from 'react'
import ReactDom from 'react-dom'


function Greeting() {
  return <h4>a first component</h4>;
}

ReactDom.render(<Greeting/>, document.getElementById('root'));