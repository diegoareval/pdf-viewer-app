import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Separator = ({title}) => {
  return (
    <>
      <View style={styles.separator}/>
    </>
  );
};

const styles = StyleSheet.create({
  separator:{
    flex: 1,
    borderTopWidth: 1,
    marginLeft: 60,
    marginRight: 25,
    borderColor: '#eceff1'

  }
});

export default Separator;
