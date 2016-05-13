import JSXComponent from 'metal-jsx';

class Failure extends JSXComponent {
  render() {
    let title = `Error ${this.config.error.statusCode}`;

    if (this.config.error.statusCode === 400) {
      title = 'URL can\'t be reached';
    }

    return (
      <div className="status">
        <img className="status-geek" src="../images/error.png" alt="Geek" />
        <img className="status-rays" src="../images/rays.png" alt="Rays" />
        <div className="status-msg">
          <p>{title}</p>
          <p>Try again on another tab or fill an <a href={"https://github.com/zenorocha/browser-calories-chrome/issues/new?title=Error+" + this.config.error.statusCode + "+for+" + this.config.url + "&body=%3E+" + this.config.error.message} target="_blank">issue on GitHub</a></p>
        </div>
      </div>
    )
  }
}

export default Failure;
