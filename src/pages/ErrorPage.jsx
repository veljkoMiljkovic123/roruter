import React from 'react'
import { Link } from 'react-router-dom'
function ErrorPage() {
  return (
    <div>
        <h2>ErrorPage</h2>
        <Link to={'/'}>Back to home</Link>
    </div>
  )
}

export default ErrorPage