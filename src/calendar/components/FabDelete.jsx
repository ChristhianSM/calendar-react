import React from 'react'
import { useCalendarStore } from '../../hooks'

export const FabDelete = () => {

  const { startDeleteEvent } = useCalendarStore();

  const handleDeleteEvent = () => {
    startDeleteEvent();
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
