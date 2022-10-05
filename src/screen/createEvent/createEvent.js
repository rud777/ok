import React, { useEffect, useState } from "react";
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
} from "react-native";
import Style from "../createEvent/style";
import Size from "../../assets/Size";
import SvgDown from "../../assets/svg/SvgDown";
import SvgCalendar from "../../assets/svg/SvgCalendar";
import TypeModal from "../../components/modalEvents/TypeModal";
import OrgnizerModal from "../../components/modalEvents/OrgnizerModal";
import ParticipatorsModal from "../../components/modalEvents/ParticipatorsModal";
import RoomModal from "../../components/modalEvents/RoomModal";
import SvgLocation from "../../assets/svg/SvgLocation";
import DateModal from "../../components/modalTaskes/DateModal";
import DurationModal from "../../components/modalTaskes/DurationModal";
import Input from "../../components/Input";
import GreateModalEvents from "../../components/modalEvents/GreateModalEvents";
import {useDispatch} from "react-redux";
import {listEventsRequest} from "../../store/actions";

function CreateEvent(props) {
  const [showType, setShowType] = useState(false);
  const [showOrgnizer, setShowOrgnizer] = useState(false);
  const [showParticipators, setShowParticipators] = useState(false);
  const [showRoom, setShowRoom] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [data, setData] = useState({});
  const [showDuration, setShowDuration] = useState(false);
  const [gte,setGte]=useState(false)
  const dispatch = useDispatch();

  useEffect(()=>{
    if (gte){
      props.navigation.setOptions({
        tabBarStyle: { display: "none" },
      })
    }
    if (!gte){
      props.navigation.setOptions({
        tabBarStyle: { display: "flex" },
      })
    }
  },[gte])


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Style.container}>
      <ScrollView style={Style.body}>
        <View style={{marginBottom:Size.size120}}>
        <View style={Style.titleView}>
          <Text style={Style.title}>
            Create New Events
          </Text>
        </View>
        <View style={Style.chooseView}>
          <Text style={Style.chooseText}>Choose event type*</Text>
        </View>
        <View style={Style.ViewEvent}>
          <TouchableOpacity style={Style.touchSvg} onPress={() => setShowType(!showType)}>
            <Text style={Style.text}>{data['Type']||'Type'}</Text>
            <View style={Style.ViewSvg}>
              <SvgDown />
            </View>
          </TouchableOpacity>
          <View style={Style.botomLine}>
          </View>
          <Input style={Style.input} {...props}
                 onChangeText={(v) => setData({...data, ['title']: v})}
                     placeholder="Event Title*"
          />
          <TouchableOpacity style={Style.touchSvg2} onPress={() => setShowOrgnizer(!showOrgnizer)}>
            <Text style={Style.text}>{data['Orgnizer']||'Orgnizer'}</Text>

            <View style={Style.ViewSvg}>
              <SvgDown />
            </View>
          </TouchableOpacity>
          <View style={Style.botomLine}>
          </View>
          <TouchableOpacity style={Style.touchSvg2} onPress={() => setShowParticipators(!showParticipators)}>
            <Text style={Style.text}>{data["Participators"]||'Participators*'}</Text>
            <View style={Style.ViewSvg}>
              <SvgDown />
            </View>
          </TouchableOpacity>
          <View style={Style.botomLine}>
          </View>
          <TouchableOpacity style={Style.touchSvg2} onPress={() => setShowRoom(!showRoom)}>
            <Text style={Style.text}>{data["room"]||'Room'}</Text>
            <View style={Style.ViewSvg}>
              <SvgDown />
            </View>
          </TouchableOpacity>
          <View style={Style.botomLine}>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Input style={Style.inputDown} {...props}
                       placeholder="1 Alek Manukyan, Gyumri"
            />
            <View style={Style.SvgLocation}>
              <SvgLocation />
            </View>
          </View>
          <TouchableOpacity style={Style.touchSvg2} onPress={() => setShowDate(!showDate)}>
            <Text style={Style.text}>{data['create_date']||'Date'}</Text>
            <View style={Style.SvgCalendar}>
              <SvgCalendar />
            </View>
          </TouchableOpacity>
          <View style={Style.botomLine} onPress={() => setShowDuration(!showDuration)}>
          </View>
          <TouchableOpacity style={Style.touchSvg2} onPress={() => setShowDuration(!showDuration)}>
            <Text style={Style.text}>{data['create_duration']||'Duration'}</Text>
            <View style={Style.ViewSvg}>
              <SvgDown />
            </View>
          </TouchableOpacity >
          <View style={Style.botomLine} >
          </View>
          <Input multiline style={Style.area} numberOfLines = {4} placeholder='Description' onChangeText={(v) => setData({...data, ['description']: v})} {...props}/>
        </View>
        <TouchableOpacity style={Style.createButten} onPress={()=>{
          dispatch(listEventsRequest(data))
          setGte(!gte)
        }}>
          <Text style={Style.createText}>Create</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
      {showType ? <TypeModal setShowType={setShowType} showType={showType} data={data} setData={setData} /> : null}
      {showRoom ? <RoomModal setShowRoom={setShowRoom} showRoom={showRoom} data={data} setData={setData} /> : null}
      {setShowParticipators ? <ParticipatorsModal setShowParticipators={setShowParticipators} showParticipators={showParticipators} data={data} setData={setData} /> : null}
      {showOrgnizer ? <OrgnizerModal setShowOrgnizer={setShowOrgnizer} showOrgnizer={showOrgnizer} data={data}
                                           setData={setData} /> : null}
      {showDate?<DateModal showDate={showDate} setShowDate={setShowDate} data={data} setData={setData} />:null}
      {showDuration?<DurationModal setShowDuration={setShowDuration} showDuration={showDuration} data={data} setData={setData} />:null}
      {gte?<GreateModalEvents gte={gte} setGte={setGte} {...props}/>:null}
    </KeyboardAvoidingView>
  );
}

export default CreateEvent;
