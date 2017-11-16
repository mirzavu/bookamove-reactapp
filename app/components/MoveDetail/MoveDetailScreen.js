import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import { Icon, Divider,  List, ListItem, Button } from 'react-native-elements';
import styles from "./styles";

const window = Dimensions.get('window');

const list = [
      {
        from: 'Customer',
        message: 'Contact Stage Book - Contact Stage Book'
      },
      {
        from: 'Operator',
        message: 'Contact Stage Lead - Contact Stage Lead'
      },
      {
        from: 'Customer',
        message: 'Contact Stage Book - Contact Stage Book'
      },
      {
        from: 'Operator',
        message: 'Contact Stage Lead - Contact Stage Lead'
      },
      {
        from: 'Customer',
        message: 'Contact Stage Book - Contact Stage Book'
      },
      {
        from: 'Operator',
        message: 'Contact Stage Lead - Contact Stage Lead'
      },
      {
        from: 'Operator',
        message: 'Contact Stage Lead - Contact Stage Lead'
      },
      {
        from: 'Customer',
        message: 'Contact Stage Book - Contact Stage Book'
      },
      {
        from: 'Operator',
        message: 'Contact Stage Lead - Contact Stage Lead'
      },
      {
        from: 'Customer',
        message: 'Contact Stage Book - Contact Stage Book'
      },
      {
        from: 'Operator',
        message: 'Contact Stage Lead - Contact Stage Lead'
      },
    ]

export default class App extends React.Component {

  static navigationOptions = {
    title: 'Move Detail',
    headerTintColor: 'white',
    headerTitleStyle: {
      color: 'white',
      fontWeight: '700',
      alignSelf: 'center'
    },
    headerStyle: {
      backgroundColor: '#264b7f',
      shadowOpacity: 0,
    },
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Text>sdfdf</Text>
    ),
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
      <View style={{flex:1}}>
        <ScrollView>
        <View style={styles.container}>
          <View style={styles.rows}>
            <View style={styles.row}>
              <View style={styles.cell}>
                <View><Icon
                  name='user'
                  type='font-awesome'
                  color='#234885'
                  size={20}
                /></View>
                <Text style={styles.label}>  WHO</Text>
              </View>
              
              <Text style={styles.value}> JOHN</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.row}>
              <View style={styles.cell}>
                <View><Icon
                  name='suitcase'
                  type='font-awesome'
                  color='#234885'
                  size={20}
                /></View>
                <Text style={styles.label}> WHAT</Text>
              </View>
              
              <Text style={styles.value}> 1BDRM</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.row}>
              <View style={styles.cell}>
                <View><Icon
                  name='location-arrow'
                  type='font-awesome'
                  color='#234885'
                  size={20}
                /></View>
                <Text style={styles.label}>  WHERE</Text>
              </View>
              
              <Text style={styles.value}> CAL</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.row}>
              <View style={styles.cell}>
                <View><Icon
                  name='clock-o'
                  type='font-awesome'
                  color='#234885'
                  size={20}
                /></View>
                <Text style={styles.label}>  WHEN</Text>
              </View>
              
              <Text style={styles.value}> 31/11/17</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.row}>
              <View style={styles.cell}>
                <View><Icon
                  name='truck'
                  type='font-awesome'
                  color='#234885'
                  size={20}
                /></View>
                <Text style={styles.label}>  HOW</Text>
              </View>
              
              <Text style={styles.value}> TRUCK</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.row}>
              <View style={styles.cell}>
                <View><Icon
                  name='dollar'
                  type='font-awesome'
                  color='#234885'
                  size={20}
                /></View>
                <Text style={styles.label}>  HOW MUCH</Text>
              </View>
              
              <Text style={styles.value}> 1000</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.row}>
              <View style={styles.cell}>
                <View><Icon
                  name='address-card'
                  type='font-awesome'
                  color='#234885'
                  size={20}
                /></View>
                <Text style={styles.label}>  CONTACT LOG</Text>
              </View>
            </View>
            <ScrollView>
            <List>
              {
                list.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.from}
                    subtitle={item.message}
                    leftIcon={{name: 'message'}}
                  />
                ))
              }
            </List>
            </ScrollView>
          </View>
          
        </View>
        </ScrollView>
      <View style={{flex:1,position:'absolute',bottom: 0,right:0,left:0,flexDirection: 'row', justifyContent: 'space-between',}}>
          <Button style={{}} 
          // containerViewStyle={{padding: 10}}
          title='A' />
          <Button style={{flex:1}}
            buttonStyle={{ }} 
            title='COMPOSE' />
          <Button style={{}} title='C' />

      </View>
      </View>
    );
  }
}
