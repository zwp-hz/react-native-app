import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, Button } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>演出</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});
