import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TabItem from '../TabItem'
import GreetingItem from '../GreetingItem'
import './index.css'

const loadingStatus = {
  loading: 'LOADING',
  notLoading: 'NOTLOADING',
}

class Greeting extends Component {
  state = {
    greetingList: [],
    activeId: 'English',
    actvieData: [],
    loader: loadingStatus.notLoading,
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    const {greetingList, loader, activeId} = this.state
    const {languageGreetingsList} = this.props
    this.setState({
      loader: loadingStatus.loading,
    })
    const filterdList = greetingList.filter(
      item => item.buttonText === activeId,
    )[0]

    this.setState({
      greetingList: languageGreetingsList,
      actvieData: filterdList,
      loader: loadingStatus.notLoading,
    })
  }

  setActiveId = id => {
    const {actvieData, greetingList} = this.state
    this.setState({
      loader: loadingStatus.loading,
    })
    const filterdList = greetingList.filter(item => item.buttonText === id)[0]
    this.setState({
      activeId: id,
      actvieData: filterdList,
      loader: loadingStatus.notLoading,
    })
  }

  renderLoader = () => (
    <div className="loader">
      <Loader type="Tail-spin" height="50px" width="50px" />
    </div>
  )

  renderAll = () => {
    const {loader} = this.state
    switch (loader) {
      case loadingStatus.loading:
        return this.renderLoader()
      case loadingStatus.notLoading:
        return this.rederGrretingsContainer()
      default:
        return null
    }
  }

  renderTabItem = () => {
    const {greetingList, activeId} = this.state
    return (
      <ul className="ul-container">
        {greetingList.map(item => (
          <TabItem
            id={item.id}
            activeId={activeId}
            setActiveId={this.setActiveId}
            data={item}
          />
        ))}
      </ul>
    )
  }

  rederGrretingsContainer = () => {
    const {actvieData} = this.state
    console.log(actvieData)
    return (
      <>
        <GreetingItem data={actvieData} />
      </>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="greeting-heading">Multiligual Greetings</h1>
        {this.renderTabItem()}
        {this.renderAll()}
      </div>
    )
  }
}

export default Greeting
