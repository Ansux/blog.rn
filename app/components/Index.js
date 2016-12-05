/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  Navigator
} from 'react-native';

import icons from '../assets/icons'
import TabNavigator from 'react-native-tab-navigator'
import Find from '../components/find/index'
import Focus from '../components/focus/index'
import Message from '../components/message/index'
import Mine from '../components/mine/index'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'find'
    }
  }

  renderTabBarItem(title, selectedTab, icon, Component) {
    return (
      <TabNavigator.Item
        title={title}
        selected={this.state.selectedTab === selectedTab}
        onPress={() => { this.setState({selectedTab: selectedTab}) }}
        renderIcon={()=><Image style={{width:20,height:20}} source={{uri: icon}} />} >
        <Find {...this.props}/>
      </TabNavigator.Item>
    )
  }

  render() {
    return (
      <TabNavigator>
        {this.renderTabBarItem('发现', 'find', icons.find, Find)}
        {this.renderTabBarItem('关注', 'focus', icons.focus, Focus)}
        {this.renderTabBarItem('消息', 'message', icons.message, Message)}
        {this.renderTabBarItem('我的', 'mine', icons.mine, Mine)}
      </TabNavigator>
    )
  }
}