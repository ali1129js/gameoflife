/**
 * @Author: Ali Ismail
 * @Date:   2018-04-21T17:11:51+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-21T17:32:49+02:00
 */
import React , { Component } from 'react'

class Box extends Component {

  selectBox = () => {
    this.props.selectBox(this.props.row, this.props.col)
  }
  render() {
    return (
      <div
        className={this.props.boxClass}
        id={this.props.id}
        onClick={this.selectBox}
      />
    )
  }
}
export default Box
