/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Alert, AlertAndroid, ImageSourcePropType, TextBase, TextInput} from 'react-native';
import images from './images'

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

      <View onTouchEnd={this.moow} style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text>{this.state.text}</Text>

        <Image style={{height: 150, width: 150}} source={images.cat} />
        <Image style={{height: 150, width: 150}} source={images.cats} />
        <TextInput ref="input" onChangeText={this.updateText} /> 
      </View>

    );
  }

  moow = () => {
    // Alert.alert("Moow");
  }
  updateText = (text: string) => {
    this.text = text
    console.log(text)
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
});