import React from 'react'

const div = React.DOM.div
const h1 = React.DOM.h1

const MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({ style: { color: this.props.color } }, this.props.title)
      )
    )
  }
})

export default MyTitle
