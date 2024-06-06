import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails

  const activeImageStyles = isActive ? 'active-img' : 'event-img'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event">
      <button type="button" className="event-btn" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={activeImageStyles} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
