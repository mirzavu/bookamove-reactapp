import React from 'react'
// Redux
import { Provider } from 'react-redux'
import store from './app/store'
// Navigation
import MainNavigation from './Navigation'
class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    )
  }
}
export default App;
