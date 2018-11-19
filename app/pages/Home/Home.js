import React, { Component } from "react";
import {
  StyleSheet,
  Animated,
  Text,
  Button,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl
} from "react-native";
import Swiper from "./Swiper";
import MovieList from "./MovieList";
import { screenW, isIphoneX } from "../../units/units";
import Icon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeOutOpacity: new Animated.Value(1),
      upHeight: new Animated.Value(0),
      upOpacity: new Animated.Value(0),
      isRefreshing: false
    };
  }

  onScroll(event) {
    let y = event.nativeEvent.contentOffset.y;

    this.state.fadeOutOpacity.setValue(4 / y);
    this.state.upHeight.setValue(y * 2);
    this.state.upOpacity.setValue(y / 40);
  }

  render() {
    let { isRefreshing } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Animated.View style={{ opacity: this.state.fadeOutOpacity }}>
            <Text
              style={styles.headerText}
              onPress={() => this.props.navigation.navigate("CitySelect")}
            >
              杭州
              <Ionicons name="md-arrow-dropdown" />
            </Text>
            <Icon
              style={{ position: "absolute", right: 20, color: "#fff" }}
              name="search"
              size={20}
            />
          </Animated.View>
          <Animated.View
            style={[
              styles.downHeader,
              {
                opacity: this.state.upOpacity,
                height: this.state.upHeight
              }
            ]}
          >
            <Text
              style={[styles.headerText, { color: "#333" }]}
              onPress={() => this.props.navigation.navigate("CitySelect")}
            >
              杭州
              <Ionicons name="md-arrow-dropdown" />
            </Text>
            <View style={styles.inputBox}>
              <Icon style={{ paddingLeft: 5 }} name="search" color="#929292" />
              <Text
                style={{
                  paddingTop: 2,
                  paddingLeft: 5,
                  fontSize: 12,
                  color: "#929292"
                }}
              >
                搜影片、影院、影人
              </Text>
            </View>
          </Animated.View>
        </View>
        <ScrollView
          onScroll={event => this.onScroll(event)}
          scrollEventThrottle={5}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={() => {
                this.setState({ isRefreshing: true });
                setTimeout(() => {
                  this.setState({ isRefreshing: false });
                }, 1500);
              }}
              tintColor="#ff4d64"
              title="loading..."
              titleColor="#777"
              colors={["#ff4d64"]}
              progressBackgroundColor="#fff"
            />
          }
        >
          <Swiper />
          <View style={styles.mainBox}>
            <MovieList type="hotMovie" />
            <MovieList type="soonShow" />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 100,
    height: isIphoneX ? 60 : 40,
    width: screenW,
    paddingTop: isIphoneX ? 34 : 22
  },
  downHeader: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    width: screenW,
    maxHeight: isIphoneX ? 60 : 40,
    top: 0,
    paddingTop: isIphoneX ? 34 : 22,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fff",
    overflow: "hidden"
  },
  headerText: {
    width: 36,
    paddingTop: 3,
    marginLeft: 15,
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold"
  },
  inputBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 22,
    lineHeight: 22,
    marginLeft: 11,
    marginRight: 15,
    backgroundColor: "#f6f6f6",
    borderRadius: 6
  },
  mainBox: {
    paddingTop: 20,
    paddingLeft: 15,
    borderRadius: 10
  }
});
