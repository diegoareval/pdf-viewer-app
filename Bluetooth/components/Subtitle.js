import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Subtitle = ({title}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.line}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "gray"
  },
  line:{
    borderBottomWidth: 1,
    width: 50,
    marginLeft: 5,
    flex: 1,
    marginTop: 3,
borderColor: '#ECEFF1'  },
  container:{
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center"
  }
});

export default Subtitle;
