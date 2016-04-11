import React from 'react';

class Failure extends React.Component {
  render() {
    let title = `Error ${this.props.error}`;

    if (this.props.error === 400) {
      title = 'URL can\'t be reached';
    }

    return (
      <div className="status">
        <img className="status-geek" src="../images/error.png" alt="Geek" />
        <img className="status-rays" src="../images/rays.png" alt="Rays" />
        <div className="status-msg">
          <p>{title}</p>
          <p>Try again on another tab or fill an <a href={"https://github.com/zenorocha/browser-calories-chrome/issues/new?title=Error+" + this.props.error + "&body=URL%3A+" + this.props.url} target="_blank">issue on GitHub</a></p>
        </div>
      </div>
    )
  }
}

export default Failure;
