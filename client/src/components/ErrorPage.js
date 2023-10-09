import React from 'react'
import { useRouteError } from 'react-router-dom'
const ErrorPage = () => {
    const err=useRouteError();
  return (
    <div>
      <h1>It's {err.statusText} error</h1>
    </div>
  )
}

export default ErrorPage
