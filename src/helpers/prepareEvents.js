import moment from "moment";

const prepareEvents = (events = []) => {
  return events.map((e) => ({
    ...e,
    end: moment(e.end).toDate(),
    start: moment(e.start).toDate(),
  }));
};

export default prepareEvents;
