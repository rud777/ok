import React, {useEffect, useState} from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Size from "../../assets/Size";
import Style from "./style";
import TaskChack from "../../components/TaskChack";
import CalendarDateHome from "../../components/CalendarDateHome";
import moment from "moment";

function Taskes( props ) {
    const [arr,setArr]=useState()
    useEffect(()=>{
        const sortedAll = props.taskList.sort(
            (a, b) =>  new Date(b.create_date).getTime() - new Date(a.create_date).getTime(),
        );
        setArr(sortedAll)
    },[props.taskList])
  const renderItem = ({ item }) => (
    <TouchableOpacity style={Style.taskesView} onPress={() => {
      props.navigation.navigate("updateTaskes",{item})
    }
    }>
      <TaskChack />
      <View style={Style.ViewTitle}>
        <Text style={Style.createTask}>{item.title}</Text>
        <Text style={Style.createTaskDate}>{moment( item.create_date).format('MMM DD,YYYY')}|{item.create_duration}</Text>
      </View>
      <View style={Style.viewProject}>
        <Text style={Style.textProject}>{item.project}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <>
      <FlatList data={arr} renderItem={renderItem} keyExtractor={item => item.id}
                ListHeaderComponent={ props.svg?null: <View style={Style.ViewCalendarHome}>
                  <CalendarDateHome {...props}/>
                </View>} />
    </>
  );
}

export default Taskes;
