/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Index from './app/components/Index'
import Demo from './app/components/demo/test'

export default class douban extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Demo />
    )
  }
}

AppRegistry.registerComponent('douban', () => douban);
