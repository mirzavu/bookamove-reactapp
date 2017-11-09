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
import { Icon, Divider } from 'react-native-elements';
import styles from "./styles";

const window = Dimensions.get('window');

export default class App extends React.Component {

  static navigationOptions = {
    title: 'Move Detail',
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
    }
  }

  onPressGo = () => {
    const {navigate} = this.props.navigation;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rows}>
          <View style={styles.row}>
            <View style={styles.cell}>
              <View><Icon
                name='user'
                type='font-awesome'
                color='#234885'
                size={28}
              /></View>
              <Text style={styles.label}> WHO</Text>
            </View>
            
            <Text style={styles.value}> JOHN</Text>
          </View>
          <Divider style={{ backgroundColor: '#264b7f', marginVertical: 8  }} />
          <View style={styles.row}>
            <View style={styles.cell}>
              <View><Icon
                name='user'
                type='font-awesome'
                color='#234885'
                size={28}
              /></View>
              <Text style={styles.label}> WHAT</Text>
            </View>
            
            <Text style={styles.value}> 1BDRM</Text>
          </View>
          <Divider style={{ backgroundColor: '#264b7f', marginVertical: 8  }} />
          <View style={styles.row}>
            <View style={styles.cell}>
              <View><Icon
                name='user'
                type='font-awesome'
                color='#234885'
                size={28}
              /></View>
              <Text style={styles.label}> WHERE</Text>
            </View>
            
            <Text style={styles.value}> CAL</Text>
          </View>
        </View>
        <TouchableOpacity onPress={this.onPressGo} style={styles.goButton}>
          <Text style={styles.goButtonText}>{'Acceptance'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
