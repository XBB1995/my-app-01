import React, { Component } from 'react'
<<<<<<< HEAD
import {
  Counter,
  CountBtn
} from './components'

export default class App extends Component {
  render() {
    return (
      <>
        <CountBtn type="decrement" >-</CountBtn>
        <Counter />
        <CountBtn type="increment" >+</CountBtn>
      </>
    )
  }
}
=======
import { getTodos } from './services'

import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like
} from './components'

export default class App extends Component {
  // 类组件才有状态 故 类组件也称为有状态组件
  // 函数式组件一般没有状态 也称为 无状态组件
  // 此外 还可以分为 
  // 受控式组件 props 
  // 非受控式组件 
  // 半受控式组件 props + state
  // state = {
  //   desc: 'go go go!'
  // }

  // 生命周期
  // constructor 构造函数只会执行一次
  // getDerivedStateFromProps 和 componentWillMount 冲突
  // shouldComponentUpdate
  // render
  // getSnapshotBeforeUpdate
  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount

  // getDerivedStateFromProps 直接返回一个对象(state) 静态方法没有this!!!

  constructor() {
    super()
    this.state = {
      desc: 'Just do it!',
      todos: [],
      isLoading: false
    }
  }

  getData = () => {
    this.setState({
      isLoading: true
    })
    getTodos()
      .then(resp => {
        // console.log(resp)
        if (resp.status === 200) {
          this.setState({
            todos: resp.data
          })
        } else {
          // 处理错误
        }
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        this.setState({
          isLoading: false
        })
      })
  }

  componentDidMount() {
    this.getData()
  }

  addTodo = (todoTitle) => {
    this.setState({
      // 不要使用push push返回的是数组的长度
      // 可以使用concat或者map 来返回数组
      // 如果非要使用push 则需要先复制一份数据 slice
      todos: this.state.todos.concat({
        id: 777,
        title: todoTitle,
        completed: false
      })
    })
  }

  onCompletedChange = (id) => {
    // console.log(id)
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) todo.completed = !todo.completed
          return todo
        })
      }
    })
  }

  render() {
    return (
      <>
        {/* 使用空标签或者Fragment可以减少生成一层包裹div */}
        <TodoHeader desc={this.state.desc} x={1} y={2}>
          {/* 插槽内容 是 props.children */}
          待办事件列表
        </TodoHeader>
        <Like></Like>
        <TodoInput
          btnText='Add TodoItem'
          addTodo={this.addTodo}
        ></TodoInput>
        {
          this.state.isLoading
            ?
            <div>Loading...</div>
            :
            <TodoList
              todos={this.state.todos}
              onCompletedChange={this.onCompletedChange}
            />
        }

        {/* 遍历todos */}
        {/* {this.state.todos.map(todo => {
          return <div key={todo.id}>{todo.title}***{todo.id}</div>
        })} */}
      </>
    )
  }
}
>>>>>>> 534797f39523a917ca70c5dfc36073abd536679c
