import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

const Welcome = props => {
  return <div>Hello, {props.name}</div>;
};

class Welcome2 extends React.Component {
  GetNanikaNoText() {
    return "nanika-no-text";
  }

  render() {
    return (
      <div>
        <this.GetNanikaNoText></this.GetNanikaNoText>
        <p>Hello, {this.props.name}</p>
      </div>
    );
  }
}

const tick = () => {
  const element = (
    <div>
      <Welcome name="nokura.me"></Welcome>
      <br />
      <Welcome2 name="https://nokura.me"></Welcome2>
      <h1>Hello, World</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
};
setInterval(tick, 1000);
// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
