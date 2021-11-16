import moment from "moment";
import { types } from "../types/types";

const initialState = {
  events: [
    {
      title: "Cumpleaños de mis amigos",
      start: moment().toDate(),
      end: moment().add(2, "hours").toDate(),
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "Martin",
      },
    },
  ],
  activeEvent: null,
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };

    case types.eventClearActiveEvent:
      return { ...state, activeEvent: null };

    default:
      return state;
  }
};

export default calendarReducer;
