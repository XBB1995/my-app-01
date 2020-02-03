import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { CounterProvider } from './counterStore'

render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.querySelector('#root')
)