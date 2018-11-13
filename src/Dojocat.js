import React, { Component } from 'react'

class Dojocat extends Component {
  render() {
    return (
      <div>
        <li>
          <img
            class="octopic"
            alt="dojocat"
            src="https://octodex.github.com/images/dojocat.jpg"
            height="424"
            width="424"
          />
          <div class="triangle" />
          <div class="image-footer">
            <div class="image-number">#132</div>
            <div class="right-footer">
              <div class="the">the</div>
              <div class="image-name">Dojocat</div>
              <div class="by">by</div>
              <img
                class="author"
                alt="cameronmcefee"
                src="https://github.com/cameronmcefee.png"
                width="28"
                height="28"
              />
            </div>
          </div>
        </li>
      </div>
    )
  }
}

export default Dojocat
