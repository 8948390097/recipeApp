import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (

    <div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="">
            <Link className="navbar-brand" to="#">Navbar</Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Counter">Counter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Expense">Expense</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Conditon">Conditon</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Recipe">Recipe</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>


      {/* <div class="container">
  <h3>Basic Navbar Example</h3>
  <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
</div> */}




    </div>
  )
}
