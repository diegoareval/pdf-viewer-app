import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Empty = ({title}) => {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../icon/no.png')} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
   width: 200,
   height: 200,
   marginVertical: 20
  },
  container:{
    alignItems: 'center'
  }
});

export default Empty;
