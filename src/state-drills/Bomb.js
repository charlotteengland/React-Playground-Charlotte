import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    count: 0
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
    
  }
render() {
  return (
    <div>
      <p>Tick or Tock</p>
    </div>
  )
}


}
export default Bomb;