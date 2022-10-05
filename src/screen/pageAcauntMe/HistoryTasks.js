import React, { useEffect, useState } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import Style from "./style";
import VictoryTaskes from "./VictoryTaskes";
import TaskChack from "../../components/TaskChack";
import Size from "../../assets/Size";

function HistoryTasks(props) {
const ren=props.route.params.ren;

  const taskList = [
    {
      id: 7,
      title: "Create Task",
      project: "Bob AI",
      create_date: "Aug 27,2022 ",
      create_duration:'15 minute'
    },
    {
      id: 8,
      title: "Research Dashboard",
      project: "New City",
      create_date: "Aug 19,2022",
      create_duration:'15 minute'
    },
    {
      id: 9,
      title: "Feedbacks",
      project: "Bob AI",
      create_date: "Aug 03,2022",
      create_duration:'15 minute'
    },
    {
      id: 10,
      title: "Sign up",
      project: "Mapllo",
      create_date: "Jul 30,2022 ",
      create_duration:'15 minute'
    },
    {
      id: 11,
      title: "Contact",
      project: "Broker ...",
      create_date: "Jul 20,2022 ",
      create_duration:'15 minute'
    },
  ];
  return (
    <View style={Style.body}>
      <View style={Style.titleView}>
        <Text style={Style.titleText}>History tasks</Text>
      </View>
      <VictoryTaskes ren={ren}/>
      <FlatList
        style={{marginLeft:Size.size13}}
        data={taskList}
        renderItem={({item})=>(
          <TouchableOpacity style={Style.taskesView} onPress={() => {
            props.navigation.navigate("updateTaskes",{item})
          }
          }>
            <TaskChack />
            <View style={Style.ViewTitle}>
              <Text style={Style.createTask}>{item.title}</Text>
              <Text style={Style.createTaskDate}>{item.create_date}|{item.create_duration}</Text>
            </View>
            <View style={Style.viewProject}>
              <Text style={Style.textProject}>{item.project}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default HistoryTasks;
