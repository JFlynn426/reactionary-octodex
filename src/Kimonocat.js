import React, { Component } from 'react'

class Kimonocat extends Component {
  render() {
    return (
      <div>
        <li>
          <img
            class="octopic"
            alt="heyhayhay"
            src="https://octodex.github.com/images/kimonotocat.png"
            height="424"
            width="424"
          />
          <div class="triangle" />
          <div class="image-footer">
            <div class="image-number">#132</div>
            <div class="right-footer">
              <div class="the">the</div>
              <div class="image-name">Kimonocat</div>
              <div class="by">by</div>
              <img
                class="author"
                alt="heyhayhay"
                src="https://github.com/jeejkang.png"
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

export default Kimonocat
