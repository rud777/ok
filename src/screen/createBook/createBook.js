import React, { useEffect, useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Style from "./style";
import Size from "../../assets/Size";
import SvgDown from "../../assets/svg/SvgDown";
import CalendarDate2 from "../../components/CalendarDate2";
import Input from "../../components/Input";
import BookLeaveModal from "../../components/modalBook/BookLeaveModal";
import VacationModal from "../../components/modalBook/VacationModal";
import GreateModal from "../../components/modalBook/GreateModal";
import moment from "moment";

function CreateBook(props) {
  const [date, setDate] = useState();
  const currentDate = moment().format("YYYY-MM-DD");
  const [showLeave,setShowLeave]=useState(false)
  const [data,setData]=useState({})
  const [dayCalendar, setDayCalendar] = useState();
  const [duration, setDuration] = useState();
  const [hourly, setHourly] = useState();
  const [vacation,setVacation]=useState()
  const [show,setShow]=useState(false)
  const [select,setSelect]=useState(false)
  const [greate,setGreate]=useState(false)
  const [a,setA]=useState(false)
  useEffect(()=>{
    if(!showLeave){
      props.navigation.setOptions({
        tabBarStyle: { display: "flex" },
      })
    }
    if (select||show||greate){
      props.navigation.setOptions({
        tabBarStyle: { display: "none" },
      })
    }
  },[showLeave,select,show,greate])
  return (
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={Style.container}>
        <ScrollView style={Style.body}>
          <View style={{marginBottom:Size.size40}}>
            <View style={Style.titleView}>
              <Text style={Style.title}>
                Book your leave time
              </Text>
            </View>
            <View style={Style.chooseView}>
              <Text style={Style.chooseText}>Choose book leave type*</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <TouchableOpacity style={Style.toachType} onPress={()=>{
                setShowLeave(!showLeave)
                setHourly(false)
                props.navigation.setOptions({
                  tabBarStyle: { display: "none" },
                })
              }}>
                <Text style={Style.text}>{data['Type']||'Type'}</Text>
                <View style={Style.SvgView}>
                  <SvgDown />
                </View>
              </TouchableOpacity>
              <View style={Style.bottomLine} >
              </View>
            </View>
            <View style={{marginTop:Size.size23}}>
              <CalendarDate2  setDayCalendar={setDayCalendar} data={data}  setDate={setData} currentDate={currentDate}/>
            </View>
            <Input multiline style={Style.area} numberOfLines = {4} placeholder='Description' {...props}/>
          </View>
          <TouchableOpacity style={Style.createButten} onPress={()=>{
            setSelect(!select)
            setShowLeave(!showLeave)
          }} >
            <Text style={Style.createText}>Create</Text>
          </TouchableOpacity>
        </ScrollView>
        {showLeave?<BookLeaveModal {...props}   setGreate={setGreate} greate={greate} a={a} setA={setA} show={show} setShow={setShow}  vacation={vacation} setVacation={setVacation} dayCalendar={dayCalendar} hourly={hourly} setHourly={setHourly} select={select} setSelect={setSelect} duration={duration} setDuration={setDuration} showLeave={showLeave} setShowLeave={setShowLeave} data={data} setData={setData} currentDate={currentDate}/>:null}
        {vacation&&a?<VacationModal {...props} data={data} setData={setData} a={a} setA={setA} show={show} setShow={setShow}  showLeave={showLeave} setShowLeave={setShowLeave} greate={greate} setGreate={setGreate}/>:null}
        {greate&&!showLeave?<GreateModal {...props} greate={greate} setGreate={setGreate} select={select} setSelect={setSelect} show={show} setShow={setShow} a={a} setA={setA} vacation={vacation} setVacation={setVacation} />:null}
      </KeyboardAvoidingView>
  );
}

export default CreateBook;



