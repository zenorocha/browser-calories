import React from 'react';

class Failure extends React.Component {
  render() {
    return (
      <div className="status">
        <img className="status-geek" src="https://browserdiet.com/assets/img/46.png" alt="Superman" />
        <img className="status-rays" src="https://browserdiet.com/assets/img/rays.png" alt="Rays" />
        <div className="status-msg">
          <p>Error {this.props.error}</p>
          <p>Please try again later</p>
        </div>
      </div>
    )
  }
}

export default Failure;
