import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import PlayScreen from './src/components/PlayScreen'

export default function App() {
  const [isPlay,setIsPlay] = useState(false);
  return ( isPlay ?
        <PlayScreen /> :
        <View style={styles.container}>
          <Text style={styles.header}>Rock Paper Scissors</Text>
          <Text style={{fontSize:65}}>✊ ✋ ✌️ </Text>
          <View style={styles.button}>
            <Button style={styles.header} onPress={() => setIsPlay(!isPlay)} title="Play" /> 
          </View>
          <StatusBar style="auto" />
        </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
  }
});
