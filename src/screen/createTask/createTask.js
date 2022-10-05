import React, {useState} from "react";
import {Platform, Text, TextInput, View, KeyboardAvoidingView, Modal, TouchableOpacity} from "react-native";
import Style from "./style";
import Size from "../../assets/Size";
import ProjectModal from "../../components/modalTaskes/ProjectModal";
import SvgDown from "../../assets/svg/SvgDown";
import SvgCalendar from "../../assets/svg/SvgCalendar";
import DateModal from "../../components/modalTaskes/DateModal";
import DurationModal from "../../components/modalTaskes/DurationModal";
import Input from "../../components/Input";
import {useDispatch} from "react-redux";
import {listTasksRequest} from "../../store/actions";

function CreateTask(props) {
    const [show, setShow] = useState(false);
    const [showDate, setShowDate] = useState(false);
    const [showDuration, setShowDuration] = useState(false);
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const taskListRequest = () => {
        dispatch(listTasksRequest(data))
        props.navigation.navigate('Home')
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={Style.container}
        >

            {!show ? <View style={Style.body}>
                    <View style={Style.titleView}>
                        <Text style={Style.title}>
                            Create Task
                        </Text>
                    </View>
                    <View style={{alignItems: "center", marginTop: Size.size50}}>
                        <Input style={Style.input} {...props}
                               onChangeText={(v) => setData({...data, ['title']: v})}
                               placeholder={"Title*"||data['title']}
                        />
                        <TouchableOpacity
                            style={Style.TouchSvg}
                            onPress={() => setShow(!show)}>
                            <Text style={Style.text}>{data["project"] || 'Projects*'}</Text>
                            <View style={Style.SvgDown}>
                                <SvgDown/>
                            </View>
                        </TouchableOpacity>
                        <View style={Style.bottomLine}>
                        </View>
                        <TouchableOpacity
                            style={Style.TouchSvg}
                            onPress={() => setShowDate(!showDate)}>
                            <Text style={Style.text}>{data['create_date'] || 'Date'}</Text>
                            <View style={Style.SvgCalendar}>
                                <SvgCalendar/>
                            </View>
                        </TouchableOpacity>
                        <View style={Style.bottomLine}>
                        </View>
                        <TouchableOpacity
                            style={Style.TouchSvg}
                            onPress={() => setShowDuration(!showDuration)}>
                            <Text style={Style.text}>{data['create_duration'] || 'Duration'}</Text>
                            <View style={Style.SvgDown}>
                                <SvgDown/>
                            </View>
                        </TouchableOpacity>
                        <View style={Style.bottomLine}>
                        </View>
                    </View>
                    <TouchableOpacity style={Style.createButten} onPress={() => taskListRequest()}>
                        <Text style={Style.createText}>Create</Text>
                    </TouchableOpacity>
                </View>

                : <ProjectModal show={show} data={data} setShow={setShow} setData={setData}/>
            }
            {showDate ? <DateModal data={data} setData={setData} showDate={showDate} setShowDate={setShowDate}/> : null}
            {showDuration ? <DurationModal data={data} setData={setData} setShowDuration={setShowDuration}
                                           showDuration={showDuration}
            /> : null}

        </KeyboardAvoidingView>
    );
}

export default CreateTask;
