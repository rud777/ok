import React, { useCallback, useMemo, useRef, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Dimensions, Text, TextInput, TouchableOpacity, View } from "react-native";
import Size from "../../assets/Size";
import Check from "../ChackBox/Check";
import SvgCalendar from "../../assets/svg/SvgCalendar";
import SvgBottom from "../../assets/svg/SvgBottom";
import Input from "../Input";
import DatePicker from "react-native-date-picker";
import moment from "moment";
import * as Animatable from "react-native-animatable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Style from "./style";
import {useDispatch} from "react-redux";
import {bookHourlyRequest} from "../../store/actions";

function BookLeaveModal(props) {
  const sheetRef = useRef(null);
  const [date, setDate] = useState(new Date());
  const [openTime, setOpenTime] = useState(false);
  const dispatch=useDispatch()
  const key = "Type";
  const snapPoints = useMemo(() => [ "85%", "100%"], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const arr = [
    { title: "Hourly leave", id: 1 },
    { title: "Day off", id: 2 },
    { title: "Work remotely", id: 3 },
    { title: "Vacation", id: 4 },
  ];
  const time = moment(date).format("HH:mm");
  const day = moment(props.dayCalendar).format("DD");
  const dayDefault = moment(props.currentDate).format("DD");
  const month = moment(props.dayCalendar).format("MMM");
  const monthDefault = moment(props.currentDate).format("MMM");
  return (
    <>
      {props.showLeave ? <GestureHandlerRootView style={Style.Gestur}>
        <View style={Style.viewGestur}>
          <BottomSheet
            snapPoints={snapPoints}
            ref={sheetRef}
            index={0}
            onChange={handleSheetChanges}
            onClose={() => {
              props.setShowLeave(!props.showLeave);
              props.setSelect(false);
              props.setShow(false);
              props.setA(false);
              props.setVacation(false);
            }}
            enablePanDownToClose={true}
          >
            <Animatable.View
              animation={"fadeInUp"}
              delay={500}
              easing={"ease-in-out"}
              duration={400}
            >
              {props.hourly && props.select ? <View>
                  <View style={Style.ViewHourly}>
                    <Text style={Style.TextHourly}>Hourly leave</Text>
                    <Text style={Style.TextDate}
                    >{`${month || monthDefault} ${day || dayDefault}`}</Text>
                  </View>
                  <View style={{ alignItems: "center", marginTop: Size.size22 }}>
                    <TouchableOpacity
                      onPress={() => setOpenTime(true)}
                      style={Style.TouchSvgCalendar}>
                      <View style={{ marginLeft: Size.size13 }}>
                        <SvgCalendar iconColor={"#ffffff"} />
                      </View>
                      <Text style={Style.TextTime}>{time}</Text>
                      <View style={{ marginRight: Size.size13 }}>
                        <SvgBottom />
                      </View>
                    </TouchableOpacity>
                    <DatePicker
                      is24hourSource='locale'
                      locale='fr'
                      modal
                      mode={"time"}
                      open={openTime}
                      date={date}
                      onConfirm={(date) => {
                        setOpenTime(false);
                        setDate(date);
                        props.setData({...props.data,['time']:date})
                      }}
                      onCancel={() => {
                        setOpenTime(false);
                      }}
                      onDateChange={setDate}
                    />
                  </View>
                  <View style={{ alignItems: "center", marginTop: Size.size22 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: Size.size289 }}>
                      <View>
                        <TouchableOpacity style={Style.TouchDuration}
                                          onPress={() => props.setData({...props.data,['duration']:"15 minute"})}
                        >
                          <Text style={Style.TextDuration}
                          >15 minute</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity style={Style.TouchDuration}
                                          onPress={() =>  props.setData({...props.data,['duration']:"2 hours"})}
                        >
                          <Text style={Style.TextDuration}
                          > 2 hours</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: Size.size289 }}>
                      <View style={{ marginTop: Size.size18 }}>
                        <TouchableOpacity style={Style.TouchDuration}
                                          onPress={() =>  props.setData({...props.data,['duration']:"30 minute"})}
                        >
                          <Text style={Style.TextDuration}
                          >30 minute</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{ marginTop: Size.size18 }}>
                        <TouchableOpacity style={Style.TouchDuration}
                                          onPress={() =>  props.setData({...props.data,['duration']:"3 hours"})}
                        >
                          <Text style={Style.TextDuration}
                          >3 hours</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: Size.size289 }}>
                      <View style={{ marginTop: Size.size18 }}>
                        <TouchableOpacity style={Style.TouchDuration}
                                          onPress={() =>  props.setData({...props.data,['duration']:"1 hour"})}
                        >
                          <Text style={Style.TextDuration}
                          >1 hour</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{ marginTop: Size.size18 }}>
                        <TouchableOpacity style={Style.TouchDuration}
                                          onPress={() =>  props.setData({...props.data,['duration']:"Half day"})}
                        >
                          <Text style={Style.TextDuration}
                          > Half day</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Input multiline style={Style.area} numberOfLines={4} placeholder="Description" {...props} />
                    <TouchableOpacity style={Style.TouchBook}
                                      onPress={() => {
                                        props.setShowLeave(!props.showLeave);
                                        props.setGreate(!props.greate);
                                        dispatch(bookHourlyRequest(props.data))
                                      }}
                    >
                      <Text style={Style.TextBook}
                      >Book</Text>
                    </TouchableOpacity>
                  </View>
                </View> :
                <View>
                  <View style={{ alignItems: "center", marginTop: Size.size30 }}>
                    <Text style={Style.TextCoose}>Coose book leave</Text>

                  </View>
                  <Check props={arr} data={props.data} setData={props.setData} ki={key} setHourly={props.setHourly}
                         vacation={props.vacation}
                         setShow={props.setShow}
                         setVacation={props.setVacation} />
                  <TouchableOpacity style={Style.TouchSelect}
                                    onPress={() => {
                                      props.setShowLeave(!props.showLeave);
                                      props.setA(!props.a);
                                    }}
                  >
                    <Text style={Style.TextSelect}
                    >Select</Text>
                  </TouchableOpacity>
                </View>
              }
            </Animatable.View>
          </BottomSheet>
        </View>
      </GestureHandlerRootView> : null}
    </>
  );
}

export default BookLeaveModal;
