import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export default class TodoList extends Component {
  static propTypes = {
    // 使用PropTypes.shape来定制对象中各个元素的类型
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })).isRequired
  }
  render() {
    const {
      todos,
      onCompletedChange
    } = this.props
    return (
      <ul>
        {
          todos.map(todo => {
            return (
              <TodoItem
                key={todo.id}
                // 展开运算符
                {...todo}
                onCompletedChange={onCompletedChange}
              />
            )
          })
        }
      </ul>
    )
  }
}
