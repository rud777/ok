import React, { useCallback, useMemo, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Size from "../../assets/Size";
import CalendarDate from "../CalendarDate";
import Input from "../Input";;
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SvgGreate from "../../assets/svg/SvgGreate";
import SvgX from "../../assets/svg/SvgX";
import Style from "./style";

function GreateModalEvents(props) {
  const snapPoints = useMemo(() => ["45%", "80%", "100%"], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  return (
    <GestureHandlerRootView style={Style.Gestur}>
      <View style={Style.viewGestur}>
        <BottomSheet
          snapPoints={snapPoints}
          ref={sheetRef}
          index={0}
          onChange={handleSheetChanges}
        >
          <TouchableOpacity
            style={Style.SvgX}
            onPress={() => {
              props.setGte(!props.gte)
              props.navigation.navigate('Home')
            }}>
            <SvgX />
          </TouchableOpacity>
          <View style={Style.greateView}>
            <SvgGreate />
            <Text style={Style.TextGreate}>Greate !</Text>
            <Text style={Style.EventGreateText}>Event successfully created. </Text>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export default GreateModalEvents;
