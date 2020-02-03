import React from 'react'
import { render } from 'react-dom'
import App from './App'
<<<<<<< HEAD
import { CounterProvider } from './counterStore'

render(
  <CounterProvider>
    <App />
  </CounterProvider>,
=======

render(
  <App />,
>>>>>>> 534797f39523a917ca70c5dfc36073abd536679c
  document.querySelector('#root')
)