
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
} from 'react-native';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this._sourceData,
    };
  }

  //logo
  _header = function () {
    return ();
  }
  
  //click to enter the message details page
  itemClick(item, index) {
  }
   //title
  _titleElement = ({item, index}) => {
    return ( 
    );
  }
   //article overview
  _overviewElement = ({item, index}) => {
    return ( 
    );
  }
   //message
  _MessageElement = ({item, index}) => {
    return ( 
    );
  }
  //Home message style
  _renderItem = ({item, index}) => {
    return ( 
    );
  }
  //Swipe left
  SwipeLeft = () => {
    this.setState({
    })
  }
//Swipe
  SwipeRight = () => {
    this.setState({
    })
  }

  //approve button
	Approve = () => {
    this.setState({
    })
  }

 

  //articles title
   _sourceData =  []

  render() {
    return (
      <View style={Styles.container}>
      </View>
    );
  }
};



const Styles = StyleSheet.create({
  container: {
  },
 
})
