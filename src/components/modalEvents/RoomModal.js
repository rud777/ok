import React from "react";
import Size from "../../assets/Size";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import SvgX from "../../assets/svg/SvgX";
import Check from "../ChackBox/Check";
import Style from "./style";

function RoomModal({ showRoom, setShowRoom, setData, data }) {
  const key = "room";
  const arr = [
    { title: "Meeting rooms", id: 1 },
    { title: "Meeting room1", id: 2 },
  ];
  return (
    <Modal
      visible={showRoom}
      style={Style.modal}
    >
      <TouchableOpacity
        style={Style.SvgX}
        onPress={() => setShowRoom(!showRoom)}>
        <SvgX />
      </TouchableOpacity>
      <View style={Style.TitleView}>
        <Text style={Style.TitleText}>
          Choose event type
        </Text>
      </View>
      <View style={Style.CheckView}>
        <Check props={arr} data={data} setData={setData} ki={key} />
      </View>
      <TouchableOpacity style={Style.TouchSelect} onPress={() => setShowRoom(!showRoom)}>
        <Text style={Style.SelectText}
        >Select</Text>
      </TouchableOpacity>

    </Modal>
  );
}

export default RoomModal;
