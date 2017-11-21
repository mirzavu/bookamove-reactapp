
import React from 'react';
import { BackHandler } from "react-native";
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { MainNav } from './NavigationConfiguration';

//Redux
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
 return {
  navigationState: state.nav,
  };
};

class MainNavigation extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, navigationState } = this.props;
    console.log(navigationState);
    if (navigationState.index === 0) {
      BackHandler.exitApp();
    }
    dispatch(NavigationActions.back());
    return true;
  };
  render() {
    const { dispatch, navigationState } = this.props
    return (
      <MainNav
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
    );
  }
}

export default connect(mapStateToProps)(MainNavigation)
