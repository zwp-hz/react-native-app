import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>个人中心</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("CitySelect")}
        />
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
