import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

export default () => {
  let match = useRouteMatch()

  return (
    <nav className="level">
      <div className="level-left">
        <div className="level-item">
          <p className="subtitle is-5">
            <strong>6</strong> books
          </p>
        </div>
        <div className="level-item">
          <Link to={`${match.url}/new`} className="button is-success">
            New
          </Link>
        </div>
        <div className="level-item is-hidden-tablet-only">
          <div className="field has-addons">
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Book name, ISBN..."
              />
            </div>
            <div className="control">
              <button className="button">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="level-right">
        <div className="level-item">
          <p>Order by</p>
        </div>
        <div className="level-item">
          <div className="select">
            <select>
              <option>Publish date</option>
              <option>Price</option>
              <option>Page count</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  )
}
