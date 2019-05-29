import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    count: 0,
    sound: 0
  }
}

  componentDidMount() {
  let interval = setInterval(() => {
    this.setState({
      count: this.state.count+1
    }) 
  }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  if (count % 2 === 0) {
    this.state.sound: tick
  }

  else {this.state.sound: tock}

  if (count === 8)  {
    this.state.sound: BOOM!
  }



render() {
  return (
    <div>
      <p>{sound}</p>
    </div>
  )
}


}
export default Bomb;