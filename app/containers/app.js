import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import TabNavigator from "../containers/TabNav";
import CitySelect from "../pages/Modal/CitySelect";

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTitleStyle: {
        color: "#fff",
        fontSize: 20
      },
      headerTintColor: "#000"
    }
  }
);

const RootNavigator = createStackNavigator(
  {
    Main: {
      screen: MainNavigator
    },
    CitySelect: {
      screen: CitySelect
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default RootNavigator;
