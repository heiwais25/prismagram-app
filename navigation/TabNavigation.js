import React from "react";
import Home from "../screens/Tabs/Home";
import { View } from "react-native";
import Search from "../screens/Tabs/Search";
import Notification from "../screens/Tabs/Notification";
import Profile from "../screens/Tabs/Profile";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import MessagesLink from "../components/MessagesLink";

const stackFactory = (initialRoute, customConfig) =>
  createStackNavigator({
    InitialRoute: {
      screen: initialRoute,
      navigationOptions: { ...customConfig }
    }
  });

export default createBottomTabNavigator(
  {
    Home: {
      screen: stackFactory(Home, {
        title: "Home",
        headerRight: () => <MessagesLink />
      })
    },
    Search: stackFactory(Search, { title: "Search" }),
    Add: View,
    Notification: stackFactory(Notification, { title: "Notification" }),
    Profile: stackFactory(Profile, { title: "Profile" })
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        if (navigation.state.routeName === "Add") {
          navigation.navigate("PhotoNavigation");
        } else {
          defaultHandler();
        }
      }
    })
  }
);
