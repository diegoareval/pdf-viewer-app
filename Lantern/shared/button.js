import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Button = ({image, onPress}) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={onPress}>
        <View style={{width: "70%", height: "100%"}}>
          <Image source={image} style={styles.image} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  image: {
    flex: 1,
   
  },
});

export default Button;
