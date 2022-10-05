import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import Size from "../../assets/Size";
import SvgX from "../../assets/svg/SvgX";
import Check2 from "../ChackBox/Chack2";
import Style from './style'
function ParticipatorsModal({ setShowParticipators,showParticipators,data,setData }) {
  const key='Participators'
  const arr=[
    {title:'Frontend team',id:1},
    {title:'Backend team',id:2},
    {title:'Mobile team',id:3},
    {title:'Design team',id:4},
    {title:'Managers',id:5},
    {title:'Team Leads',id:6},
  ]
  return (
    <Modal
      visible={showParticipators}
      style={Style.modal}
    >
      <TouchableOpacity
        style={Style.SvgX}
        onPress={() => setShowParticipators(!showParticipators)}>
        <SvgX />
      </TouchableOpacity>
      <View style={Style.TitleView}>
        <Text style={Style.TitleText}>
          Participators
        </Text>
      </View>
      <View style={Style.CheckView}>
        <Check2 props={arr}  data={data} setData={setData} ki={key}/>
      </View>
      <TouchableOpacity style={Style.TouchSelect}
                        onPress={()=>setShowParticipators(!showParticipators)}
      >
        <Text style={Style.SelectText}>Select</Text>
      </TouchableOpacity>

    </Modal>
  );
}

export default ParticipatorsModal;
