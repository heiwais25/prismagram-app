import React from "react";
import SignUp from "../screens/Auth/SignUp";
import AuthHome from "../screens/Auth/AuthHome";
import Confirm from "../screens/Auth/Confirm";
import Login from "../screens/Auth/Login";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const Stack = createStackNavigator(
  {
    SignUp: SignUp,
    Login: Login,
    Confirm: Confirm,
    AuthHome: AuthHome
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(Stack);
