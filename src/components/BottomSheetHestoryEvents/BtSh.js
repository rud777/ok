import React, { useMemo, useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Style from "../modalBook/style";
import { Text, TouchableOpacity, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import SvgX from "../../assets/svg/SvgX";
import Size from "../../assets/Size";
import SvgGreate from "../../assets/svg/SvgGreate";
import CalendarDateHome from "../CalendarDateHome";
import CalendarDate2 from "../CalendarDate2";

function BtSh(props) {
  const snapPoints = useMemo(() => ["50%", "80%", "100%"], []);
  const sheetRef = useRef(null);
  return (
    <>
      {props.sheet ?
        <GestureHandlerRootView style={Style.Gestur}>
          <View style={Style.viewGestur}>
            <BottomSheet
              snapPoints={snapPoints}
              ref={sheetRef}
              index={1}
              onClose={() => {
                props.setSheet(!props.sheet);
              }}
              enablePanDownToClose={true}
            >
              <TouchableOpacity
                style={Style.SvgX}
                onPress={() => {
                  props.setSheet(!props.sheet);
                }}>
                <SvgX />
              </TouchableOpacity>
              <View style={{ marginTop: Size.size20 ,marginBottom:Size.size30}}>
                <CalendarDate2 setSearchDay={props.setSearchDay}/>
              </View>
              <TouchableOpacity style={Style.TouchBookVacation}
                                onPress={() => {
                                  props.setSheet(!props.sheet);
                                }}
              >
                <Text style={Style.TextBook}
                >Search</Text>
              </TouchableOpacity>
            </BottomSheet>
          </View>
        </GestureHandlerRootView> : null}
    </>
  );

}

export default BtSh;
