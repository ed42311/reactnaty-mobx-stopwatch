import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';

const TimerDisplay = ({timer, text}) => {
  return (
    <View>
      <Text>
        {text}
      </Text>
      <Text>  
        {timer.display}
      </Text>
    </View>
  );
};

const ButtonStyle = {
  fontSize: 20,
  width: 72,
  height: 72,
  margin: 24,
  padding: 0,
  letterSpacing: 1,
  outline: 'none',
  backgroundColor: 'white',
};

const Main = observer(({timerStore}) => {
  let firstButton;
  let secondButton;

  if (!timerStore.isRunning) {
    secondButton = (
      <TouchableOpacity
        style={{...ButtonStyle, color: '#4bd761'}}
        onPress={() => timerStore.startTimer()}
      >
        <Text>start</Text>
      </TouchableOpacity>
    );

    firstButton = (
      <TouchableOpacity
        style={ButtonStyle}
        onPress={() => timerStore.resetTimer()}
      >
        <Text>reset</Text>
      </TouchableOpacity>
    );

    if (!timerStore.hasStarted) {
      firstButton = null;
    }
  } else {
    secondButton = (
      <TouchableOpacity
        style={{...ButtonStyle, color: '#fd3d2a'}}
        onPress={() => timerStore.stopTimer()}
      >
        <Text>stop</Text>
      </TouchableOpacity>
    );

    firstButton = (
      <TouchableOpacity
        style={ButtonStyle}
        onPress={() => timerStore.lapTimer()}
      >
         <Text>reset</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.upperViewStyle}>
    <Text>{timerStore.mainDisplay}</Text>
      {firstButton}
      {secondButton}
      {timerStore.lapData.map((el) =>
        <TimerDisplay
          key={el.lap.id}
          timer={el.lap}
          text={el.text}
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewStyle : {
    backgroundColor: 'white',
    height: 120,
    fontSize: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  upperViewStyle : {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});

export default Main;