import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
  // 类组件当中
  // 传入静态对象 来做类型校验
  static propTypes = {
    btnText: PropTypes.string.isRequired
  }

  static defaultProps = {
    btnText: '默认添加'
  }

  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
    // 只需要执行一次
    this.handleAddClick = this.handleAddClick.bind(this)
    // 创建ref
    this.inputDom = createRef()
  }

  handleInputChange = (e) => {
    // console.log(e.currentTarget)
    let inputValue = e.currentTarget.value
    this.setState({ inputValue })
    // 如果对象是会被复用的 则不能够使用函数形式的setState 动态获取
    // 但如果先额外给出变量保存inputValue则不报错
    // 直接使用对象的方式则不报错
    // this.setState(() => {
    //   return {
    //     inputValue: e.currentTarget.value
    //   }
    // })
    // e.persist()
  }

  handleAddClick = () => {
    if (this.state.inputValue === "") return
    this.props.addTodo(this.state.inputValue)
    this.setState({
      inputValue: ''
    }, () => {
      this.inputDom.current.focus()
    })
  }

  handleKeyUp = (e) => {
    // 键盘码 keyCode
    if (e.keyCode === 13) this.handleAddClick()
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
          // 注意添加ref需要 在元素上绑定
          ref={this.inputDom}
        ></input>
        <button onClick={this.handleAddClick}>{this.props.btnText}</button>
      </div>
    )
  }
}
