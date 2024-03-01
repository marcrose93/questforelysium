import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import "../styles/calendar-style.css";
import calendarBG from "../images/calendarBG.png";

function Calendar() {
  const [calendarSize, setCalendarSize] = useState({ width: 'auto', height: 'auto' });

  useEffect(() => {
    const handleResize = () => {
      // Update the calendar size state when the window is resized
      setCalendarSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Attach resize event listener when component mounts
    window.addEventListener('resize', handleResize);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{
      margin: '2vmin',
      textAlign: 'center'
    }}>
      <h1 style={{
        margin: '2vmin',
        fontFamily: 'UnifrakturMaguntia, sans serif',
        alignItems: 'center',
        textShadow: '2px 2px 4px white',
        fontSize: '4vmax'
      }}>The Quest Begins with You.</h1>
      <div style={{
        width: '87%',
        margin: 'auto',
        paddingBottom: '20px',
        backgroundImage: `url(${calendarBG})`,
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}>
        <FullCalendar
          selectable={true}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          height={calendarSize.height}
          aspectRatio={1.5}
          fixedWeekCount={false}
          contentHeight="auto"
          eventBorderColor="red"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth',
          }}
          events={[
            { title: 'Event 1', date: '2024-02-22' },
            { title: 'Event 2', date: '2024-02-23' },
          ]}
        />
      </div>
    </div>
  )
}

export default Calendar;
