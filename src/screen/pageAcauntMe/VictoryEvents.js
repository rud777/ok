import React from "react";
import { Text, View } from "react-native";
import Size from "../../assets/Size";
import { VictoryLabel,VictoryLegend, VictoryPie } from "victory-native";
import Svg from "react-native-svg";
import UnreadIcon from "../../assets/svg/UnreadIcon";
import Style from "./style";
function VictoryEvents(props) {
  return (
    <>
      <View style={{flexDirection:'row',justifyContent:'center',marginTop:Size.size30}}>
        <View
          style={{
            height: Size.size200,
            width: Size.size380,
            marginLeft:Size.size120*-1,
            position:'relative'
          }}>
          <Svg viewBox={`0 0 ${Size.size380} ${Size.size380}`} >
            <VictoryPie
              animate={{
                duration: 2000
              }}
              padding={Size.size125}
              startAngle={Size.size30}
              endAngle={Size.size450}
              standalone={false}
              data={[
                {x: 'History', y: Size.size20},
                {x: 'Teambulding', y: Size.size80},
              ]}
              cornerRadius={Size.size10}
              innerRadius={Size.size45}
              labels={() => null}
              colorScale={['#F7F8F9', '#EF988F']}
            />

            <VictoryPie
              animate={{
                duration: 2000
              }}
              padding={Size.size110}
              standalone={false}
              startAngle={Size.size30}
              endAngle={Size.size450}
              data={[
                {x: 'History', y: Size.size30},
                {x: 'Meeting', y: Size.size70},
              ]}
              cornerRadius={Size.size10}
              innerRadius={Size.size95}
              labels={() => null}
              colorScale={['#F7F8F9', '#F4C584']}
            />
            <VictoryPie
              animate={{
                duration: 2000
              }}
              standalone={false}
              data={[
                {x: 'History', y: Size.size60},
                {x: 'Trainings', y: Size.size40},
              ]}
              padding={Size.size60}
              startAngle={Size.size30}
              endAngle={Size.size450}
              cornerRadius={Size.size10}
              innerRadius={Size.size110}
              labels={() => null}
              colorScale={['#F7F8F9', '#92BEFA']}
            />
            <VictoryPie
              animate={{
                duration: 2000
              }}
              standalone={false}
              padding={Size.size40}
              startAngle={Size.size30}
              endAngle={Size.size450}
              data={[
                {x: 'History', y: Size.size70},
                {x: 'Events', y: Size.size30},
              ]}
              cornerRadius={Size.size10}
              innerRadius={Size.size165}
              labels={() => null}
              colorScale={['#F7F8F9', '#83B7AD']}
            />
            <VictoryLabel
              textAnchor="middle"
              style={{fontSize: Size.size20, fontFamily:"Montserrat"}}
              x={Size.size190}
              y={Size.size190}
              text="Item"
            />
          </Svg>
        </View>
        <View style={{flexDirection:'column',position:'absolute',top:Size.size50,right:Size.size20}}>
        <View style={{flexDirection:'row',alignItems:'center',}}>
          <UnreadIcon
            iconColor={'#83B7AD'}
            iconWidth={Size.size10}
            iconHeight={Size.size10}
          />
          <Text style={Style.textVictory}>Events</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:Size.size16}}>
          <UnreadIcon
            iconColor={'#92BEFA'}
            iconWidth={Size.size10}
            iconHeight={Size.size10}
          />
          <Text style={Style.textVictory}>Trainings</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:Size.size16}}>
          <UnreadIcon
            iconColor={'#F4C584'}
            iconWidth={Size.size10}
            iconHeight={Size.size10}
          />
          <Text style={Style.textVictory}>Meeting</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:Size.size16}}>
          <UnreadIcon
            iconColor={'#EF988F'}
            iconWidth={Size.size10}
            iconHeight={Size.size10}
          />
          <Text style={Style.textVictory}>Teambuilding</Text>
        </View>
        </View>
      </View>
    </>
  );
}

export default VictoryEvents;
