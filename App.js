import {
  Platform,
  ScrollView,
  StyleSheet
} from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation'; // 1.0.0-beta.17

import LoginScreen from './app/components/Login/LoginScreen';
import MyMovesScreen from './app/components/MyMoves/MyMovesScreen';
import MoveDetailScreen from './app/components/MoveDetail/MoveDetailScreen';

const Drawer = DrawerNavigator({
  MyMoves: {
    screen: MyMovesScreen,
  },
  MoveDetail: {
    screen: MoveDetailScreen,
  },
});

const SimpleApp = StackNavigator({
  Login: { screen: LoginScreen },
  DrawerScreen: {screen: Drawer},
}, {
  mode: 'card',
  cardStyle: {  //To avoid status bar overlapping
   paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
  },
  tintColor: '#ffffff',
});


global.active_screen = '';
export default SimpleApp;
