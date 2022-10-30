import React from 'react'
import { useCalendarStore } from '../../hooks'

export const FabDelete = () => {

  const { deleteEvent } = useCalendarStore();

  const handleDeleteEvent = () => {
    deleteEvent();
  }
  return (
    <button
      className='btn btn-danger fab-danger'
      onClick={ handleDeleteEvent }
    >
      <i className='fas fa-trash-alt'></i>
    </button>
  )
}
