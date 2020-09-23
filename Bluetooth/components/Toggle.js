import React from 'react';
import {StyleSheet, View, Text, Switch} from 'react-native';

const Toggle = ({toggle, onValueChange}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{!toggle?'OFF':'ON'}</Text>
        <Switch
          style={styles.switch}
          value={toggle}
          onValueChange={() => {
            onValueChange(!toggle)
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10
  },
  container: {
    paddingVertical: 15, 
    flexDirection: "row"
  },
  switch:{
    width: 50
  }
});

export default Toggle;
