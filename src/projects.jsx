import { useState } from 'react'
import Project from './project'
import ProjectExpanded from "./projectExpanded"
import data from "./projects-info.json"

const Projects = ( props ) => {
  const{clicked, setClicked} = props

  function projectClick(elem) {
    if(clicked == "") {
      let elemProps = { "name" : elem.getAttribute("name"),
                        "desc" : elem.getAttribute("desc"),
                        "img" : elem.getAttribute("img"),
                        "liveurl" : elem.getAttribute("liveurl"),
                        "github" : elem.getAttribute("github")
                      }
      setClicked(elemProps)
    } else {
      setClicked("")
    }
  }
  let projectsReturn = Object.entries(data).map((e) => <Project projectClick={projectClick} name={e[1].name} key={e[1].name} desc={e[1].desc} img={e[1].img} liveurl={e[1].liveurl} github={e[1].github}/> )

  let expandedReturn =  <ProjectExpanded projectClick={projectClick} name={clicked.name} desc={clicked.desc} img={clicked.img} liveurl={clicked.liveurl} github={clicked.github} />    

  return ( 
    <section id="projects"> 
      { clicked == "" ? projectsReturn : expandedReturn }
    </section>
  )
}

export default Projects