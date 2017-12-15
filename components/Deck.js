import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Deck extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.deckContainer}>
            <Text style={styles.deckHeader}>Udacicards</Text>
            <Text style={styles.cardCount}>3 cards</Text>
          </View>
          <View style={styles.deckContainer}>
            <Text style={styles.deckHeader}>New deck</Text>
            <Text style={styles.cardCount}>0 cards</Text>
          </View>
          <View style={styles.deckContainer}>
            <Text style={styles.deckHeader}>New Deck 2</Text>
            <Text style={styles.cardCount}>0 cards</Text>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  deckContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  },
  deckHeader: {
    fontSize: 30
  },
  cardCount: {
    color: 'gray',
    fontSize: 18
  }
}); 

export default Deck;