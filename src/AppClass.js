import { Component } from "react";
import BoxClass from "./components/BoxClass";

const choice = {
  rock: {
    name: "Rock",
    img: "https://image.auction.co.kr/itemimage/28/65/8e/28658ea5e6.jpg",
    desc: "바위",
  },
  scissors: {
    name: "Scissors",
    img: "https://i.namu.wiki/i/PGp3JnsDa9eaMKBC1OwnSU4M0vLE0d_40ehrl0aUYum98U6tg0Nnl8W6_c0bQk2Bp9mQCMTe7eQt32pszxoQGw.webp",
    desc: "가위",
  },
  paper: {
    name: "Paper",
    img: "https://media.istockphoto.com/id/497710508/ko/%EC%82%AC%EC%A7%84/%EA%B5%AC%EA%B2%A8%EC%A7%84-%EC%A2%85%EC%9D%B4-%EB%B0%B0%EA%B2%BD%EA%B8%B0%EC%88%A0.jpg?s=612x612&w=0&k=20&c=3U-UM6ysEuGzNVOAgtr-z275cOESyz1n2cYz-A08Glk=",
    desc: "보",
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: null,
    };
  }

  play = (userChoice) => {
    this.setState({ userSelect: choice[userChoice] });
    const computerChoice = this.randomChoice();
    this.setState({
      computerSelect: choice[computerChoice],
      result: this.judgement(choice[userChoice], choice[computerChoice]),
    });
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) return "tie";
    else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };

  randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomNumber = Math.floor(Math.random() * itemArray.length);
    return itemArray[randomNumber];
  };

  render() {
    return (
      <>
        <div className="main">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button onClick={() => this.play("scissors")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </>
    );
  }
}
