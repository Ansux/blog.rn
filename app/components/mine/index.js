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
  TouchableHighlight
} from 'react-native';

import styles from '../../style/css'

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';

export default class MovieList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      loaded: false
    }

    this.fetchData()

  }

  fetchData() {
    fetch(REQUEST_URL)
      .then(res => res.json())
      .then(resData => {
        this.setState({
          movies: this.state.movies.cloneWithRows(resData.subjects),
          loaded: true
        })
      })
      .done()
  }

  renderMovieList(movie) {
    return (
      <TouchableHighlight
        underlayColor="rgba(34,26,38,0.1)"
        onPress={()=>{
          console.log(movie)
        }}>
        <View style={styles.item}>
          <View style={styles.itemImage}>
            <Image style={styles.image} source={{uri: movie.images.large}}/>
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemHeader}>{movie.title}</Text>
            <Text style={styles.itemMeta}>{movie.original_title} ({movie.year})</Text>
            <Text style={styles.redText}>{movie.rating.average}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    if (!this.state.loaded) {
      return (
        <View style={styles.container}>
          <View style={styles.loading}>
            <Text>加载中。。</Text>
          </View>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.movies}
          renderRow={this.renderMovieList}
        />
      </View>
    );
  }
}
