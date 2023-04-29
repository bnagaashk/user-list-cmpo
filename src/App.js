import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const IntialuserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {inputSearch: ' ', userDetailsList: IntialuserDetailsList}

  Onchangeinput = event => {
    this.setState({inputSearch: event.target.value})
  }

  deleteUser = uniqueNo => {
    const {userDetailsList} = this.state
    const filteredData = userDetailsList.filter(
      eachuser => eachuser.uniqueNo !== uniqueNo,
    )
    this.setState({userDetailsList: filteredData})
  }

  render() {
    const {inputSearch, userDetailsList} = this.state
    const searchResult = userDetailsList.filter(eachUser =>
      eachUser.name.includes(inputSearch),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.Onchangeinput}
          value={inputSearch}
        />
        <ul className="list-container">
          {searchResult.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
