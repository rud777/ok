import React, { useState } from "react";
import moment from "moment";
import { Calendar } from "react-native-calendars";
import _ from 'lodash'

function CalendarDate2({ data, setData, setDayCalendar, dayCalendar, currentDate,setSearchDay,datas }) {
  const [day, setDay] = useState();
  return (
    <>
      <Calendar
        hideDayNames={true}
        markingType={"period"}
        markedDates={{
          [currentDate]: { selected: false, textColor: "red" },
          [day]:{disabled: true, startingDay: true, color: '#347474',endingDay: true},
        }}
        onDayPress={day => {
            let changeDate=moment(day.dateString).format("YYYY-MM-DD")
          setData&&setData({...data,['create_date']:changeDate,['id']:datas?datas.id:_.uniqueId()});
          setSearchDay&&setSearchDay(day.dateString)
          setDay(day.dateString);
          setDayCalendar && (setDayCalendar(day.dateString));
        }}
      />
    </>
  );
}

export default CalendarDate2;
