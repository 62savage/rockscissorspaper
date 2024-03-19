import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://image.auction.co.kr/itemimage/28/65/8e/28658ea5e6.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://i.namu.wiki/i/PGp3JnsDa9eaMKBC1OwnSU4M0vLE0d_40ehrl0aUYum98U6tg0Nnl8W6_c0bQk2Bp9mQCMTe7eQt32pszxoQGw.webp",
  },
  paper: {
    name: "Paper",
    img: "https://media.istockphoto.com/id/497710508/ko/%EC%82%AC%EC%A7%84/%EA%B5%AC%EA%B2%A8%EC%A7%84-%EC%A2%85%EC%9D%B4-%EB%B0%B0%EA%B2%BD%EA%B8%B0%EC%88%A0.jpg?s=612x612&w=0&k=20&c=3U-UM6ysEuGzNVOAgtr-z275cOESyz1n2cYz-A08Glk=",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <>
      <div className="main">
        <Box title="You" item={userSelect} />
        <Box title="Computer" />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  );
}

export default App;
