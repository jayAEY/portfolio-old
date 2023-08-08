import { AiOutlineClose } from 'react-icons/ai'
import { FaGithub, FaLink } from 'react-icons/fa' 

const ProjectExpanded = ({ name, desc, img, liveurl, github, projectClick }) => {
  return (
    <div className='project-expand'>
      <AiOutlineClose id='close-button' onClick={() => projectClick()}/>
      <h2>{name}</h2>
      <p>{desc}</p>
      <div className='project-links'>
        <a href={github}><FaGithub/></a>
        <a href={liveurl}><FaLink/></a>
      </div>
      <div className='image-container' onClick={() => (window.open(liveurl))}>       
        <img alt={`Screenshot of ${name}`}
          src={img}>
        </img> 
      </div>
    </div>
  )
}

export default ProjectExpanded