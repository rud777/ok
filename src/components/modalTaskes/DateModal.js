import React from "react";
import Size from "../../assets/Size";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import SvgX from "../../assets/svg/SvgX";
import CalendarDate from "../CalendarDate";
import CalendarDate2 from "../CalendarDate2";
import Style from './style'
function DateModal({ showDate, setShowDate,data,setData,datas }) {
  return (
    <Modal
      visible={showDate}
      style={Style.modal}
    >
      <TouchableOpacity
        style={Style.SvgX}
        onPress={() => setShowDate(!showDate)}>
        <SvgX />
      </TouchableOpacity>
      <View style={Style.TitleView}>
        <Text style={Style.TitleText}>
          Select Day
        </Text>
        <CalendarDate2 data={data} setData={setData} datas={datas}/>
        <TouchableOpacity style={Style.TouchSelect}
                          onPress={()=>setShowDate(!showDate)}
        >
          <Text style={Style.SelectText}
          >Select</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default DateModal;
