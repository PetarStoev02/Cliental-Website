import React from 'react'

const ProjectCard = ({ project: { title, img, text } }) => {
  return (
    <div className='card-wrapper'>
        <div className='title'>{title}</div>
        <div className="image">{img}</div>
        <div className="card-text">{text}</div>
    </div>
  )
}

export default ProjectCard