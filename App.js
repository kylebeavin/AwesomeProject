import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to Details" onPress={() => this.props.navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'anything you want here',
        })} />
      </View>
    );
  }
}

class DetailsScreen extends Component {
  render() {

const { navigation } = this.props;
const itemId = navigation.getParam('itemId', 'NO-ID');
const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button title="Go to Details... again" onPress={() => this.props.navigation.push('Details')} />
        <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')}/>
        <Button title="Go back" onPress={() => this.props.navigation.goBack()}/>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
