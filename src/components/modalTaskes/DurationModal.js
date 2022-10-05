import React from "react";
import Size from "../../assets/Size";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import SvgX from "../../assets/svg/SvgX";
import Style from './style'

function DurationModal({ showDuration,setData,data,setShowDuration ,datas}) {

  return (
    <Modal
      visible={showDuration}
      style={Style.modal}
    >
      <TouchableOpacity
        style={Style.SvgX}
        onPress={() => setShowDuration(!showDuration)}>
        <SvgX />
      </TouchableOpacity>
      <View style={Style.TitleView}>
        <Text style={Style.TitleText}>
          Actual duration
        </Text>
        <Text style={Style.TextSelectActual}>Select actual duration you spent on this task</Text>
        <View style={{flexDirection:'row'}}>
        <View style={{marginTop:Size.size24}}>
          <TouchableOpacity style={Style.TouchDuration}
                            onPress={()=> setData({...data,['create_duration']:'15 minute'})}
          >
            <Text style={Style.TextTime}
            >15 minute</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.ViewTime}>
          <TouchableOpacity style={Style.TouchDuration}
                            onPress={()=>setData({...data,['create_duration']:'30 minute'})}>
            <Text style={Style.TextTime}>30 minute</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:Size.size24}}>
          <TouchableOpacity style={Style.TouchDuration}
                            onPress={()=>setData({...data,['create_duration']:'2 hours'})}>
            <Text style={Style.TextTime}>2 hours</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{marginTop:Size.size24}}>
            <TouchableOpacity style={Style.TouchDuration}
                              onPress={()=>setData({...data,['create_duration']:'1 hours'})}>
              <Text style={Style.TextTime}>1 hours</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:Size.size24,marginRight:Size.size15,marginLeft:Size.size15}}>
            <TouchableOpacity style={Style.TouchDuration}
                              onPress={()=>setData({...data,['create_duration']:'3 hours'})}>
              <Text style={Style.TextTime}>3 hours</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:Size.size24}}>
            <TouchableOpacity style={Style.TouchDuration}
                              onPress={()=>setData({...data,['create_duration']:'Half day'})}>
              <Text style={Style.TextTime}>Half day</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={Style.TouchDurationFull}
                          onPress={()=>setData({...data,['create_duration']:'Full day'})}>
          <Text style={Style.TextTime}>Full day</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.SelectTouch}
                          onPress={()=>setShowDuration(!showDuration)}
        >
          <Text style={Style.SelectText}
          >Select</Text>
        </TouchableOpacity>
      </View>
    </Modal>
      );
      }
      export default DurationModal;
