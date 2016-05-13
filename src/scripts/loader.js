import JSXComponent from 'metal-jsx';

class Loader extends JSXComponent {
  render() {
    return (
      <div class="status">
        <img class="status-geek" src="../images/loader.png" alt="Geek" />
        <img class="status-rays" src="../images/rays.png" alt="Rays" />
        <div class="status-msg">
          <p>Measuring</p>
          <p>{this.config.url}</p>
        </div>
      </div>
    )
  }
}

export default Loader;
