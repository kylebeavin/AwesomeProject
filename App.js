import React, { Component } from 'react';
import { Button, Image, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class LogoTitle extends Component {
  render() {
    return (
      <Image source={require('./KoolBuilder.png')} style={{ width:250, height:40}}/>
    )
  }
}

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
    headerTitle: <LogoTitle/>, 
    headerRight: (
      // <View>
      // <Button onPress={() => alert('This is a button!')} title="Info"/>
      <Button onPress={navigation.getParam('increaseCount')} title="+1"/>
      // </View> 
    )}
  };

  componentDidMount() {
    this.props.navigation.setParams({increaseCount: this._increaseCount})
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

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
static navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('otherParam', 'A Nested Details Screen'),
  }
}

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
        <Button title="Update the title" onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}/>
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
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
