import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import Size from "../assets/Size";
import moment from "moment";

function CalendarDate({data,setData, setSday, setEday }) {
  const currentDate = moment().format("YYYY-MM-DD");
  const [calendar, setCalendar] = useState(false);
  const [startDay, setStartDay] = useState();
  const [endDay, setEndDay] = useState();
  const [selectDays, setSelectDays] = useState({});
  const handlerCalendar = (day) => {
    if (day > new Date(endDay).getTime()) {
      setEndDay(new Date(day).toISOString().slice(0, 10));
    } else if (day < new Date(endDay).getTime() && day > new Date(startDay).getTime()) {
      const tempEnd = ((new Date(endDay).getTime() - day) / 86400000);
      const tempStart = ((day - new Date(startDay).getTime()) / 86400000);
      if (tempEnd > tempStart) {
        setStartDay(new Date(day).toISOString().slice(0, 10));
      } else {
        setEndDay(new Date(day).toISOString().slice(0, 10));
      }
    } else {
      setStartDay(new Date(day).toISOString().slice(0, 10));
      setEndDay(new Date(day).toISOString().slice(0, 10));
    }
  };

  useEffect(() => {
    const start = new Date(startDay).getTime();
    const end = new Date(endDay).getTime();
    const days = (end - start) / 86400000;
    let temp = {};
    for (let i = 1; i < days + 1; i++) {
      const newDate = new Date(start + (i * 86400000)).toISOString().slice(0, 10);
      temp[newDate] = {  color: "#D4E9E9", textColor: "black" };
    }
    if (setSday || setEday) {
      setEday(endDay);
      setSday(startDay);
      setData({...data,['startDay']:startDay,['endDay']:endDay,})
    }
    setSelectDays(temp);
  }, [startDay, endDay]);

  return (
    <>
      <FlatList
        startDay={startDay} setStartDay={setStartDay}
        endDay={endDay} setEndDay={setEndDay}
        selectDays={selectDays} setSelectDays={setSelectDays}
        calendar={calendar} keyExtractor={item => item.index} />
      <Calendar
        hideDayNames={true}
        markingType={'period'}
        markedDates={{
          [currentDate]:{disabled: true, startingDay: true, color: '#347474',endingDay: true},
          [startDay]: { startingDay: true, color: "#D4E9E9", textColor: "black" },
          ...selectDays,
          [endDay]: { endingDay: true, color: "#D4E9E9", textColor: "black" },
        }}
        onDayPress={day => {
          handlerCalendar(day.timestamp);
        }}

      />
    </>
  );

}

export default CalendarDate;
