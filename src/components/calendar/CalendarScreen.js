import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { uiOpenModal } from "../../actions/ui";
import { eventClearActiveEvent, eventSetActive } from "../../actions/events";
import Navbar from "../ui/Navbar";
import CalendarEvent from "./CalendarEvent";
import messages from "../../helpers/calendar-message-es";
import AddNewFab from "../ui/AddNewFab";
import DeleteEventFab from "../ui/DeleteEventFab";

import CalendarModal from "./CalendarModal";

import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

// const events = [
//   {
//     title: "Cumpleaños de mis amigos",
//     start: moment().toDate(),
//     end: moment().add(2, "hours").toDate(),
//     bgColor: "#fafafa",
//     user: {
//       _id: "123",
//       name: "Martin",
//     },
//   },
// ];

const CalendarScreen = () => {
  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const onDoubleClick = (e) => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  const onSelectSlot = () => {
    dispatch(eventClearActiveEvent());
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "#fff",
    };

    return { style };
  };

  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onSelectSlot={onSelectSlot}
        selectable={true}
        onView={onViewChange}
        view={lastView}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
      />

      <AddNewFab />
      {activeEvent && <DeleteEventFab />}

      <CalendarModal />
    </div>
  );
};

export default CalendarScreen;
