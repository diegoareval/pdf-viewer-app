import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import Layout from './Layout'
import Button from './shared/button'
import lantern from 'react-native-lantern';

const Lantern = () => {
const [isDisabled, setDisabled] = useState(true);
const [isTurnOn, setTurnState] = useState(false);

useEffect(() => {
  // call on change turn state (fire on subscribe, return current turn state)
  const unsubscribe = lantern.subscribe('onTurn', (event) =>
    setTurnState(event.value),
  );
  return unsubscribe;
}, []);

useEffect(() => {
  (async () => {
    // initialize module
    await lantern.ready();
    setDisabled(false);
  })();
}, []);

const onPress = useCallback(async () => {
  if (isTurnOn) {
    await lantern.turnOff();
  } else {
    await lantern.turnOn();
  }
  // or `await lantern.turn(!isTurnOn)`
}, [isTurnOn]);

  const disableImage = require('./icons/off3.jpg')
  const enableImage = require('./icons/linterna.jpg');

  return (
    <Layout title="Linterna">
      <View style={styles.container}>
        <Button
          image={isTurnOn ? enableImage : disableImage}
          onPress={onPress}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: "gray",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Lantern;
