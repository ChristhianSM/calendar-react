import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  _id: new Date().getTime(),
  title: "Cumpleañps del jefe",
  notes: "Hay que comprar el pastel",
  start: new Date(),
  end: addHours( new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "Christhian"
  }
}
export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
      events: [
        tempEvent
      ],
      activeEvent: null,
    },
    reducers: {
      currentEventActive: ( state, action ) => {
        state.activeEvent = action.payload;
      },
      onAddNewEvent: ( state, action ) => {
        const newEvent = {
          ...action.payload,
          _id: new Date().getTime()
        }
        state.events.push( newEvent );
      },
      onUpdateEvent : ( state, action ) => {
        state.events = state.events.map( event => {
          if (event._id === action.payload._id) {
            return action.payload;
          }
          return event
        })
      },
      onDeleteEvent: ( state, action ) => {
        state.events = state.events.filter( event => event._id !== state.activeEvent._id );
        state.activeEvent = null;
      }
    }
});
export const { 
    currentEventActive, 
    onAddNewEvent, 
    onUpdateEvent, 
    onDeleteEvent
} = calendarSlice.actions;