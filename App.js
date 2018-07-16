import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Bananas from './components/Bananas';
import FixedDimensions from './components/heightandwidth/FixedDimensions';
import FlexDimensions from './components/heightandwidth/FlexDimensions';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Bananas />
        <Text>Hello world!</Text>
        <FixedDimensions />
        <FlexDimensions />
      </View>
    );
  }
}