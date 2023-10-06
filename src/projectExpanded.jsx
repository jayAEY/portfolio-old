import { AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectExpanded = ({
  projectClick,
  name,
  desc,
  mobileimage,
  desktopimage,
  liveurl,
  github,
  lineAnimation,
}) => {
  return (
    <div className="project-expand">
      <AiOutlineClose id="close-button" onClick={() => projectClick()} />
      <h2 onMouseOver={(e) => lineAnimation(e.target)}> {name}</h2>
      <p>{desc}</p>
      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={liveurl} target="_blank" rel="noopener noreferrer">
          <FaLink />
        </a>
      </div>
      <div className="image-container" onClick={() => window.open(liveurl)}>
        <img
          alt={`Screenshot of ${name}`}
          src={window.innerWidth < 500 ? mobileimage : desktopimage}
        ></img>
      </div>
    </div>
  );
};

export default ProjectExpanded;
