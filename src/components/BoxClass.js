import { Component } from "react";

export default class BoxClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxResult: "",
    };
  }

  componentDidMount() {
    let boxResult;
    if (
      this.props.title === "Computer" &&
      this.props.result !== "tie" &&
      this.props.result !== ""
    ) {
      boxResult = this.props.result === "win" ? "lose" : "win";
    } else {
      boxResult = this.props.result;
    }

    this.setState({ boxResult });
  }

  render() {
    return (
      <div className={`box ${this.props.result && this.props.boxResult}`}>
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
