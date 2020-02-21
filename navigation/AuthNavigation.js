import React from "react";
import SignUp from "../screens/Auth/SignUp";
import AuthHome from "../screens/Auth/AuthHome";
import Confirm from "../screens/Auth/Confirm";
import Login from "../screens/Auth/Login";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const Stack = createStackNavigator({
  AuthHome: AuthHome,
  SignUp: SignUp,
  Confirm: Confirm,
  Login: Login
});

export default createAppContainer(Stack);
