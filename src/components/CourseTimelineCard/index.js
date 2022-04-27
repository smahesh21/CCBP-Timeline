import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-timeline-card">
      <div className="website-duration">
        <h1 className="course-title">{courseTitle}</h1>
        <p className="duration">
          <AiFillClockCircle />
          {duration}
        </p>
      </div>
      <p className="description">{description}</p>
      <div className="tags-list">
        {tagsList.map(eachTab => (
          <p className="list-items">{eachTab.name}</p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
