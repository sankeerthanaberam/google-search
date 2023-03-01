// Write your code here
const SuggestionItem = props => {
  const {SuggestionsDetails, selectValue} = props
  const {suggestion} = SuggestionsDetails

  const selectIcon = () => {
    selectValue(suggestion)
  }

  return (
    <li className="suggestion-list">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={selectIcon}
      />
    </li>
  )
}

export default SuggestionItem
