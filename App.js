import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TimerStore } from './TimerStore';
import Main from './Main';

const timerStore = new TimerStore();

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Main
          timerStore={timerStore}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
