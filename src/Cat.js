import React, { Component } from 'react'

class Cat extends Component {
  render() {
    return (
      <div>
        <li>
          <img
            class="octopic"
            alt="heyhayhay"
            src={this.props.address}
            height="424"
            width="424"
          />
          <div class="triangle" />
          <div class="image-footer">
            <div class="image-number">{this.props.image - number}</div>
            <div class="right-footer">
              <div class="the">the</div>
              <div class="image-name">{this.props.name}</div>
              <div class="by">by</div>
              <img
                class="author"
                alt="heyhayhay"
                src={this.props.author}
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

export default Cat
