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
  ScrollView,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import css from '../../style/css'
import banner from '../../assets/json/banner'

export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
      title: banner[0].title
    }
  }

  renderItems() {
    let imgArr = []
    const imgW = Dimensions.get('window').width,
      imgH = imgW * 0.467005076142132
    banner.forEach(function(v, k){
      imgArr.push(
        <Image style={{height: imgH, width: imgW}} key={k} source={{uri: v.url}} />
      )
    })  
    return imgArr
  }

  renderFocusCircle() {
    let i=0,
      circleArr = [],
      style = {}
    for(; i < banner.length; i++) {
      style = (i === this.state.currentPage) ? {color: '#f30'} : {color: '#eee'}
      circleArr.push(
        <Text key={i} style={[{fontSize: 25}, style]}>&bull;</Text>
      )
    }
    return circleArr
  }

  onAnimationEnd(e) {
    let offsetX = e.nativeEvent.contentOffset.x,
      currentPage = Math.floor(offsetX / Dimensions.get('window').width)
    this.setState({
      currentPage: currentPage,
      title: banner[currentPage].title
    })
  }
  onScrollBeginDrag() {

  }
  onScrollEndDrag() {

  }

  render() {
    return (
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
          onScrollBeginDrag={this.onScrollBeginDrag}
          onScrollEndDrag={this.onScrollEndDrag} >
          {this.renderItems()}
        </ScrollView>
        <View style={css.bannderCircle}>
          <Text style={{color: '#fff', fontSize: 12}}>{this.state.title}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {this.renderFocusCircle()}
          </View>
        </View>
      </View>
    );
  }
}
