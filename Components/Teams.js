import React, { Component } from "react";

import { View,  Image, Text } from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


class Teams extends Component {
  
  render() {
    return (
      <KeyboardAwareScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View
      style={{
        alignItems: 'center',
        marginTop: 70,
      }}>
   <Image source={require('./img/cavas.png')}
   style={{ width: 240, height: 340 }} />

      <View
        style={{
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Text style={{fontSize: 28, color: '#373737', marginBottom: 30, marginLeft:30}}>

        The Cleveland Cavaliers, often referred to as the Cavs, are an American professional basketball team based in Cleveland. The Cavaliers compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Central Division. The team began play as an expansion team in 1970, along with the Portland Trail Blazers and Buffalo Braves.
        </Text>
        
    </View>
    </View>

    <View
      style={{
        alignItems: 'center',
        marginTop: 70,
      }}>
   <Image source={require('./img/heat.jpg')}
   style={{ width: 240, height: 340 }} />

      <View
        style={{
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Text style={{fontSize: 28, color: '#373737', marginBottom: 30, marginLeft:30}}>

        The Miami Heat are an American professional basketball team based in Miami. The Heat compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Southeast Division. The Heat play their home games at American Airlines Arena, and have won three NBA championships.
        </Text>
        
    </View>
    </View>

    <View
      style={{
        alignItems: 'center',
        marginTop: 70,
      }}>
   <Image source={require('./img/lak.jpg')}
   style={{ width: 260, height: 220 }} />

      <View
        style={{
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Text style={{fontSize: 28, color: '#373737', marginBottom: 30, marginLeft:30}}>

        The Los Angeles Lakers are an American professional basketball team based in Los Angeles. The Lakers compete in the National Basketball Association (NBA) as a member of the league's Western Conference Pacific Division. The Lakers play their home games at Staples Center, an arena shared with the NBA's Los Angeles Clippers, the Los Angeles Sparks of the Women's National Basketball Association, and the Los Angeles Kings of the National Hockey League.[9] The Lakers are one of the most successful teams in the history of the NBA, and have won 16 NBA championships, the second-most behind the Boston Celtics.
        </Text>
        
    </View>
    </View>



       </KeyboardAwareScrollView>
        );
    }
  }

export default Teams;
