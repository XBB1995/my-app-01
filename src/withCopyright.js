// HOC High-order Component 高阶组件
import React, { Component } from 'react'

const withCopyright = (YourComponent) => {
  return class WithCopyright extends Component {
    render() {
      return (
        <>
          {/* 为了保留props中的状态 必须要将props传递下去才能渲染 */}
          <YourComponent {...this.props} />
          <div>&copy; 2020 &emsp;Chen17</div>
        </>
      )
    }
  }
}

export default withCopyright
