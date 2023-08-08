const Project = ({ name, desc, img, liveurl, github, projectClick }) => {

    function projectHover(elem, overOrOut) {
        if (overOrOut == "over") {
                elem.style.background = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${img}")`
                elem.style.backgroundPosition = "center"
                elem.style.backgroundSize = "cover"
        } else if (overOrOut == "out") {
                elem.style.background = `url("${img}")`
                elem.style.backgroundPosition = "center"
                elem.style.backgroundSize = "cover" 
        }
    } 

    return (  
        // <a href=".project-expand">        
            <div 
            className='project'
            id={ name } 
            alt={`Screenshot of ${name}`}
            style={{ background: `url("${img}")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }} 
            onMouseOver={(e) => projectHover(e.target, "over")} 
            onMouseOut={(e) => projectHover(e.target, "out")}  
            onClick={(e) => projectClick(e.target)}
            name={name} 
            desc={desc} 
            img={img} 
            liveurl={liveurl} 
            github={github}
            > 
            <h2>{ name }</h2>
            </div>
        // </a> 
    )
}

export default Project