import './index.css'

const GreetingItem = props => {
  const {data} = props
  const {imageUrl} = data
  return (
    <>
      <img src={imageUrl} alt="{buttonText}" className="greeting-img" />
    </>
  )
}

export default GreetingItem
