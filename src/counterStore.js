// createContext 使用与跨组件传值的方法
import React, { Component, createContext } from 'react'

// createContext 方法的结果是一个对象 可以解构并重命名 
// 主要包括 Provider 提供状态 和 Consumer 接收状态
const {
  Provider,
  // 解构 重新命名 Consumer
  Consumer: CounterConsumer
} = createContext()

// 封装一个基本的Provider 因为直接使用Provider不方便管理状态
class CounterProvider extends Component {
  constructor() {
    super()
    // 这里的状态就是共享的， 任何CounterProvider的后代组件都可以通过
    // CounterConsumer来接收 这里的状态
    this.state = {
      count: 100
    }
  }

  // 这里的方法也会继续通过Provider继续共享下去
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      // 使用Provider这个组件， 必须要有一个value值
      // 这个value里可以传递任何的状态 数值或方法
      <Provider value={{
        count: this.state.count,
        onIncrementCount: this.incrementCount,
        onDecrementCount: this.decrementCount
      }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export {
  CounterProvider,
  CounterConsumer
}