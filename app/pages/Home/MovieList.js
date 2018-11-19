import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.fetchData(this.props.type);
  }

  fetchData(type) {
    fetch("http://localhost:8081/app/jsons/" + type + ".json")
      .then(res => res.json())
      .then(data => {
        data.data.returnValue.push({});
        this.setState({
          list: data.data.returnValue
        });
      });
  }

  /**
   * 创建电影列表
   * @param item FlatList中的参数
   */
  renderMovie({ item }) {
    let showMark,
      ImageBox,
      elseBox,
      data = item.scoreAndFavor;

    // 标记
    if (item.showMark) {
      showMark = (
        <View style={styles.showMark}>
          <Text style={styles.showMarkText}>{item.showMark}</Text>
        </View>
      );
    }

    // 图片
    ImageBox = item.poster ? (
      <Image style={{ width: 80, height: 117 }} source={{ uri: item.poster }} />
    ) : (
      <Text style={{ fontSize: 10, color: "#777" }}>查看全部</Text>
    );

    // 其他
    if (data) {
      elseBox =
        this.props.type === "hotMovie" ? (
          <View style={[styles.buyBtn, {backgroundColor: data.score.scoreType == 1 ? "#ff4d64" : "#349cec"}]}>
            <Text style={{fontSize: 10, color: "#fff"}}>{data.score.scoreType == 1 ? "购票" : "预售"}</Text>
          </View>
        ) : (
          <Text style={{ fontSize: 10, color: "#777", paddingLeft: 2 }}>
            {item.openTime}
          </Text>
        );
    }

    return (
      <TouchableOpacity activeOpacity={1} style={{ marginRight: 10 }}>
        {showMark}
        <View style={styles.ImageBox}>{ImageBox}</View>
        <View style={data ? styles.score : ""}>
          <Text style={{ fontSize: 8, color: "#fea54c" }}>
            {data
              ? data.score.scoreType == 1
                ? `${data.score.scoreName}' '${data.score.score}`
                : data.favorCountDesc
              : ""}
          </Text>
        </View>
        <Text
          style={{ width: 80, paddingLeft: 2, lineHeight: 26, fontSize: 12 }}
          numberOfLines={1}
        >
          {item.showName}
        </Text>
        {elseBox}
      </TouchableOpacity>
    );
  }

  render() {
    let { list } = this.state;

    return (
      <View style={styles.MovieList}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {this.props.type === "hotMovie" ? "热映影片" : "即将上映"}
          </Text>
          <Text style={styles.all}>
            全部
            <Icon name="chevron-right" />
          </Text>
        </View>
        <FlatList
          data={list}
          keyExtractor={(item, index) => "" + item.id + index}
          renderItem={this.renderMovie.bind(this)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.borderBottom} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MovieList: {},
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 36
  },
  showMark: {
    position: "absolute",
    top: 4,
    left: 4,
    zIndex: 10,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: "#fff",
    borderRadius: 2
  },
  showMarkText: {
    fontSize: 8,
    lineHeight: 12,
    color: "#333"
  },
  title: {
    flex: 1,
    fontSize: 14
  },
  all: {
    fontSize: 10,
    color: "#777"
  },
  ImageBox: {
    flex: 1,
    maxHeight: 117,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
    borderRadius: 2
  },
  Image: {
    borderRadius: 2
  },
  score: {
    position: "absolute",
    top: 100,
    zIndex: 10,
    width: 80,
    paddingLeft: 4,
    paddingBottom: 4,
    paddingTop: 4,
    backgroundColor: "rgba(0,0,0,.6)"
  },
  buyBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 20,
    borderRadius: 10
  },
  borderBottom: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  }
});
