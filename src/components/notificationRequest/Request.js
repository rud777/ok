import React, { useCallback, useMemo, useRef } from "react";
import { Platform, ScrollView, Text, TouchableOpacity, View, KeyboardAvoidingView } from "react-native";
import BottomSheet, { BottomSheetTextInput, BottomSheetView } from "@gorhom/bottom-sheet";
import Size from "../../assets/Size";
import Style from "./style";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SvgGreate from "../../assets/svg/SvgGreate";
import SvgX from "../../assets/svg/SvgX";
import Input from "../Input";
import style from "../../screen/login/style";

function Request(props) {
  const snapPoints = useMemo(() => ["60%", "80%", "100%"], []);
  const sheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  return (
    <>
      {props.showBottom ?
        <GestureHandlerRootView style={Style.Gestur}>
          <View
            style={Style.viewGestur}>
            <BottomSheet
              snapPoints={snapPoints}
              ref={sheetRef}
              index={props.role === "leader" && props.type === "send" ? 1: 0}
              onChange={handleSheetChanges}
              onClose={() => props.setShowBottom(!props.showBottom)}
              enablePanDownToClose={true}
              keyboardBehavior="fillParent"
            >
              <TouchableOpacity
                style={Style.SvgX}
                onPress={() => {
                  props.setShowBottom(!props.showBottom);
                }}>
                <SvgX />
              </TouchableOpacity>
              {props.categorie === "Work Remotely" ?
                <View style={{ height: "100%" }}>
                  <View style={Style.titleView}>
                    <Text style={Style.textTitle}>Work Remotely Request</Text>
                  </View>
                  <View style={Style.viewName}>
                    <Text style={Style.Employee}>Employee:</Text>
                    <Text style={Style.Surname}>Name Surname</Text>
                  </View>
                  <View style={Style.viewDate}>
                    <Text style={Style.Employee}>Date</Text>
                    <Text style={Style.date}>May 20,2022</Text>
                  </View>
                  <View style={Style.viewComment}>
                    <Text style={Style.Employee}>Comment:</Text>
                    <View style={Style.comment}>
                      <Text style={Style.textComment}>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the </Text>
                    </View>
                  </View>
                  {props.type === "send" && props.role === "leader" ? <>
                    <BottomSheetTextInput  style={Style.inputLeader}
                                           placeholder="Add comment"
                    />

                    <View style={{flexDirection:'row', marginLeft:Size.size80, position:'absolute', top:Size.size310, left:Size.size50}}>
                      <TouchableOpacity style={Style.TouchAccept}>
                        <Text style={Style.TextAccept}>Accept</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={Style.TouchCancel}>
                        <Text style={Style.TextAccept}>Cancel</Text>
                      </TouchableOpacity>
                    </View>
                  </> : null}
                </View> : null}
              {props.categorie === "Hourly Leave" ? <View>
                <View style={Style.titleView}>
                  <Text style={Style.textTitle}>Hourly Leave Request</Text>
                </View>
                <View style={Style.viewName}>
                  <Text style={Style.Employee}>Employee:</Text>
                  <Text style={Style.Surname}>Name Surname</Text>
                </View>
                <View style={Style.viewDate}>
                  <Text style={Style.Employee}>Date</Text>
                  <Text style={Style.date}>May 20,2022</Text>
                </View>
                <View style={Style.viewDate}>
                  <Text style={Style.Employee}>Time</Text>
                  <Text style={Style.date}>13:00 - 16:00</Text>
                </View>
                <View style={Style.viewComment}>
                  <Text style={Style.Employee}>Comment:</Text>
                  <View style={Style.comment}>
                    <Text style={Style.textComment}>Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the </Text>
                  </View>
                </View>
                {props.type === "send" && props.role === "leader" ? <>
                  <BottomSheetTextInput  style={Style.inputLeader}
                                         placeholder="Add comment"
                  />

                  <View style={{flexDirection:'row', marginLeft:Size.size80, position:'absolute', top:Size.size310, left:Size.size50}}>
                    <TouchableOpacity style={Style.TouchAccept}>
                      <Text style={Style.TextAccept}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.TouchCancel}>
                      <Text style={Style.TextAccept}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </>: null}
              </View> : null}
              {props.categorie === "Day Off" ? <View>
                <View style={Style.titleView}>
                  <Text style={Style.textTitle}>Day Off Request</Text>
                </View>
                <View style={Style.viewName}>
                  <Text style={Style.Employee}>Employee:</Text>
                  <Text style={Style.Surname}>Name Surname</Text>
                </View>
                <View style={Style.viewDate}>
                  <Text style={Style.Employee}>Date</Text>
                  <Text style={Style.date}>May 20,2022</Text>
                </View>
                <View style={Style.viewComment}>
                  <Text style={Style.Employee}>Comment:</Text>
                  <View style={Style.comment}>
                    <Text style={Style.textComment}>Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the </Text>
                  </View>
                </View>
                {props.type === "send" && props.role === "leader" ? <>
                    <BottomSheetTextInput  style={Style.inputLeader}
                                           placeholder="Add comment"
                    />

                  <View style={{flexDirection:'row', marginLeft:Size.size80, position:'absolute', top:Size.size310, left:Size.size50}}>
                    <TouchableOpacity style={Style.TouchAccept}>
                      <Text style={Style.TextAccept}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.TouchCancel}>
                      <Text style={Style.TextAccept}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </> : null}
              </View> : null}
              {props.categorie === "Vacation" ? <View>
                <View style={Style.titleView}>
                  <Text style={Style.textTitle}>Vacation Request</Text>
                </View>
                <View style={Style.viewName}>
                  <Text style={Style.Employee}>Employee:</Text>
                  <Text style={Style.Surname}>Name Surname</Text>
                </View>
                <View style={Style.viewDate}>
                  <Text style={Style.Employee}>To</Text>
                  <Text style={Style.date}>May 20,2022</Text>
                </View>
                <View style={Style.viewDate}>
                  <Text style={Style.Employee}>From</Text>
                  <Text style={Style.date}>May 24,2022</Text>
                </View>
                <View style={Style.viewComment}>
                  <Text style={Style.Employee}>Comment:</Text>
                  <View style={Style.comment}>
                    <Text style={Style.textComment}>Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since the </Text>
                  </View>
                </View>
                {props.type === "send" && props.role === "leader" ? <>
                  <BottomSheetTextInput  style={Style.inputLeader}
                                         placeholder="Add comment"
                  />

                  <View style={{flexDirection:'row', marginLeft:Size.size80, position:'absolute', top:Size.size310, left:Size.size50}}>
                    <TouchableOpacity style={Style.TouchAccept}>
                      <Text style={Style.TextAccept}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.TouchCancel}>
                      <Text style={Style.TextAccept}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </> : null}
              </View> : null}
            </BottomSheet>
          </View>
        </GestureHandlerRootView> : null}
    </>
  );
}

export default Request;
