import React from 'react';

class RequestButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.handleClick} className="Request-button">
        Request a random Star Wars character
      </button>
    );
  }
}

export default RequestButton;
