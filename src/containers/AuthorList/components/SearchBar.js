import React from 'react'
// import { filterItems } from './list-controller'
// import { FancyInput } from './styles'

const SearchBar = ({ lists, setLists }) => (
  <div>
    <input
      type="text"
      placeholder="Filter..."
      id="searchbar"
      value={lists.search}
      onChange={e => setLists({
        search: e.target.value,
        shownList: lists.fullList.filter(({ text }) => text.includes(e.target.value)),
      })}
    />
    {/* <FancyButton onClick={() => filterItems}>Search</FancyButton> */}
  </div>
)

export default SearchBar
