import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import gameOptions from './constants'

import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Selection from './Selection';
import Clock from './Clock';

const Stack = createNativeStackNavigator();

export default function App() {
  const GameOption = ({go}) => (
    <View style={styles.gameOption}>
      <Text style={styles.text}>{go.text}</Text>
    </View>
  )


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Selection" component={Selection} />
        <Stack.Screen name="Clock" component={Clock} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  list: {
    flex: 1,

    margin: 20,
    width: '85%',
    backgroundColor: 'yellow'
  },
  text: {
    color: 'orange',
  },
  gameOption: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    margin: 5,
    borderWidth: 5,
    borderColor: 'blue',
    backgroundColor: 'grey',
  }
});
