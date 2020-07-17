import React, { Component } from "react";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  View,
 
  Text,
 
  Image
} from "react-native";



class Descover extends Component {
  

  render() {
    return (
      <KeyboardAwareScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View
      style={{
        alignItems: 'center',
        marginTop: 70,
      }}>
   <Image source={require('./img/king.jpg')}
   style={{ width: 340, height: 540 }} />

      <View
        style={{
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Text style={{fontSize: 28, color: '#373737', marginBottom: 30, marginLeft:30}}>

        LeBron Raymone James Sr. ( born December 30, 1984) is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). He is widely considered to be one of the greatest basketball players in NBA history. Discussions ranking him as the greatest basketball player of all time have often been subject to significant debate, with frequent comparisons to Michael Jordan.
        </Text>
        
    </View>
    </View>
       </KeyboardAwareScrollView>
        );
    }
  }

export default Descover;
