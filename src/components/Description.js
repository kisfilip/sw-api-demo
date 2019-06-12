import React from 'react';

class Description extends React.Component {
  render() {
    return (
      <p className="Description">
        {`This demo uses swapi API to fetch a random Star Wars character. The number of available characters is: ${this.props.numOfChars}.
        Press the button below to show a random Star Wars character.`}
      </p>
    );
  }
}

export default Description;

