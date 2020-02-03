import axios from 'axios'
import apis from './apis'

const ajax = axios.create({
  baseURL: apis.baseURL
})

// 增加全局拦截器操作

export const getTodos = () => {
  return ajax.get(apis.todos)
}