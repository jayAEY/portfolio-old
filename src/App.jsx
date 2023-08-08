import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Projects from './projects'
import Project from './project'
import ProjectExpanded from './projectExpanded'
import { FaCodepen, FaEnvelope, FaGithub } from 'react-icons/fa'

function App() {
  const[clicked, setClicked] = useState("")
  return (
    <>
      <header>
        <h1 onClick={() => setClicked("")}> Jo <br/> Apuya </h1> 
        <div id="bio">
          <p> I'm a freelance self-taught front-end web developer and graphic designer based in Vancouver, Canada</p> 
          <div id='links'>
            <a href='mailto:jomariapuya@gmail.com?subject = Questions&body = Message'><FaEnvelope/></a>
            <a href='https://github.com/jayAEY'><FaGithub/></a>
            <a href='https://codepen.io/jayAEY/'><FaCodepen/></a>
          </div>
        </div>
      </header>
      <Projects clicked={clicked} setClicked={setClicked}/>
    </>
  )
}
export default App
