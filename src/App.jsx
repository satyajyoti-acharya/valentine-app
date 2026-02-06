import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [scene, setScene] = useState(0);
  // 0=intro | 1=rose | 2=broken | 3=gajra | 4=bouquet
  const [showFinalNote, setShowFinalNote] = useState(false);

  useEffect(() => {
    if (scene === 4) {
      const timer = setTimeout(() => {
        setShowFinalNote(true);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setShowFinalNote(false);
    }
  }, [scene]);

  return (
    <div className="page">
      {scene === 0 && (
        <div className="scene">
          <p className="poem">
            Is laal button par click kijiye… <br />
            ek gulaab ke liye, <br />
            jo shayad aap se kam khoobsurat ho.
          </p>

          <button className="rose-btn" onClick={() => setScene(1)}>
            🌹
          </button>
        </div>
      )}

      {scene === 1 && (
        <div className="scene">
          <img src="/rose.png" alt="Rose" className="main-image" />
          <button className="next-btn" onClick={() => setScene(2)}>
            Next →
          </button>
        </div>
      )}

      {scene === 2 && (
        <div className="scene">
          <img
            src="/broken-rose.png"
            alt="Broken Rose"
            className="main-image"
          />
          <p className="poem">
            Har gulaap jo aapke samne <br />
            apni haishiyat dikhana chah rha tha <br />
            uska naam-o-nishaan mita doon.
          </p>
          <button className="next-btn" onClick={() => setScene(3)}>
            Next →
          </button>
        </div>
      )}

      {scene === 3 && (
        <div className="scene">
          <img src="/gajra.png" alt="Gajra" className="main-image" />
          <p className="poem">
            Har wo gajrah jiska naam hi naa tha, <br />
            aapki baalon mein lagake <br />
            usiki shaan badhaadoon
          </p>
          <button className="next-btn" onClick={() => setScene(4)}>
            Next →
          </button>
        </div>
      )}

      {scene === 4 && (
        <div className="scene">
          <img src="/bouquet.webp" alt="Bouquet" className="main-image" />

          <p className="poem">
            Wo gulaab jo aapke samne aayitra rha tha, <br />
            abb ese das rakhdiye aapke samne <br />
            just to make them realise <br />
            ki kaun zyada khoobsurat hai 💖
          </p>

          {showFinalNote && (
            <div className="final-note fade-in">
              <p className="love">I love you Jita.</p>
              <p className="happy">Happy Rose Day</p>
              <span className="strike">ROSE</span>
              <span className="gajra">GAJRA</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
