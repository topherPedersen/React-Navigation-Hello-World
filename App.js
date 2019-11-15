import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const centerContents = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
};

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Dank Memes"
          onPress={() => this.props.navigation.navigate('DankMemes')} />
        <Button
          title="Cat Videos"
          onPress={() => this.props.navigation.navigate('CatVideos')} />  
      </View>
    );
  }
}

class DankMemesScreen extends React.Component {
  render() {
    return(
      <View style={centerContents}>
        <Text>Dank Memes Go Here</Text>
      </View>
    );
  }
}

class CatVideosScreen extends React.Component {
  render() {
    return(
      <View style={centerContents}>
        <Text>Cat Videos Go Here</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    DankMemes: DankMemesScreen,
    CatVideos: CatVideosScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}