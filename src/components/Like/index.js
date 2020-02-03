import React, { Component } from 'react'

export default class Like extends Component {
  constructor() {
    super()
    this.state = {
      isLiked: true
    }
  }
  handleLikeClick = () => {
    // 第一种方式 可以传入一个对象
    // this.setState({
    //   isLiked: !this.state.isLiked
    // })
    // 第二种方式 传入一个方法
    // 方法包含两个参数 上一次的状态 和 props
    // setState 是一种异步的方法!!!
    this.setState((prevState, props) => {
      return {
        isLiked: !prevState.isLiked
      }
    }, () => {
      // 由于setState是异步的 所以需要在回调中获取最新的状态
      console.log(this.state.isLiked)
    })
  }
  render() {
    return (
      <div>
        <span onClick={this.handleLikeClick}>Click me!</span>
        {this.state.isLiked ? '笑脸' : '哭脸'}
      </div>
    )
  }
}
