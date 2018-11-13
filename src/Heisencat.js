import React, { Component } from 'react'

class Heisencat extends Component {
  render() {
    return (
      <div>
        <li>
          <img
            class="octopic"
            src="./images/heisencat.png"
            height="424"
            width="424"
          />
          <div class="triangle" />
          <div class="image-footer">
            <div class="image-number">#132</div>
            <div class="right-footer">
              <div class="the">the</div>
              <div class="image-name">Heisencat</div>
              <div class="by">by</div>
              <img
                class="author"
                src="https://github.com/jonrohan.png"
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

export default Heisencat
