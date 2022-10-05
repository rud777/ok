import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Style from './style'
import { useNavigation } from "@react-navigation/native";
import _ from 'lodash'
import {GoogleSignin} from "@react-native-google-signin/google-signin";

function AcauntMe(props) {
  const[ren,setRen]=useState()
  const navigate = useNavigation();
  async function signOut() {
    try {
      await GoogleSignin.signOut();
      console.log('Signed out from Google!');
      navigate.navigate('login');
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View style={Style.body}>
      <View style={Style.titleView}>
      <Text style={Style.titleText}>Profile</Text>
      </View>
      <View style={Style.TouchView}>
        <TouchableOpacity style={Style.Touches} onPress={()=>{
          setRen(_.uniqueId())
          navigate.navigate("historyTasks",{ren})
        }}>
          <Text>History tasks</Text>
        </TouchableOpacity>
        <View style={Style.line}></View>
        <TouchableOpacity style={Style.Touches} onPress={()=>navigate.navigate("historyEvents",{...props})}>
          <Text>History events</Text>
        </TouchableOpacity >
        <View style={Style.line}></View>
        <TouchableOpacity style={Style.Touches} onPress={()=>navigate.navigate("project",{...props})}>
          <Text>Projects</Text>
        </TouchableOpacity>
        <View style={Style.line}></View>
        <TouchableOpacity style={Style.Touches} onPress={()=>{
          navigate.navigate("login")
          signOut()
        }}>
          <Text>Log out</Text>
        </TouchableOpacity>
        <View style={Style.line}></View>
      </View>
    </View>
  );
}

export default AcauntMe;
