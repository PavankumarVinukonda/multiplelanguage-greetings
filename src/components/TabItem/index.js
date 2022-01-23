import './index.css'

const TabItem = props => {
  const {data, activeId, setActiveId} = props
  const {buttonText} = data

  const onCLikingTab = () => {
    setActiveId(buttonText)
  }

  const buttoncolor = buttonText === activeId
  const setActiveColor = buttoncolor ? 'name red' : 'name'

  return (
    <li className="list-element">
      <button type="button" className={setActiveColor} onClick={onCLikingTab}>
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
