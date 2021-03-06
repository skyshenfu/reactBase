/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider}from 'react-redux'
import store from './store/configstore'
import Launcher from './component/Launcher'
import {AppRegistry} from 'react-native';
class demo0510 extends Component {
  render() {
    return (
       //建立各个组件简单通讯关系
      <Provider store={store}>
          <Launcher/>
        </Provider>
    );
  }
}

AppRegistry.registerComponent('demo0510', () =>demo0510 );
