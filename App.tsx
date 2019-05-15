/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component, useReducer} from 'react';
import {Platform, StyleSheet, Text, View, Image, Alert, AlertAndroid, ImageSourcePropType, TextBase, TextInput} from 'react-native';
import images from './images'
import Row from './components/layout/Row';
import Col from './components/layout/Col';

interface Props {}
interface State { text: string}
export default class App extends Component<Props,State> {

  private text :string;

  constructor(props: Props){
    super(props)
    this.state = {
      text: ""
    }
  

  }
  render() {
    return (

      <View  style={styles.container}>
        <Row size={5} style={styles.white}>
      
        </Row>
        <Row size={10} style={styles.dark}>
          <Col size={9}></Col>
          <Col size={3} style={styles.grey}></Col>
          <Col style={styles.green}></Col>
        </Row>
      </View>

    );
  }

  moow = () => {
    Alert.alert("Moow");
  }
  updateText = (text: string) => {
    this.text = text
    console.log(text)
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  white:{
    backgroundColor: "#FFFDFF"
  },
  dark:{
    backgroundColor: "#3E3C3E"
  },
  grey:{
    backgroundColor: "#585958"
  },
  green:{
    backgroundColor: "#61DDAF"
  },
});