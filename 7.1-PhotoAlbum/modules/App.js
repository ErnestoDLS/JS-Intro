import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>My Albums</h1>
        <ul role="nav">
          <li><Link to="/albums">Album 1</Link></li>
          <li><Link to="/albums">Album 2</Link></li>
          <li><Link to="/albums">Album 3</Link></li>
          <li><Link to="/albums">Album 4</Link></li>
          <li><Link to="/albums">Album 5</Link></li>
          <li><Link to="/albums">Album 6</Link></li>
        </ul>
          {this.props.children}

      </div>
    )
  }
})
