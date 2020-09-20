import React from 'react';
import {StyleSheet, View, Text, Switch} from 'react-native';

const Toggle = ({value, onValueChange}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>ON</Text>
        <Switch
          style={styles.switch}
          value={value}
          onValueChange={onValueChange}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1
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
