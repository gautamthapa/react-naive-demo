import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";

// Register Screens
Navigation.registerComponent("reactdemo1.AuthScreen", () => AuthScreen);
Navigation.registerComponent("reactdemo1.SharePlaceScreen", () => SharePlaceScreen);
Navigation.registerComponent("reactdemo1.FindPlaceScreen", () => FindPlaceScreen);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "reactdemo1.AuthScreen",
    title: "Login"
  }
});