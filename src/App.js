import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './lib/redux'
import InBoxScreen from './components/InBoxScreen'

class App extends Component {
  render() {
    return(
        <Provider store={store}>
          <InBoxScreen />
        </Provider>
    )
  }
}

export default App;
