/**
 * @Author: Ali Ismail
 * @Date:   2018-04-19T16:12:59+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-19T16:21:23+02:00
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Grid extends React.Component {
  render(){
    return(
      <div>Grid</div>
    )
  }
}
class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      generation:0
    }
  }
  render(){
    return (
      <div>
        <h1>The Game Of Life</h1>
        <Grid
        />
        <h2>Generations: {this.state.generation} </h2>
      </div>
    )
  }
}
ReactDOM.render(<Main />, document.getElementById('root'))
