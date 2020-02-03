import React, { Component } from 'react'
const noop = () => { }

export default class TodoItem extends Component {
  handleCheckBoxChange = () => {
    // 能力测试
    // this.props.onCompletedChange && this.props.onCompletedChange(this.props.id)
    const {
      onCompletedChange = noop,
      id
    } = this.props
    // 简写的方式 用noop做函数的默认值 替代能力测试 保证代码的健壮性
    onCompletedChange(id)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.completed !== this.props.completed
    // 使用 PureComponent 自动执行一层浅比较
  }

  render() {
    // 使用下述方式简写代码
    const {
      completed,
      title
    } = this.props
    // console.log(`update ${this.props.title}.`)
    return (
      <li>
        <input
          type='checkbox'
          checked={completed}
          onChange={this.handleCheckBoxChange}
        ></input>
        <span>{title} {completed ? '已完成' : '未完成'}</span>
      </li>
    )
  }
}
