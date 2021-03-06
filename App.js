import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from "./components/Deck";

export default class App extends React.Component {
  render() {
    return (
      <Deck />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
