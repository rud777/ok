import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Style from "./style";
import Size from "../../assets/Size";
import notific from '../../images/notification.png'
import img1 from '../../images/Rectangle1.png'
import img2 from '../../images/Rectangle2.png'
import img3 from '../../images/Rectangle3.png'
import img4 from '../../images/Rectangle4.png'
import img5 from '../../images/Rectangle5.png'
import img6 from '../../images/Rectangle6.png'
import img7 from '../../images/Rectangle7.png'
import img8 from '../../images/Rectangle8.png'
import img9 from '../../images/Rectangle9.png'
import img10 from '../../images/Rectangle10.png'
import Request from "../../components/notificationRequest/Request";

function Notification(props) {
  const listNotific=[
    {
      readed:'no',
      role:'user',
      image:img1,
      name:'Name Surname',
      type:'accepted',
      request:'your request',
      date:'May 20,2022',
      time:'15:00',
      categore:'Work Remotely'
    },
    {
      readed:'no',
      role:'user',
      image:img2,
      name:'Name Surname',
      type:'declined',
      request:'your request',
      date:'May 20,2022',
      time:'15:00',
      categore:'Hourly Leave'
    },
    {
      readed:'no',
      role:'leader',
      image:img3,
      name:'Name Surname',
      type:'accepted',
      request:'your request',
      date:'May 20,2022',
      time:'15:00',
      categore:'Day Off'
    },
    {
      readed:'no',
      role:'leader',
      image:img4,
      name:'Name Surname',
      type:'declined',
      request:'your request',
      date:'May 20,2022',
      time:'15:00',
      categore:'Vacation'
    },
    {
      readed:'no',
      role:'user',
      image:img5,
      name:'Name Surname',
      type:'accepted',
      request:'your request',
      date:'May 20,2022',
      time:'15:00',
      categore:'Hourly Leave'
    },
    {
      readed:'no',
      role:'user',
      image:img6,
      name:'Name Surname',
      type:'declined',
      request:'your request',
      date:'May 20,2022',
      time:'15:00',
      categore:'Day Off'
    },
    {
      readed:'no',
      role:'leader',
      image:img3,
      name:'Name Surname',
      type:'send',
      request:'your request',
      date:'May 20,2022',
      time:'15:00',
      categore:'Day Off'
    },
    {
      readed:'yes',
      role:'leader',
      image:img7,
      name:'Name Surname',
      type:'send',
      request:'your request',
      date:'May 20,2022',
      time:'15:00',
      categore:'Hourly Leave'
    },
    {
      readed:'yes',
      role:'user',
      image:img8,
      name:'Name Surname',
      type:'declined',
      request:'your request',
      date:'May 20,2022',
      time:'15:00',
      categore:'Hourly Leave'
    },
    {
      readed:'yes',
      role:'user',
      image:img9,
      name:'Name Surname',
      type:'send',
      request:'your request',
      date:'May 20,2022',
      time:'15:00',
      categore:'Vacation'
    },
    {
      readed:'yes',
      role:'leader',
      image:img10,
      name:'Name Surname',
      type:'send',
      request:'your request',
      date:'May 20,2022',
      time:'15:00',
      categore:'Vacation'
    },
  ]
  const [categorie,setCategorie]=useState()
  const [role,setRole]=useState()
  const [type,setType]=useState()
  const [showBottom,setShowBottom]=useState(false)
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(true);
  const [readed,setReaded]=useState(false)
  const handlerButten = () => {
    setActive(false);
    setActive1(true);
  };
  const handlerButten1 = () => {
    setActive(true);
    setActive1(false);
  };
  useEffect(()=>{
    if (showBottom){
      props.navigation.setOptions({
        tabBarStyle: { display: "none" },
      })
    }
    if (!showBottom){
      props.navigation.setOptions({
        tabBarStyle: { display: "flex" },
      })
    }
  },[showBottom])

  return (
    <View style={Style.body}>
      <View style={Style.titleView}>
        <Text style={Style.titleText}>Notifications</Text>
      </View>
      <View style={Style.toucheView}>
        <TouchableOpacity style={active?Style.activeTouch:Style.touch} onPress={handlerButten}>
          <Text  style={active?Style.text:Style.activeText}>Unread</Text>
        </TouchableOpacity>
        <TouchableOpacity style={active1?Style.activeTouch:Style.touch} onPress={handlerButten1}>
          <Text style={active1?Style.text:Style.activeText}>Read</Text>
        </TouchableOpacity>
      </View>
        {!active?<TouchableOpacity style={Style.readedView} onPress={()=>setReaded(!readed)}>
          <Text style={Style.readedText}>Mark all as read</Text>
        </TouchableOpacity>:null}
        {!readed||!active1?<FlatList data={listNotific} style={Style.Flatlist} renderItem={({ item }) =>(
          <TouchableOpacity style={Style.viewList} onPress={()=>{
            setShowBottom(!showBottom)
            setCategorie(item.categore)
            setType(item.type)
            setRole(item.role)
          }}>
            {item.readed==="yes"&&!active1&&(
              <>
              <Image source={item.image} style={Style.image}/>
            <View>
              <Text style={Style.imageText}>
                {item.name}
                {item.type==='send'?<Text style={Style.imageText}>    {item.type}    </Text>:
                <Text style={item.type==='accepted'?Style.accepted:Style.declined}> {item.type} </Text>}
                {item.request}
              </Text>
              <View>
                <Text style={Style.date}>{item.date}|{item.time}</Text>
              </View>
            </View>
            {!active?<View style={Style.ball}>
            </View>:<View style={Style.ViewNull}>
            </View>}
              </>
              )}
            {item.readed==="no"&&active1&&(
                <>
                  <Image source={item.image} style={Style.image}/>
                  <View>
                    <Text style={Style.imageText}>
                      {item.name}
                      {item.type==='send'?<Text style={Style.imageText}>    {item.type}    </Text>:
                        <Text style={item.type==='accepted'?Style.accepted:Style.declined}> {item.type} </Text>}
                      {item.request}
                    </Text>
                    <View>
                      <Text style={Style.date}>{item.date}|{item.time}</Text>
                    </View>
                  </View>
                  {!active?<View style={Style.ball}>
                  </View>:<View style={Style.ViewNull}>
                  </View>}
                </>)}
          </TouchableOpacity>
        )
        }/>:<View style={ Style.ViewImg}>
          <Image source={notific} style={Style.img}/>
        </View>}
      {showBottom?<Request{...props} role={role} type={type} categorie={categorie} setShowBottom={setShowBottom} showBottom={showBottom} />:null}
    </View>
  );
}

export default Notification;
