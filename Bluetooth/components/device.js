import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Separator from './Separator'

const Device = ({item}) => {
  return (
    <>
      <TouchableOpacity style={styles.wrapper}>
        <View style={styles.wrapperLeft}>
          <Image style={styles.iconLeft} source={require('../icon/lan.jpg')} />
        </View>
        <View style={styles.wrapperName}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View>
          <Image style={styles.iconLeft} source={require('../icon/eng.png')} />
        </View>
      </TouchableOpacity>
      <Separator />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  wrapperLeft: {
    width: 40,
  },
  iconLeft: {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrapperName: {
    flex: 1,
    justifyContent: "flex-start"
  }
});

export default Device;
