import { addHours } from 'date-fns';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { localizer, getMessages } from '../../helpers';

import { Navbar, CalendarEventBox, CalendarModal } from '../';
import { useState } from 'react';

const events = [{
  title: "Cumpleañps del jefe",
  notes: "Hay que comprar el pastel",
  start: new Date(),
  end: addHours( new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "Christhian"
  }
}]

export const CalendarPage = () => {

  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || "week");
  const onDoubleClick = (event) => {
    console.log(event)
  }
  const onSelect = (event) => {
    console.log(event)
  }
  const onViewChange = (event) => {
    localStorage.setItem("lastView", event);
  }

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const style = {
      backgroungColor: "#347cf7",
      borderRadius: "0px",
      opacity: "0.8",
      color: "white"
    }
    return {
      style
    }
  }
  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={localizer}
        events={ events }
        defaultView = { lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages = { getMessages() }
        eventPropGetter = { eventStyleGetter }
        components = {{
          event: CalendarEventBox
        }}
        onDoubleClickEvent = { onDoubleClick}
        onSelectEvent = { onSelect }
        onView = { onViewChange }
      />

      <CalendarModal />
    </>
  )
}
