import React, { useState } from "react";
import "../../styles/pages/Calendar.css";
import CalendarComponent from "./CalendarComponent";
import calendarImage from "../../images/calendarImage.png";
import "@fullcalendar/react";
import { DateClickArg } from "@fullcalendar/interaction";
import { EventClickArg, EventInput } from "@fullcalendar/core";
import { defaultEvents } from "../../data/data";
import AddEditEvent from "./AddEditEvent";
import Layout from "../../components/Layout";
import { Button } from "@mantine/core";
import { RiAddCircleLine } from "react-icons/ri";
import { TbRefresh } from "react-icons/tb";

interface IntroCardProps {
  createNewEvent: () => void;
}

const IntroCard = ({ createNewEvent }: IntroCardProps) => {
  return (
    <div className="calendarCard introCard">
      <img src={calendarImage} />
      <div>
        <h5>Welcome to Your Calendar</h5>
        <p>
          The calendar shows the events synced from all your linked calendars.
          Click on event to see or edit the details. You can create new event by
          clicking on "Create New event" button or any cell available in
          calendar below.
        </p>
        <div className="mt-4">
          <Button
            className="btnCreateNew"
            leftIcon={<RiAddCircleLine />}
            onClick={createNewEvent}
          >
            Create New Event
          </Button>
          <Button className="btnLink" leftIcon={<TbRefresh />}>
            Link Calendars
          </Button>
        </div>
      </div>
    </div>
  );
};

const Calendar = () => {
  //  Handle Modal
  const [show, setShow] = useState<boolean>(false);
  const onCloseModal = () => {
    setShow(false);
    setEventData({});
    setDateInfo({});
  };
  const onOpenModal = () => setShow(true);
  const [isEditable, setIsEditable] = useState<boolean>(false);

  //   Event data
  const [events, setEvents] = useState<EventInput[]>([...defaultEvents]);
  const [eventData, setEventData] = useState<EventInput>({});
  const [dateInfo, setDateInfo] = useState<any>({});

  // on date click
  const onDateClick = (arg: DateClickArg) => {
    setDateInfo(arg);
    onOpenModal();
    setIsEditable(false);
  };

  // on event click
  const onEventClick = (arg: EventClickArg) => {
    const event = {
      id: String(arg.event.id),
      title: arg.event.title,
      className: arg.event.classNames[0],
    };
    setEventData(event);
    onOpenModal();
    setIsEditable(true);
  };

  //  On Add event
  const onAddEvent = (data: any) => {
    const modifiedEvents = [...events];
    const event = {
      id: String(modifiedEvents.length + 1),
      title: data.title,
      start: Object.keys(dateInfo).length !== 0 ? dateInfo.date : new Date(),
      className: data.className,
    };
    modifiedEvents.push(event);
    setEvents(modifiedEvents);
    onCloseModal();
  };

  //   On Update event
  const onUpdateEvent = (data: any) => {
    const modifiedEvents = [...events];
    const idx = modifiedEvents.findIndex((e: any) => e["id"] === eventData!.id);
    modifiedEvents[idx]["title"] = data.title;
    modifiedEvents[idx]["className"] = data.className;
    setEvents(modifiedEvents);
    onCloseModal();
    setIsEditable(false);
  };

  //   On remove event
  const onRemoveEvent = () => {
    var modifiedEvents = [...events];
    const idx = modifiedEvents.findIndex((e: any) => e["id"] === eventData!.id);
    modifiedEvents.splice(idx, 1);
    setEvents(modifiedEvents);
    onCloseModal();
  };

  // create new event
  const createNewEvent = () => {
    setIsEditable(false);
    onOpenModal();
  };
  return (
    <Layout>
      <div className="main-container">
        <IntroCard createNewEvent={createNewEvent} />
        <CalendarComponent
          onDateClick={onDateClick}
          onEventClick={onEventClick}
          events={events}
        />
        {/* add new event modal */}
        {show ? (
          <AddEditEvent
            isOpen={show}
            onClose={onCloseModal}
            isEditable={isEditable}
            eventData={eventData}
            onUpdateEvent={onUpdateEvent}
            onRemoveEvent={onRemoveEvent}
            onAddEvent={onAddEvent}
          />
        ) : null}
      </div>
    </Layout>
  );
};

export default Calendar;
