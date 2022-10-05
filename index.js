/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});
LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
    "Require cycle:",
]);

AppRegistry.registerComponent(appName, () => App);
