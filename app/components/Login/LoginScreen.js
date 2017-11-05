import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
  TouchableOpacity,
  Keyboard,
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';

const window = Dimensions.get('window');

export default class App extends React.Component {

  static navigationOptions = {
    title: 'Login',
    headerLeft: null,
    headerTitleStyle: {
      alignSelf: 'center'
    },
    headerTitleStyle: {
      color: 'white',
      fontWeight: '700',
      justifyContent: 'space-between',
      alignSelf: 'center'
    },
    headerStyle: {
      backgroundColor: '#264b7f',
      shadowOpacity: 0,
    }
  };

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: [],
    }
  }

  onPressGo = () => {
    const {navigate} = this.props.navigation;
    navigate('Dashboard');
  }

  render() {
    return (
      <KeyboardAvoidingView behaviour="padding" style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={{width: 290, height: 54}}
            source={require('../../images/logo.png')}
          />
        </View>
        <View>
          <TextInput
            autoCorrect={false}
            autoFocus={false}
            placeholder={'Enter Email'}
            style={styles.textInput}
            onChangeText={(text) => this.setState({['email']: text})}
            value={this.state['email']}
            underlineColorAndroid='transparent'
            placeholderTextColor={'#777'}
            containerStyle={styles.textContainer}
          />
          <Text style={styles.textError}>{this.state.errors['email']}</Text>
        </View>
        <View>
          <TextInput
            autoCorrect={false}
            autoFocus={false}
            placeholder={'Enter Password'}
           style={styles.textInput}
            onChangeText={(text) => this.setState({['password']: text})}
            value={this.state['password']}
            underlineColorAndroid='transparent'
            placeholderTextColor={'#777'}
            secureTextEntry={true}
          />
          <Text style={styles.textError}>{this.state.errors['password']}</Text>
        </View>
        <TouchableOpacity onPress={this.onPressGo} style={styles.goButton}>
          <Text style={styles.goButtonText}>{'Login'}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1eaf6',
    padding: 35
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    marginBottom: 30
  },
  textInput: {
    width: 0.8 * window.width,
    height: 50,
    marginTop: 20,
    fontSize: 20,
    borderColor: '#264b7f',
    borderWidth: 2,
    borderRadius: 3,
    textAlign: 'center',
    color: '#264b7f',
    marginTop: 20,
    padding: 5,
    backgroundColor: 'white',
  },
  textError: {
    color: 'red'
  },
  goButton: {
    width: 0.8 * window.width,
    backgroundColor: '#264b7f',
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  goButtonText: {
    color: 'white',
    fontSize: 20,
  }
});
  