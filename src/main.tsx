import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/auth'
import { TaskProvider } from './context/task'
import { Router } from './Router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <UserProvider>
      <TaskProvider>
        <Router />
      </TaskProvider>
    </UserProvider>
  </BrowserRouter>,
)
