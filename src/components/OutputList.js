import React from 'react';

class OutputList extends React.Component {
  render() {
    if (this.props.charData == null) return null;
    return (
      <section className="Output-section">
        <ul>
          <li>
            <span>
              {`Name: `}
            </span>
            <span>
              {this.props.charData.name}
            </span>
          <li>
            <span>
              {`Gener: `}
            </span>
            <span>
              {this.props.charData.gender}
            </span>
          </li>
          <li>
            <span>
              {`Height: `}
            </span>
            <span>
              {this.props.charData.height}
            </span>
          </li>
          <li>
            <span>
              {`Mass: `}
            </span>
            <span>
              {this.props.charData.mass}
            </span>
          </li>
          <li>
            <span>
              {`Eye color: `}
            </span>
            <span>
              {this.props.charData.eye_color}
            </span>
          </li>
          </li>
        </ul>
      </section>
    );
  }
}

export default OutputList;
