import moment from "moment";

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
    case "value":
      break;

    default:
      return state;
  }
};

export default calendarReducer;
