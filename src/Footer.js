import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <ul class="footermenu">
            <li>RSS</li>
            <li>FAQ</li>
          </ul>
          <div class="footerlogo">
            <i class="fab fa-github" />
          </div>
          <div class="copyright ">
            <p>© 2013 – 2018 GitHub, Inc.</p>
            <p>All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
