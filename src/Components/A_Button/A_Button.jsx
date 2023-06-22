import React from 'react'
import classnames from 'classnames'

export default class A_Button extends React.Component {
  render() {
    const { text, type, disabled, handleClick } = this.props

    const classes = classnames({
      A_Button: true,
      disabled: disabled,
      [`${type}`]: true
    })

    return (
      <div className={classes} onClick={handleClick}>
        {text}
      </div>
    )
  }
}