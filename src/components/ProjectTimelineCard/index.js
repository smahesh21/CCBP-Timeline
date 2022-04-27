import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails
  return (
    <div className="project-timeline-card">
      <img src={imageUrl} className="image" alt="project" />
      <div className="project-duration">
        <h1 className="project-title">{projectTitle}</h1>
        <p className="duration">
          <AiFillCalendar />
          {duration}
        </p>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
