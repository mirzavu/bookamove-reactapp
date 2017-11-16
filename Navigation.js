
import React from 'react';

// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { MainNav } from './NavigationConfiguration';

//Redux
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
 return {
  navigationState: state.nav,
  };
};

class MainNavigation extends React.Component {

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
