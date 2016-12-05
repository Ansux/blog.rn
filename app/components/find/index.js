/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ListView,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import styles from '../../style/css'
import Banner from './banner'
import List from './list'

export default class MovieList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView>
        <Banner />
        <List />
      </ScrollView>
    );
  }
}
