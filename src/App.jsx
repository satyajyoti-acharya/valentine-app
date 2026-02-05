import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./App.css";

const messages = [
  "Satare mate naa kahiba? 😢",
  "Mo hrudaya ku kasta daba? 💔",
  "Bubu emiti kariba mo saha? 🥺",
  "Bubu mu kandi pakeibi... 😭"
];

function App() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [showMsg, setShowMsg] = useState(false);
  const [pos, setPos] = useState({ top: 120, left: 140 });
  const [accepted, setAccepted] = useState(false);
  const [size, setSize] = useState({
    w: window.innerWidth,
    h: window.innerHeight
  });

  useEffect(() => {
    const onResize = () =>
      setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const moveNo = () => {
  const maxX = 220;
  const maxY = 200;

  setShowMsg(true);

  setPos({
    left: Math.random() * maxX,
    top: Math.random() * maxY
  });

  setMsgIndex((i) => (i + 1) % messages.length);

  // hide message after move
  setTimeout(() => setShowMsg(false), 900);
};


  if (accepted) {
  return (
    <div className="page">
      <Confetti width={size.w} height={size.h} />
      <div className="yes-page">
        <h1>Yayyy!!! 💖🥰</h1>
        <h2>I knew it 😏</h2>
        <img
          src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
          alt="Smirk"
        />
      </div>
    </div>
  );
}


  return (
    <div className="page">
      <div className="card">
        <h1>Will you be my Valentine? 💘</h1>

        <div className="buttons">
          <button className="yes" onClick={() => setAccepted(true)}>
            Yes 💕
          </button>

          <button
            className="no"
            style={{ top: pos.top, left: pos.left }}
            onMouseEnter={moveNo}
            onTouchStart={moveNo}
          >
            No 🙃
            {showMsg && <div className="no-msg">{messages[msgIndex]}</div>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
