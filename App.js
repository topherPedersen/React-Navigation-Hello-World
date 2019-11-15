import React, { Component } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler'
import { NavigationNativeContainer } from '@react-navigation/native';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Button title="hello?"/>
      </View>
    );
  }
}

export default App;
