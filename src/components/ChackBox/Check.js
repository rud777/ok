import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Size from '../../assets/Size'
import _ from 'lodash'


function Check({props,data,setData,ki,setHourly,vacation,setVacation,setShow,datas}) {
  const [toggleCheckBox, setToggleCheckBox] = useState()
  const changeValue=(item,kay,value)=>{
    if (item.item.title==='Hourly leave'){
      setHourly(true)
      setVacation(false)
      setShow(false)
    }
    if(item.item.title==='Vacation'){
      setVacation(true)
      setShow(true)
      setHourly(true)
    }
    setToggleCheckBox(item.index)
    setData({ ...data, [kay]: value})
  }

  return (
    <View style={{marginTop:Size.size27}}>
      <FlatList data={props} renderItem={item=> (
        <View style={{marginLeft:Size.size16,marginTop:Size.size20}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox===item.index}
          onValueChange={() => changeValue(item,ki,item.item.title)
          }
        />
          <Text>{item.item.title}</Text>
        </View>
        <View style={{width:Size.size335, height:Size.size1,backgroundColor:'#E3E3E3'}}>
        </View>
        </View>
        )
      } keyExtractor={item =>item.id} />

    </View>
  );
}

export default Check;
