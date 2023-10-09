<<<<<<< HEAD
const Project = ({
  name,
  desc,
  mobileimage,
  desktopimage,
  liveurl,
  github,
  projectClick,
  lineAnimation,
}) => {
  function projectHover(elem, overOrOut) {
    if (overOrOut == "over") {
      elem.style.background = `
      linear-gradient(rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)),
      url("${mobileimage}")
      `;
      elem.style.backgroundPosition = "center";
      elem.style.backgroundSize = "cover";
    } else if (overOrOut == "out") {
      elem.style.background = `url("${mobileimage}")`;
      elem.style.backgroundPosition = "center";
      elem.style.backgroundSize = "cover";
    }
  }
  return (
    <div
      className="project"
      id={name}
      alt={`Screenshot of ${name}`}
      style={{
        background: `url("${mobileimage}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      onMouseOver={(e) => {
        projectHover(e.target, "over");
        lineAnimation(e.target);
      }}
      onMouseOut={(e) => projectHover(e.target, "out")}
      onClick={(e) => projectClick(e.target)}
      name={name}
      desc={desc}
      mobileimage={mobileimage}
      desktopimage={desktopimage}
      liveurl={liveurl}
      github={github}
    >
      <h2>{name}</h2>
    </div>
  );
};

export default Project;
=======
const Project = ({
  name,
  desc,
  mobileimage,
  desktopimage,
  liveurl,
  github,
  projectClick,
  lineAnimation,
}) => {
  function projectHover(elem, overOrOut) {
    if (overOrOut == "over") {
      elem.style.background = `
      linear-gradient(rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)),
      url("${mobileimage}")
      `;
      elem.style.backgroundPosition = "center";
      elem.style.backgroundSize = "cover";
    } else if (overOrOut == "out") {
      elem.style.background = `url("${mobileimage}")`;
      elem.style.backgroundPosition = "center";
      elem.style.backgroundSize = "cover";
    }
  }
  return (
    <div
      className="project"
      id={name}
      alt={`Screenshot of ${name}`}
      style={{
        background: `url("${mobileimage}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      onMouseOver={(e) => {
        projectHover(e.target, "over");
        lineAnimation(e.target);
      }}
      onMouseOut={(e) => projectHover(e.target, "out")}
      onClick={(e) => projectClick(e.target)}
      name={name}
      desc={desc}
      mobileimage={mobileimage}
      desktopimage={desktopimage}
      liveurl={liveurl}
      github={github}
    >
      <h2>{name}</h2>
    </div>
  );
};

export default Project;
>>>>>>> 33ad2bc587d336de7955996d6b1a633310e732c7
