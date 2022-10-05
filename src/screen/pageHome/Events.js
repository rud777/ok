import React, {useEffect, useState} from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Style from "./style";
import Size from "../../assets/Size";
import CalendarDate from "../../components/CalendarDate";
import CalendarDateHome from "../../components/CalendarDateHome";
import moment from "moment";

function Events(props) {
    const [arr,setArr]=useState()
    useEffect(()=>{
        const sortedAll = props.eventList.sort(
            (a, b) =>  new Date(b.create_date).getTime() - new Date(a.create_date).getTime(),
        );
        setArr(sortedAll)
    },[props.eventList])

  const renderItem = ({ item }) => (

    <View style={Style.eventView}>
      <View style={Style.colorView}>
      </View>
      <View>
        <View style={{marginLeft:Size.size6}}>
        <Text style={Style.titleEvenet}>{item.title}</Text>
        </View>
        <View style={{marginLeft:Size.size6,marginTop:Size.size12}}>
        <Text style={Style.descEvent}>{item.description||item.create_duration}</Text>
        </View>
        <View style={{marginLeft:Size.size6,marginTop:Size.size12,justifyContent:'space-between', flexDirection:'row',width:Size.size305}}>
          <Text style={Style.createDateEvent}>{moment( item.create_date).format('MMM DD,YYYY')}|{item.time||item.create_duration}</Text>
          <Text style={Style.createDateEvent}>{item.room}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <>
      <FlatList data={arr} renderItem={renderItem} keyExtractor={item => item.id}  ListHeaderComponent={props.svg?null:<View style={{width:Size.size316,marginTop:Size.size31}}>
        <CalendarDateHome {...props} />
      </View>}/>
    </>
  );
}

export default Events;
