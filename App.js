/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  YellowBox
} from 'react-native';
import MainNavigator from "./Navigation/Navigator";
YellowBox.ignoreWarnings(['Remote debugger']);

const App: () => React$Node = () => {
  return (
    <>
      <MainNavigator />
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
