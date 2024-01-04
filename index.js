import {setCustomText} from 'react-native-global-props'
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './Src/App';
import store from './Src/Component/Redux/Store/Store';
import { name as appName } from './app.json';
const customTextProps = {
  style: {
    fontFamily: 'normal',
     
  },
};
setCustomText(customTextProps);
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
