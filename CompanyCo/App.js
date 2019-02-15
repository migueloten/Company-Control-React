import React, { Component } from 'react';
import {
  Modal,
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  Dimensions,
  TextInput
} from 'react-native';

class Inputs extends Component {
   state = {
      usernamelogin: '',
      passwordlogin: ''
   }
   handleUsernamelogin = (text) => {
      this.setState({ usernamelogin: (text) })
   }
   handlePasswordlogin = (text) => {
      this.setState({ passwordlogin: (text) })
   }
   login = (usernamelogin, passwordlogin) => {
      alert('username: ' + usernamelogin + ' password: ' + passwordlogin)
   }
 }

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const resp = 0;

class Example extends Component {
  constructor() {
    super();
    this.state = {
      visibility: false,
  };
 }

 componentDidMount(){
   fetch('http://69.55.59.66/indexapi/login')
       .then(resposta => resposta.json())
       .then(json => this.setState({resp: json}));
 }

 setModalVisibility(visible) {
   this.setState({
     visibility: visible,
    });
 }

 render() {
   return (
     <View style={styles.mainContainer}>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.state.visibility}
      >
    <View style={styles.modalContainer}>
      <View>
      <Image source = {require('./resources/images/logo.png')}
        style = {{ width: width, height: 200 }}/>
      <Text style={styles.log}>Personal data</Text>
      <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Name"
          placeholderTextColor = "black"
          onChangeText = {this.handleUsername}/>
      <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Username"
          placeholderTextColor = "black"
          autoCapitalize = "none"
          onChangeText = {this.handlePassword}/>
      <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "e-mail"
          placeholderTextColor = "black"
          autoCapitalize = "none"
          onChangeText = {this.handleUsername}/>
      <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Password"
          placeholderTextColor = "black"
          autoCapitalize = "none"
          onChangeText = {this.handlePassword}/>

      <Button
          onPress = {() => this.login(this.state.username, this.state.password)}
          title="Register"
          color="black"/>
      <Button
          color="black"
          onPress={() => this.setModalVisibility(!this.state.visibility)}
          title="Already have an account"/>
          </View>
        </View>
      </Modal>
      <Image source = {require('./resources/images/logo.png')}
        style = {{ width: width, height: 200 }}/>
        <Text style={styles.log}>Login</Text>
      <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "username"
        placeholderTextColor = "black"
        autoCapitalize = "none"
        onChangeText = {this.handleUsernamelogin}/>
      <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Password"
        placeholderTextColor = "black"
        autoCapitalize = "none"
        onChangeText = {this.handlePasswordlogin}/>
      <Button
        onPress = {() => this.login(this.state.usernamelogin, this.state.passwordlogin)}
        title="Log In"
        color="black"/>
      <Text></Text>
      <Button
        color="black"
        onPress={() => this.setModalVisibility(true)}
        title="New Here? Create Your Account"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
      marginTop: 22,
  },
  modalContainer: {
    marginTop: 22,
  },
  container: {
    marginTop: 20
  },
  log: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
    fontSize: width/8,
    justifyContent: 'space-between'
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'black',
    borderWidth: 1
   },
   submitButton: {
    backgroundColor: 'black',
    padding: 10,
    margin: 15,
    height: 40,
   },
   submitButtonText:{
    color: 'white'
   }
});


export default Example;
