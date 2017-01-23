import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

const MyTitleFact = React.createFactory(MyTitle)

const div = React.DOM.div

const MyFirstComponent = React.createClass({
  render () {
    return (
      div(null,
        MyTitleFact({title: 'This is number 1!', color: 'rebeccapurple'}),
        MyTitleFact({title: 'This is number 2!', color: 'mediumaquamarine'}),
        MyTitleFact({title: 'This is numba 3!', color: 'peru'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
