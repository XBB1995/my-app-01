import React, { Component } from 'react'
import { CounterConsumer } from '../../counterStore'

// 定义一个Counter组件
export default class Counter extends Component {
  render() {
    return (
      // 使用CounterConsumer来接收count的值
      <CounterConsumer>
        {
          // 注意！注意！注意！
          // Consumer的children必须是一个方法
          // 这个方法的参数就是Provider提供的状态value
          ({ count }) => {
            return <span>{count}</span>
          }
        }
      </CounterConsumer>
    )
  }
}