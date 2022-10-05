import React, { useEffect, useState } from "react";
import Style from "./style";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Size from "../../assets/Size";
import VictoryEvents from "./VictoryEvents";
import SvgCalendar from "../../assets/svg/SvgCalendar";
import BtSh from "../../components/BottomSheetHestoryEvents/BtSh";


function HistoryEvents(props) {
  const eventList = [
    {
      title: "Teambuilding",
      id: 1,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      create_date: "Jul 30,2022 ",
      time: "12:00 - 15:00",
      room: "Meeting room 306",
      color: "#EF988F",
    },
    {
      title: "Trainings",
      id: 2,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      create_date: "Jul 19,2022 ",
      time: "12:00 - 15:00",
      room: "Meeting room 306",
      color: "#92BEFA",
    },
    {
      title: "Meeting with team",
      id: 3,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      create_date: "Aug 24,2022 ",
      time: "12:00 - 15:00",
      room: "Meeting room 306",
      color: "#83B7AD",
    },
    {
      title: "Meeting with team",
      id: 4,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      create_date: "Jul 28,2022  ",
      time: "12:00 - 15:00",
      room: "Meeting room 306",
      color: "#F4C584",
    },
    {
      title: "Meeting with team",
      id: 5,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      create_date: "Aug 09,2022 ",
      time: "12:00 - 15:00",
      room: "Meeting room 306",
      color: "#92BEFA",
    },
    {
      title: "Meeting with team",
      id: 6,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      create_date: "Jul 05,2022 ",
      time: "12:00 - 15:00",
      room: "Meeting room 306",
      color: "#EF988F",
    },
  ];
  const [sheet, setSheet] = useState(false);
  const [searchDay, setSearchDay] = useState();
  useEffect(()=>{
    if (!sheet) {
      props.navigation.setOptions({
        tabBarStyle: { display: "flex" },
      });
    }
  },[sheet])

  return (
    <>
      <View style={Style.body}>
        <View style={Style.titleView}>
          <Text style={Style.titleText}>History events</Text>
        </View>
        <VictoryEvents />
        <View style={{ alignItems: "center" ,marginTop:Size.size20}}>
          <TouchableOpacity style={Style.input} onPress={() => {
            setSheet(!sheet);
            props.navigation.setOptions({
              tabBarStyle: { display: "none" },
            });
          }}>
            <Text style={searchDay ? Style.textSearchActive : Style.textSearch}>{searchDay || "Search history"}</Text>
            <View style={{ marginRight: Size.size13 }}>
              <SvgCalendar />
            </View>
          </TouchableOpacity>
        </View>
        <FlatList data={eventList} renderItem={({ item }) => (
          <TouchableOpacity style={{alignItems:'center'}} onPress={()=>{
            props.navigation.navigate("eventName",{item})
          }}>
          <View style={Style.eventView}>
            <View style={{
              width: Size.size6,
              height: Size.size111,
              backgroundColor:item.color,
              borderTopLeftRadius:Size.size6,
              borderBottomLeftRadius:Size.size6
            }}>
            </View>
            <View>
              <View style={{ marginLeft: Size.size6 }}>
                <Text style={Style.titleEvenet}>{item.title}</Text>
              </View>
              <View style={{ marginLeft: Size.size6, marginTop: Size.size12 }}>
                <Text style={Style.descEvent}>{item.description}</Text>
              </View>
              <View style={{
                marginLeft: Size.size6,
                marginTop: Size.size12,
                justifyContent: "space-between",
                flexDirection: "row",
                width: Size.size305,
              }}>
                <Text style={Style.createDateEvent}>{item.create_date}|{item.time}</Text>
                <Text style={Style.createDateEvent}>{item.room}</Text>
              </View>
            </View>
          </View>
            </TouchableOpacity>
        )} keyExtractor={item => item.id} />
      </View>
      {sheet && <BtSh sheet={sheet} setSheet={setSheet} setSearchDay={setSearchDay} />}
    </>
  );
}

export default HistoryEvents;
