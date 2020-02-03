import React from 'react'
import PropTypes from 'prop-types'

// 函数式组件 props形参需要额外标注
export default function TodoHeader(props) {
  return (
    <div>
      <h1>{props.children}</h1>
      <span><b>{props.desc}</b></span>
      {/* <p>{parseInt(props.x) + parseInt(props.y)}</p> */}
    </div>
  )
}

TodoHeader.propTypes = {
  desc: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

TodoHeader.defaultProps = {
  desc: '默认填充描述'
}