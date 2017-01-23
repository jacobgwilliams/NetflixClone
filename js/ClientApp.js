import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

const MyTitleFact = React.createFactory(MyTitle)

// const div = React.DOM.div

const MyFirstComponent = React.createClass({
  render () {
    return (
      <div>
        <MyTitle title='props are cool' color='rebeccapurple' />
        <MyTitle title='props are amazing' color='mediumaquamarine' />
        <MyTitle title='props are cool still' color='peru' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
