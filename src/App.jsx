import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [scene, setScene] = useState(0);
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

  const img = (name) => `${import.meta.env.BASE_URL}${name}`;

  return (
    <div className="page">
      {/* SCENE 0 – INTRO */}
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

      {/* SCENE 1 – SINGLE ROSE */}
      {scene === 1 && (
        <div className="scene">
          <img src={img("rose.png")} className="main-image" alt="Rose" />
          <button className="next-btn" onClick={() => setScene(2)}>
            Next →
          </button>
        </div>
      )}

      {/* SCENE 2 – BROKEN ROSE */}
      {scene === 2 && (
        <div className="scene">
          <img
            src={img("broken-rose.png")}
            className="main-image"
            alt="Broken Rose"
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

      {/* SCENE 3 – GAJRA */}
      {scene === 3 && (
        <div className="scene">
          <img src={img("gajra.png")} className="main-image" alt="Gajra" />
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

      {/* SCENE 4 – BOUQUET + FINAL MESSAGE */}
      {scene === 4 && (
        <div className="scene">
          <img src={img("bouquet.webp")} className="main-image" alt="Bouquet" />

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
              <span className="gajra-text">GAJRA</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
