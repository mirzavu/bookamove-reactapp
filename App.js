import {
  Platform,
  View,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.17

import LoginScreen from './app/components/Login/LoginScreen';
import DashboardScreen from './app/components/Dashboard/DashboardScreen';

const SimpleApp = StackNavigator({
  Login: { screen: LoginScreen },
  Dashboard: { screen: DashboardScreen }
}, {
  mode: 'card',
  cardStyle: {  //To avoid status bar overlapping
   paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
  },
  tintColor: '#ffffff',
  headerMode: 'screen'
});

global.active_screen = '';
export default SimpleApp;
