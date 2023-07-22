import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import gameOptions from './constants'

import { NavigationContainer } from '@react-navigation/native';



export default function Selection({navigation}) {
  const GameOption = ({go}) => (
    <View style={styles.gameOption} >
      <Text onPress={() => navigation.navigate('Clock', {value: go.text})} style={styles.text}>{go.text}</Text>
    </View>
  )


  return (
    <View style={styles.container}>
      <FlatList
      style={styles.list}
        data={gameOptions}
        renderItem={({ item }) => (
          <GameOption go={item}/>
        )}
        numColumns={3}
        keyExtractor={(item, index) => index}
      />
    </View>
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
