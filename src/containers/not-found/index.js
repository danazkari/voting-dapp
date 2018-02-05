import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
  <div>
    <h2>No dice!</h2>
    <p>
      Sorry mate, seems like you've found unkown land.
      Please refer back to our <Link to='/'>home page</Link>.
    </p>
  </div>
)
