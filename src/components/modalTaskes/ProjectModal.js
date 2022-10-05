import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import SvgX from "../../assets/svg/SvgX";
import Check from "../ChackBox/Check";
import Style from './style'

function ProjectModal({ show, setData, setShow, data,datas }) {
  const key='project'
  const aray = [
    { title: "Project name 01",id:1 },
    { title: "Project name 02",id:2 },
    { title: "Project name 03",id:3 },
    { title: "Project name 04",id:4 },
  ];

  return (
    <Modal
      visible={show}
      style={Style.modal}
    >
      <TouchableOpacity
        style={Style.SvgX}
        onPress={() => setShow(!show)}>
        <SvgX />
      </TouchableOpacity>
      <View style={Style.TitleView}>
        <Text style={Style.TitleText}>
          Select Project
        </Text>
      </View>
      <View>
        <Check props={aray} data={data} setData={setData} ki={key} datas={datas}/>
      </View>
      <TouchableOpacity style={Style.TouchSelect}
                        onPress={()=>setShow(!show)}
      >
        <Text style={Style.SelectText}
        >Select</Text>
      </TouchableOpacity>
    </Modal>
  );
}

export default ProjectModal;
