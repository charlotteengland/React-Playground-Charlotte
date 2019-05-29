import React from 'react'

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      who: 0

    }
  }

  handleButtonWorldClick = () => {
    this.setState({ who: this.state.who = "World"})
  }

  handleButtonFriendClick = () => {
    this.setState({ who: this.state.who = "Friend!"})
  }

  handleButtonReactClick = () => {
    this.setState({ who: this.state.who = "React!"})
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick= {this.handleButtonWorldClick}>
         World
        </button>
        <button onClick= {this.handleButtonFriendClick}>
         Friend
        </button>
        <button onClick= {this.handleButtonReactClick}>
          React
        </button>
      </div>
    )
  }
}

export default HelloWorld;