import React, {useEffect, useState} from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Style from "./style";
import Img from "../../images/Frame.png";
import Size from "../../assets/Size";
import SvgCalendar from "../../assets/svg/SvgCalendar";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { listEventRequest } from "../../store/actions";
import Events from "./Events";
import Taskes from "./Taskes";
import All from "./All";


function Home(props) {
  const taskList= useSelector(state => state.taskList);
  const taskUpdateList= useSelector(state => state.taskUpdateList);
  const eventList= useSelector(state => state.eventList);
  const dispach=useDispatch()
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(true);
  const [svg, setSvg] = useState(true);
  const { employee_information } = useSelector(state => state.formData);
  const name= useSelector(state => state.name);
  const  auth_key=useSelector(state=>state.auth_key)
  const handlerButten = () => {
    setActive(false);
    setActive1(true);
    setActive2(true);
  };
  const handlerButten1 = () => {
    dispach(listEventRequest(auth_key))
    setActive(true);
    setActive1(false);
    setActive2(true);
  };
  const handlerButten2 = () => {
    setActive(true);
    setActive1(true);
    setActive2(false);
  };
  const currentDate = moment().format("DD MMMM YYYY");
  return (
    <View style={Style.body}>
      <Text style={Style.title}>Hello, {employee_information?.first_name||name?.name}</Text>
      <View style={Style.Image}>
        <Image source={Img} style={Style.bgImg} />
      </View>
      <View style={Style.ViewTouches}>
        <TouchableOpacity style={active ? Style.buttens : Style.activeButten} onPress={handlerButten}>
          <Text style={active ? Style.textButtens : Style.activeTextButtens}>Taskes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={active1 ? Style.buttens : Style.activeButten} onPress={handlerButten1}>
          <Text style={active1 ? Style.textButtens : Style.activeTextButtens}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={active2 ? Style.buttens : Style.activeButten} onPress={handlerButten2}>
          <Text style={active2 ? Style.textButtens : Style.activeTextButtens}>All</Text>
        </TouchableOpacity>
      </View>
      <View style={Style.ViewTouchCalendar}>
        <Text style={Style.textDay}>
          {currentDate}
        </Text>
        <TouchableOpacity onPress={() => setSvg(!svg)} style={svg ? Style.svgView : Style.activeSvgView}>
          <SvgCalendar iconColor={svg ? "#347474" : "#FCFCFC"} />
        </TouchableOpacity>
      </View>
      {active? null:<Taskes  taskUpdateList={taskUpdateList} svg={svg} {...props} taskList={taskList} eventList={eventList}/>}
      {active1?null: <Events svg={svg} eventList={eventList} taskList={taskList}/>}
      {active2?null: <All svg={svg} taskList={taskList} eventList={eventList} {...props}/>}
    </View>
  );
}

export default Home;

