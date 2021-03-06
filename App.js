import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {

  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

// REFERENCE (TabNavigator with Top Header Bar): https://github.com/react-navigation/react-navigation/issues/741

const routeConfiguration = {
  Home: HomeScreen,
  Settings: SettingsScreen,
};

const tabNavigatorConfiguration = {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
};

const myTabNavigator = createMaterialTopTabNavigator(routeConfiguration, tabNavigatorConfiguration);

const RootStack = createStackNavigator(
  {
    Home: {
      screen: myTabNavigator,
      navigationOptions: {title: "Moolabeast"}
    }
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

/*
const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);
*/

export default class App extends React.Component {
  render() {
    return(<AppContainer/>);
  }
}