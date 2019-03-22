import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";

// Register Screens
Navigation.registerComponent("reactdemo1.AuthScreen", () => AuthScreen);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "reactdemo1.AuthScreen",
    title: "Login"
  }
});