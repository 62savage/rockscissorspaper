import { Component } from "react";

export default class BoxClass extends Component {
  constructor(props) {
    super(props);
    this.boxResult = "";
  }

  render() {
    if (
      this.props.title === "Computer" &&
      this.props.result !== "tie" &&
      this.props.result !== ""
    ) {
      this.boxResult = this.props.result === "win" ? "lose" : "win";
    } else {
      this.boxResult = this.props.result;
    }
    return (
      <div className={`box ${this.props.result && this.boxResult}`}>
        <h1>{this.props.title}</h1>
        <img
          src={this.props.item && this.props.item.img}
          alt={this.props.item && this.props.item.desc}
          className="item-img"
        />
        <h2>{this.props.result && this.boxResult}</h2>
      </div>
    );
  }
}
