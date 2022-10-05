import React, { useMemo, useRef, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Text,  TouchableOpacity, View } from "react-native";
import Size from "../../assets/Size";
import Input from "../Input";
import moment from "moment";
import CalendarDate from "../CalendarDate";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Style from './style'
import {useDispatch} from "react-redux";
import {bookVacationRequest} from "../../store/actions";

function VacationModal(props) {
  const sheetRef = useRef(null);
  const [sday, setSday] = useState();
  const [eday, setEday] = useState();
  const dispatch=useDispatch()
  const snapPoints = useMemo(() => ['70%', "80%", "100%"], []);
  const start = moment(sday).format("DD");
  const end = moment(eday).format("DD");
  const year = moment(sday).format("YYYY");
  const month = moment(sday).format("MMM");
  return (
    <>
    {props.a? <GestureHandlerRootView style={Style.Gestur}>
      <View style={Style.viewGestur}>
        <BottomSheet
          snapPoints={snapPoints}
          ref={sheetRef}
          index={1}
          onClose={() => {
            props.setA(!props.a);
            props.setShow(!props.show);
          }}
          enablePanDownToClose={true}
        >
          <BottomSheetView>
            <View style={{ marginLeft: Size.size25 }}>
              <Text style={Style.TextVacation}>Vacation</Text>
              <Text style={Style.TextMounthYear}
              >{month} {start} - {end}, {year}</Text>
            </View>
            <View style={Style.CalendarView}>
              <CalendarDate setData={props.setData} data={props.data} setSday={setSday} setEday={setEday} />
            </View>
            <View style={{alignItems: "center",marginTop:Size.size20 }}>
              <Input multiline style={Style.area} onChangeText={(v) => props.setData({...props.data,['description']:v})} numberOfLines={4} placeholder="Description" {...props} />
            </View>
            <TouchableOpacity style={Style.TouchBookVacation}
                              onPress={() => {
                                props.setShow(!props.show);
                                props.setGreate(!props.greate);
                                props.setA(!props.a);
                                dispatch(bookVacationRequest(props.data))
                              }}
            >
              <Text style={Style.TextBook}
              >Book</Text>
            </TouchableOpacity>
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>:null}
    </>
  );
}

export default VacationModal;
