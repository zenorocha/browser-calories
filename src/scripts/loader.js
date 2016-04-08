import React from 'react';

class Loader extends React.Component {
  render() {
    return (
      <div className="status">
        <img className="status-geek" src="https://browserdiet.com/assets/img/43.png" alt="Superman" />
        <img className="status-rays" src="https://browserdiet.com/assets/img/rays.png" alt="Rays" />
        <div className="status-msg">
          <p>Measuring</p>
          <p>{this.props.url}</p>
        </div>
      </div>
    )
  }
}

export default Loader;
