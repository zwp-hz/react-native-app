import React from "react";
import { Button } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class NavButton extends React.Component {
  render() {
    return (
      <Icon
        onPress={() => this.props.navigation.navigate("Modal")}
        name="md-search"
        size={24}
      />
      // <Button
      //   onPress={() => this.props.navigation.navigate("Modal")}
      //   title={this.props.title}
      //   color="#fff"
      // />
    );
  }
}

export default NavButton;
