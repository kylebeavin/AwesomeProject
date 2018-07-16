import React, { Component } from 'react';
import { createStackNavigator, } from 'react-navigation';
import { Text, View } from 'react-native';
import Bananas from './components/Bananas';
import FixedDimensions from './components/heightandwidth/FixedDimensions';
import FlexDimensions from './components/heightandwidth/FlexDimensions';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex:1,alignItems: 'center',justifyContent:'center'}}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});