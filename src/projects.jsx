import Project from "./project";
import ProjectExpanded from "./projectExpanded";
import data from "./projects-info.json";

const Projects = (props) => {
  const { lineAnimation, clicked, setClicked } = props;

  function projectClick(elem) {
    if (clicked == "") {
      let elemProps = {
        name: elem.getAttribute("name"),
        desc: elem.getAttribute("desc"),
        mobileimage: elem.getAttribute("mobileImage"),
        desktopimage: elem.getAttribute("desktopimage"),
        liveurl: elem.getAttribute("liveurl"),
        github: elem.getAttribute("github"),
      };
      setClicked(elemProps);
    } else {
      setClicked("");
    }
  }

  let projectsReturn = Object.entries(data).map((e) => (
    <Project
      projectClick={projectClick}
      name={e[1].name}
      key={e[1].name}
      desc={e[1].desc}
      mobileimage={e[1].mobileimage}
      desktopimage={e[1].desktopimage}
      liveurl={e[1].liveurl}
      github={e[1].github}
      lineAnimation={lineAnimation}
    />
  ));

  let expandedReturn = (
    <ProjectExpanded
      projectClick={projectClick}
      name={clicked.name}
      desc={clicked.desc}
      mobileimage={clicked.mobileimage}
      desktopimage={clicked.desktopimage}
      liveurl={clicked.liveurl}
      github={clicked.github}
      lineAnimation={lineAnimation}
    />
  );

  return (
    <section id="projects">
      {clicked == "" ? projectsReturn : expandedReturn}
    </section>
  );
};

export default Projects;
