import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Empty = ({title}) => {
  return (
    <>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Empty;
