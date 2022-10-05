import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import Size from "../../assets/Size";
import SvgX from "../../assets/svg/SvgX";
import Check from "../ChackBox/Check";
import Style from './style'

function TypeModal({ showType,setShowType,data,setData }) {
  const key='Type';
  const arr=[
    {title:'Meeting',id:1},
    {title:'Teambuilding',id:2},
    {title:'Trainings',id:3},
    {title:'Events',id:4},
  ]
  return (
    <Modal
      visible={showType}
      style={Style.modal}
    >
      <TouchableOpacity
        style={Style.SvgX}
        onPress={() => setShowType(!showType)}>
        <SvgX />
      </TouchableOpacity>
      <View style={Style.TitleView}>
        <Text style={Style.TitleText}>
          Choose event type
        </Text>
      </View>
      <View>
        <Check props={arr} data={data} setData={setData} ki={key}/>
      </View>
      <TouchableOpacity style={Style.TouchSelect}
                        onPress={()=>setShowType(!showType)}
      >
        <Text style={Style.SelectText}
        >Select</Text>
      </TouchableOpacity>
    </Modal>
  );
}

export default TypeModal;
