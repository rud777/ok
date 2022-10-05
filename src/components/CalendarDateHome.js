import React, { useEffect, useLayoutEffect, useState } from "react";
import moment from "moment";
import { Calendar } from "react-native-calendars";
import { FlatList } from "react-native";

function CalendarDateHome(props) {
  const [selectDays, setSelectDays] = useState({});
  const [day, setDay] = useState();
  useEffect(() => {
    let day = {};
    props.taskList.map((item) => {
      const dayList = moment(item.create_date).format("YYYY-MM-DD");
      day[dayList] = {
        periods: [
          { startingDay: true, endingDay: true, color: "#39B9CE" },
          { startingDay: true, endingDay: true, color: "#ffa500" },
          { startingDay: true, endingDay: true, color: "#f0e68c" },
        ],
      };
    });
    props.eventList.map((item) => {
      const dayList = moment(item.create_date)
      day[dayList] = {
        periods: [
          { startingDay: true, endingDay: true, color: "#38A98E" },
          { startingDay: true, endingDay: true, color: "#FF8A9F" },
          { startingDay: true, endingDay: true, color: "#A7C3FF" },
        ],
      };
    });
    setSelectDays(day);
  }, []);
  return (
    <>
      <Calendar
        markingType={"multi-period"}
        markedDates={{
          ...selectDays,
          [day]:{selected:true,selectedColor:'#347474'},
        }}
        theme={{
          'stylesheet.calendar.header': {
            dayTextAtIndex0: {
              color: 'red',
            },
          },
          todayTextColor:'red',
          calendarBackground: '#F5F5F5',
        }}
        onDayPress={day => {
          setDay(day.dateString);
        }}
      />
    </>
  );
}

export default CalendarDateHome;
