import React, { Component } from 'react'
import {
  WebView
} from 'react-native'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: ''
    }
  }

  componentDidMount() {
    let id = 'BN4PT7IL00014PRF',
      URL = `http://c.3g.163.com/nc/article/${id}/full.html`
    fetch(URL)
      .then((res) => res.json())
      .then((resData) => {
        this.setState({
          detail: resData[id]['body']
        })
      })
      .done()
  }

  render() {
    return (
      <WebView
        automaticallyAdjustContentInsets={true}
        source={{html: this.state.detail, baseUrl: ''}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={this.state.scalesPageToFit} />
    )
  }

}