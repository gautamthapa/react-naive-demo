import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "reactdemo1.AuthScreen",
 () => AuthScreen,
 store,
 Provider
 );
Navigation.registerComponent(
  "reactdemo1.SharePlaceScreen",
 () => SharePlaceScreen,
 store,
 Provider
 );
Navigation.registerComponent(
  "reactdemo1.FindPlaceScreen",
 () => FindPlaceScreen,
 store,
 Provider
 );

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "reactdemo1.AuthScreen",
    title: "Login"
  }
});