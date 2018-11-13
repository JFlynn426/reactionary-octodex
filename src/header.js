import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <ul class="navigation">
            <div class="logo">
              <img
                alt="gitlogo"
                src="https://octodex.github.com/ui/logo.png"
                height="22"
              />
            </div>
            <div class="menu">
              <li>RSS</li>
              <li>FAQ</li>
              <li>Back to GitHub</li>
            </div>
          </ul>
        </header>
      </div>
    )
  }
}

export default Header
