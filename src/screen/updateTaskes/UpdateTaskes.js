import React, {useEffect, useLayoutEffect, useState} from "react";
import {Platform, Text, TouchableOpacity, View} from "react-native";
import Style from "../updateTaskes/style";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import SvgLeft from "../../assets/svg/SvgLeft";
import Size from "../../assets/Size";
import Input from "../../components/Input";
import SvgDown from "../../assets/svg/SvgDown";
import SvgCalendar from "../../assets/svg/SvgCalendar";
import ProjectModal from "../../components/modalTaskes/ProjectModal";
import DateModal from "../../components/modalTaskes/DateModal";
import DurationModal from "../../components/modalTaskes/DurationModal";
import {useDispatch, useSelector} from "react-redux";
import {deleteTasksRequest, updateTasksRequest} from "../../store/actions";

function UpdateTaskes(props) {
    const datas = props.route.params.item;
    const [show, setShow] = useState(false);
    const [showDate, setShowDate] = useState(false);
    const [showDuration, setShowDuration] = useState(false);
    const dispach = useDispatch()
    const [data, setData] = useState({
        ['id']: datas.id
    });
    console.log(data)
    useLayoutEffect(() => {
        setData({['id']: datas.id})
    }, [props])

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={Style.container}
        >

            {!show ? <View style={Style.body}>
                    <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                        <TouchableOpacity style={Style.svgLeft} onPress={() => {
                            props.navigation.navigate("Home");
                        }
                        }>
                            <SvgLeft/>
                        </TouchableOpacity>
                        <View style={Style.titleView}>
                            <Text style={Style.title}>
                                Update Task
                            </Text>
                        </View>
                        <View></View>
                    </View>
                    <View style={{alignItems: "center", marginTop: Size.size50}}>
                        <Input style={Style.input} {...props}
                               onChangeText={(v) => setData({...data,['title']:v})}
                               placeholder={`${datas.title}`}
                        />
                        <TouchableOpacity
                            style={{flexDirection: "row", width: Size.size295, height: Size.size25, marginTop: Size.size35}}
                            onPress={() => setShow(!show)}>
                            <Text style={Style.text}>{data["project"] || datas.project}</Text>
                            <View style={{position: "absolute", top: Size.size5, right: Size.size10}}>
                                <SvgDown/>
                            </View>
                        </TouchableOpacity>
                        <View style={{
                            width: Size.size319,
                            height: Size.size1,
                            backgroundColor: "#E3E3E3",
                            marginTop: Size.size8
                        }}>
                        </View>
                        <TouchableOpacity
                            style={{flexDirection: "row", width: Size.size295, height: Size.size25, marginTop: Size.size35}}
                            onPress={() => setShowDate(!showDate)}>
                            <Text style={Style.text}>{data['create_date'] || datas.create_date}</Text>
                            <View style={{position: "absolute", right: Size.size8}}>
                                <SvgCalendar/>
                            </View>
                        </TouchableOpacity>
                        <View style={{
                            width: Size.size319,
                            height: Size.size1,
                            backgroundColor: "#E3E3E3",
                            marginTop: Size.size8
                        }}>
                        </View>
                        <TouchableOpacity
                            style={{flexDirection: "row", width: Size.size295, height: Size.size25, marginTop: Size.size35}}
                            onPress={() => setShowDuration(!showDuration)}>
                            <Text style={Style.text}>{data['create_duration'] || datas.create_duration}</Text>
                            <View style={{position: "absolute", top: Size.size5, right: Size.size10}}>
                                <SvgDown/>
                            </View>
                        </TouchableOpacity>
                        <View style={{
                            width: Size.size319,
                            height: Size.size1,
                            backgroundColor: "#E3E3E3",
                            marginTop: Size.size8
                        }}>
                        </View>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: Size.size41}}>
                        <TouchableOpacity style={Style.delete} onPress={()=>{
                            dispach(deleteTasksRequest(datas))
                            props.navigation.navigate("Home",)
                                          }}
                        >
                            <Text style={Style.TextDelete}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.update} onPress={() => {
                            dispach(updateTasksRequest(data,datas,'Update'))
                            props.navigation.navigate("Home",)
                        }
                        }>
                            <Text style={Style.TextUpdate}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                : <ProjectModal show={show} data={data} setShow={setShow} setData={setData} datas={datas}/>
            }
            {showDate ? <DateModal showDate={showDate} setShowDate={setShowDate} data={data} setData={setData} datas={datas.id&&datas}/> : null}
            {showDuration ? <DurationModal setShowDuration={setShowDuration} showDuration={showDuration} data={data}
                                           setData={setData} datas={datas}/> : null}
        </KeyboardAvoidingView>
    );
}

export default UpdateTaskes;
