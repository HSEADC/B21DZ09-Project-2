import React from 'react'

export default class A_Input extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  handleInput = () => {
    const { handleInput } = this.props
    const { value } = this.input.current
    handleInput(value)
  }

  render() {
    const { placeholder, value, handleSubmit } = this.props

    return (
      <>
        <input
          className="A_Input"
          placeholder={placeholder}
          ref={this.input}
          value={value}
          onInput={this.handleInput}
          onKeyDown={(e) => {
            e.key === 'Enter' && handleSubmit()
          }}
        />
      </>
    )
  }
}