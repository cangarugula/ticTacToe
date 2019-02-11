import React, {Component} from 'react'

class TicTacToe extends Component {
  constructor(){
    super()
    this.state = {
      row1: [0,0,0],
      row2: [0,0,0],
      row3: [0,0,0],
      mark: "x"
    }
    this.handlePlay = this.handlePlay.bind(this)
  }

  handlePlay(row,i){
    const newRow = this.state[row]
    if(typeof newRow[i] === 'number'){
      newRow[i] = this.state.mark
      this.setState({
        [row]: newRow
      })
      if(this.state.mark === 'x'){
        this.setState({
          mark: "o"
        })
      } else {
        this.setState({
          mark: 'x'
        })
      }
    }
  }



  render(){

    const { handlePlay } = this

    const keys = Object.keys(this.state)
    const rows = keys.slice(0,keys.length-1)

    return (
      <div>
        <div>
          {
            rows.map(row => (
              <div>
                {
                  this.state[row].map((place,i) => (
                  <span onClick={() => handlePlay(row,i)} key={i}>{place}</span>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default TicTacToe
