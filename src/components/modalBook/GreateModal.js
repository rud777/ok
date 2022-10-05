import React, { useCallback, useMemo, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Size from "../../assets/Size";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SvgGreate from "../../assets/svg/SvgGreate";
import SvgX from "../../assets/svg/SvgX";
import Style from './style'

function GreateModal(props) {
  const snapPoints = useMemo(() => ["45%", "80%", "100%"], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  return (
    <>
      {props.greate ?
        <GestureHandlerRootView style={Style.Gestur}>
      <View style={Style.viewGestur}>
        <BottomSheet
          snapPoints={snapPoints}
          ref={sheetRef}
          index={0}
          onChange={handleSheetChanges}
          onClose={()=>{
            props.setGreate(!props.greate)
            props.setSelect(false)
            props.setShow(false)
            props.setA(false)
            props.setVacation(false)
            props.navigation.navigate('Home')
          }}
          enablePanDownToClose={true}
        >
          <TouchableOpacity
            style={Style.SvgX}
            onPress={() => {
              props.setGreate(!props.greate)
              props.setSelect(false)
              props.setShow(false)
              props.setA(false)
              props.setVacation(false)
              props.navigation.navigate('Home')
            }}>
            <SvgX />
          </TouchableOpacity>
          <View style={{alignItems:'center',marginTop:Size.size17}}>
            <SvgGreate />
            <Text style={Style.TextGreate}>Greate !</Text>
            <Text style={Style.TextTimeGreate}>Time successfully booked</Text>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>:null}
    </>
  );
}

export default GreateModal;
