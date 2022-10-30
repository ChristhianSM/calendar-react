import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentEventActive, onAddNewEvent, onDeleteEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector( state => state.calendar );

  const currentEvent = ( event ) => {
    dispatch( currentEventActive(event) )
  }

  const startSavingEvent = async ( calendarEvent ) => {

    if (calendarEvent._id) {
      dispatch( onUpdateEvent(calendarEvent) );
    }else{
      dispatch( onAddNewEvent(calendarEvent) );
    }
  }

  const startDeleteEvent = () => {
    dispatch( onDeleteEvent() );
  }

  return {
    // Propiedades
    events,
    activeEvent,

    // Metodos
    currentEvent,
    startSavingEvent,
    startDeleteEvent
  }
}
