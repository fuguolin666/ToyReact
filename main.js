import { createElement, Component, render } from "./toyReact.js";
class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      a: 1,
      b: 2,
    };
  }
  render() {
    return (
      <div>
        <h1>123</h1>
        <span>{this.state.a.toString()}</span>
        {this.children}
      </div>
    );
  }
}

render(
  <MyComponent id="a" class="c">
    <div>asd</div>
    <div>wer</div>
    <div>435</div>
    <div>dfg</div>
  </MyComponent>,
  document.body
);
