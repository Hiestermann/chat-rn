/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ChatScreen from './components/ChatScreen';


class App extends Component {
  render() {
    return (
      <ChatScreen/>
    );
  }
}

export default App;