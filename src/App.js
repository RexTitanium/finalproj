import React, {Component} from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {configureStore} from './redux/configureStore';
import './fonts/Azonix.woff';
import './fonts/Adam-Bold.ttf'

const Store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
        
    );
  }
}

export default App;
