import React, { Component } from "react";
import { Dimensions, StyleSheet, Image, View } from "react-native";
import Swiper from "react-native-swiper";
const { width } = Dimensions.get("window");

export default class SwiperComponent extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Swiper
          key={2}
          loadMinimal
          autoPlay
          removeClippedSubviews={false}
          paginationStyle={styles.paginationStyle}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
        >
          <Image source={require("../../images/banner2.png")} />
          <Image source={require("../../images/banner2.png")} />
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: (width * 40) / 64,
    backgroundColor: "#ccc"
  },
  paginationStyle: {
    bottom: 8
  },
  dotStyle: {
    width: 4,
    height: 4
  },
  activeDotStyle: {
    width: 4,
    height: 4,
    backgroundColor: '#fff'
  },
  image: {
    width: width
  }
});
