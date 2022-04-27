import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineView = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <div className="timeline-view-container">
      <h1 className="journey-text">
        MY JOURNEY OF
        <br />
        <span className="span-text">CCBP 4.0</span>
      </h1>
      <div
        className="chrono-container"
        style={{width: '1210px', height: '950px'}}
      >
        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(eachItem => renderTimeLineView(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
