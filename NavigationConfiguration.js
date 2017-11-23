import {
  Platform,
  ScrollView,
  StyleSheet
} from 'react-native';
import { 
  StackNavigator, 
  DrawerNavigator
} from 'react-navigation'; // 1.0.0-beta.17

import LoginScreen from './app/components/Login/LoginScreen';
import MyMovesScreen from './app/components/MyMoves/MyMovesScreen';
import MoveDetailScreen from './app/components/MoveDetail/MoveDetailScreen';
// import Drawer from './app/components/Drawer/Drawer'

const Drawer = DrawerNavigator({
  MyMoves: {
    screen: MyMovesScreen,
  },
  MoveDetail: {
    screen: MoveDetailScreen,
  },
});

export const MainNav = StackNavigator({
  Login: { screen: LoginScreen },
  DrawerScreen: {screen: Drawer},
}, {
  mode: 'card',
  cardStyle: {  //To avoid status bar overlapping
   paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
  },
  tintColor: '#ffffff',
});

export const MainNavReducer = (state, action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index: 0 };
  } else {
    return MainNav.router.getStateForAction(action, state);
  }
};

global.active_screen = '';
