import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import Size from "../../assets/Size";
import Victory from "./VictoryBar";
import VictoryProgress from "./VictoryProgress";
import VictoryLeave from "./VictoryLeave";
import Style from './style'


function Statistic(props) {
  const [scrole,setScrole]=useState()
  return (
    <ScrollView onScroll={(e)=>{
      setScrole(e.nativeEvent.contentOffset.y)}}>
      <View style={Style.My}>
        <Text style={Style.TextMy}>My Activities</Text>
      </View>
      <View style={Style.Week}>
        <Text style={Style.TextWeek}>Week tasks</Text>
      </View>
      <Victory scrole={scrole} />
      <View style={Style.Week}>
        <Text style={Style.TextWeek}>Progress tasks</Text>
      </View>
      <View style={Style.ThisView}>
        <Text style={Style.TextThis}>This is the schedule of your tasks 📊</Text>
      </View>
      <VictoryProgress scrole={scrole}/>
      <View style={Style.Week}>
        <Text style={Style.TextWeek}>Annual Leave</Text>
      </View>
      <VictoryLeave  scrole={scrole}/>
    </ScrollView>
  );
}

export default Statistic;
