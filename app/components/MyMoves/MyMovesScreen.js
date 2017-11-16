import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Button
} from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

const list = [
  {
    name: 'Step Oct31 Van'
  },
  {
    name: 'Evan Nov04 Edm'
  },
  {
    name: 'Jose Oct23 Cal'
  },
  {
    name: 'Ria Dec15 Tor'
  },
  {
    name: 'Step Oct31 Van'
  },
  {
    name: 'Evan Nov04 Edm'
  },
  {
    name: 'Jose Oct23 Cal'
  },
  {
    name: 'Ria Dec15 Tor'
  },
  {
    name: 'Step Oct31 Van'
  },
  {
    name: 'Evan Nov04 Edm'
  },
  {
    name: 'Jose Oct23 Cal'
  },
  {
    name: 'Ria Dec15 Tor'
  },
  {
    name: 'Step Oct31 Van'
  },
  {
    name: 'Evan Nov04 Edm'
  },
  {
    name: 'Jose Oct23 Cal'
  },
  {
    name: 'Ria Dec15 Tor'
  },
];

export default class App extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const {navigate} = navigation;
    return {
      title: 'My Moves',
      drawerLabel: 'Notifications',
      headerLeft: null,
      headerRight: 
        <Icon
  raised
  name='envelope'
  type='font-awesome'
  size={16}
  color='#264b7f'
  onPress={() => navigate('hello')} />, 
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
  };

  constructor() {
    super();
    this.state = {
      errors: [],
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <List containerStyle={{ marginBottom: 20 }}>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                leftIcon={
                  <Icon
                    name='truck'
                    type='font-awesome'
                    color='#a7cef7'
                  />
                }
                // leftIcon={{ name: l.icon, 
                //             color: '#264b7f', 
                //             style: { fontSize: 30 },
                //             type: 'FontAwesome' 
                //           }}
                title={l.name} 
                titleStyle={{ fontSize: 16, paddingLeft: 15, fontWeight: '500' }}
                hideChevron={true}
                onPress={() => {navigate('MoveDetail');}}
              />
            ))
          }
          </List>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1eaf6',
  },
 
});
