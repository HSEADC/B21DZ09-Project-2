import React from 'react'
import M_SearchForm from './M_SearchForm.jsx'

const addressPart = '.adc.ac/'

export default class O_SearchBar extends React.Component {
  constructor(props) {
    super(props)

    const { searchInputValue } = props

    this.state = {
      isSearchButtonDisabled: true,
      postTeasers: [],
      searchInputValue: searchInputValue
    }
  }

  componentDidMount() {
    // let postTeasers = []

    getPostTeasers().then((data) => {
      this.setState({
        postTeasers: data
      })
    })
  }

  getPathFromUrl = (url) => {
    return url.split(addressPart)[0]
  }

  handleSearchInput = (searchInputValue) => {
    console.log('Input', searchInputValue)

    let isSearchButtonDisabled = true

    if (searchInputValue.length >= 3) {
      isSearchButtonDisabled = false
    }

    this.setState({
      isSearchButtonDisabled,
      searchInputValue
    })
  }

  handleSearchSubmit = () => {
    const { searchInputValue } = this.state

    if (searchInputValue.length >= 3) {
      const url = this.getPathFromUrl(window.location.href)

      window.location.href =
        url + addressPart + 'search.html?request=' + searchInputValue
    }
  }
  render() {
    const { searchInputValue, isSearchButtonDisabled } = this.state

    return (
      <div className="O_SearchBar">
        <M_SearchForm
          searchInputValue={searchInputValue}
          isSearchButtonDisabled={isSearchButtonDisabled}
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />
      </div>
    )
  }
}