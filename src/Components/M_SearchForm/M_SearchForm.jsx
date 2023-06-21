import React from 'react'

import A_Input from 'Components/A_Input.jsx'
import A_Button from 'Components/A_Button.jsx'

export default class M_SearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  renderResetButton = () => {
    const { handleSearchInput } = this.props

    return (
      <A_Button
        text="X"
        type="resetField"
        disabled={false}
        handleClick={() => handleSearchInput('')}
      />
    )
  }

  handleInput = (value) => {
    this.setState({
      value
    })
  }

  handleSearchSubmit = () => {
    const { value } = this.state
    const { handleSearchSubmit } = this.props
    handleSearchSubmit(value)
  }

  render() {
    const {
      searchInputValue,
      isSearchButtonDisabled,
      handleSearchInput,
      handleSearchSubmit
    } = this.props

    return (
      <div className="M_SearchForm">
        <A_Input
          value={searchInputValue}
          placeholder="Я хочу найти..."
          handleInput={handleSearchInput}
          handleSubmit={handleSearchSubmit}
        />

        {searchInputValue != '' && this.renderResetButton()}

        <A_Button
          type="primary"
          disabled={isSearchButtonDisabled}
          handleClick={handleSearchSubmit}
        />
      </div>
    )
  }
}