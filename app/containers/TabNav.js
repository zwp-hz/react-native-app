import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import Home from "../pages/Home/Home";
import Movie from "../pages/Movie/Movie";
import Video from "../pages/Video/Video";
import Show from "../pages/Show/Show";
import Personal from "../pages/Personal/Personal";
import Icon from "react-native-vector-icons/Feather";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "首页",
        showLabel: false,
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"home"} size={24} style={{ color: tintColor }} />
        )
      }
    },
    Movie: {
      screen: Movie,
      navigationOptions: {
        tabBarLabel: "电影",
        showLabel: false,
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"film"} size={24} style={{ color: tintColor }} />
        )
      }
    },
    Video: {
      screen: Video,
      navigationOptions: {
        tabBarLabel: "淘气视频",
        showLabel: false,
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"video"} size={24} style={{ color: tintColor }} />
        )
      }
    },
    Show: {
      screen: Show,
      navigationOptions: {
        tabBarLabel: "演出",
        showLabel: false,
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"tv"} size={24} style={{ color: tintColor }} />
        )
      }
    },
    Personal: {
      screen: Personal,
      navigationOptions: {
        tabBarLabel: "我的",
        showLabel: false,
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"user"} size={24} style={{ color: tintColor }} />
        )
      }
    }
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      showLabel: true,
      activeTintColor: "#ff4d64",
      inactiveTintColor: "#777",
      style: {
        paddingTop: 5,
        backgroundColor: "#fff"
      }
    }
  }
);

export default TabNavigator;
