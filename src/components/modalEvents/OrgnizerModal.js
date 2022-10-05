import React from "react";
import Size from "../../assets/Size";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import SvgX from "../../assets/svg/SvgX";
import Check from "../ChackBox/Check";
import Style from "./style";

function OrgnizerModal({ data, setData, setShowOrgnizer, showOrgnizer }) {
  const key = "Orgnizer";
  const arr = [
    { title: "Name Surname", id: 1 },
    { title: "Name Surname", id: 2 },
    { title: "Name Surname", id: 3 },
    { title: "Name Surname", id: 4 },
    { title: "Name Surname", id: 5 },
    { title: "Name Surname", id: 6 },
    { title: "Name Surname", id: 7 },
    { title: "Name Surname", id: 8 },
    { title: "Name Surname", id: 9 },
    { title: "Name Surname", id: 10 },
    { title: "Name Surname", id: 11 },
    { title: "Name Surname", id: 12 },
    { title: "Name Surname", id: 13 },
    { title: "Name Surname", id: 14 },
    { title: "Name Surname", id: 15 },
    { title: "Name Surname", id: 16 },
  ];
  return (
    <Modal
      visible={showOrgnizer}
      style={Style.modal}
    >
      <TouchableOpacity
        style={Style.SvgX}
        onPress={() => setShowOrgnizer(!showOrgnizer)}>
        <SvgX />
      </TouchableOpacity>
      <View style={Style.TitleView}>
        <Text style={Style.TitleText}>
          Participators
        </Text>
      </View>
      <View style={Style.CheckView}>
        <Check props={arr} data={data} setData={setData} ki={key} />
      </View>
      <TouchableOpacity style={Style.TouchSelect} onPress={() => setShowOrgnizer(!showOrgnizer)}>
        <Text style={Style.SelectText}
        >Select</Text>
      </TouchableOpacity>
    </Modal>
  );
}

export default OrgnizerModal;
