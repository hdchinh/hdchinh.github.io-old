import React from 'react';
// const React = require('react')
const ReactDOM = require('react-dom')
const ReactMarkdown = require('react-markdown')

const input = '# This is a header\n\nAnd this is a paragraph'

class ConCac extends React.Component {
  componentDidMount(){
    ReactDOM.render(<ReactMarkdown source={input} />, document.getElementById('container'))
    console.log('this....', this.props.match.params)
  }
  render() {
    return(
      <div id="container"></div>
    )
  }
}

export default ConCac;
