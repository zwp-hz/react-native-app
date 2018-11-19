import React, { Component } from "react";
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from "react-native";

export default class Modal extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.close}>关闭</Text>
          <Text style={{ fontWeight: "bold" }}>选择城市</Text>
        </View>
        <ScrollView>
          <View styles={styles.ScrollBox}>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
            <Text>1</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  close: {
    position: "absolute",
    top: 5,
    left: 8
  },
  ScrollBox: {
    // flex: 1,
    backgroundColor: "#f6f6f6"
  }
});
