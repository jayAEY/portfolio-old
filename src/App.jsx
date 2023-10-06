import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
import Projects from "./projects";
import { FaCodepen, FaEnvelope, FaGithub } from "react-icons/fa";

function App() {
  const [clicked, setClicked] = useState("");

  function lineAnimation(elem) {
    let range = document.createRange();
    range.selectNodeContents(elem);
    let width = range.getBoundingClientRect().width;
    elem.style.setProperty("--lineWidth", `${width}px`);
  }

  return (
    <>
      <header>
        <h1
          onClick={() => setClicked("")}
          onMouseOver={(e) => lineAnimation(e.target)}
        >
          Jo <br /> Apuya
        </h1>
        <div id="bio">
          <p>
            {" "}
            I'm a freelance self-taught front-end web developer and graphic
            designer based in Vancouver, Canada
          </p>
          <div id="links">
            <a href="mailto:jomariapuya@gmail.com?subject = Questions&body = Message">
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/jayAEY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://codepen.io/jayAEY/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCodepen />
            </a>
          </div>
        </div>
      </header>
      <Projects
        lineAnimation={lineAnimation}
        clicked={clicked}
        setClicked={setClicked}
      />
    </>
  );
}
export default App;
