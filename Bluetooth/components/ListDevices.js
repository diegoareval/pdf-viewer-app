
import React from 'react';
import {StyleSheet, View,Text, FlatList} from 'react-native';
import Layout from './LayoutListDevise'
import Empty from './Empty'
import Toggle from './Toggle'
import Subtitle from './Subtitle'
import BluetoothSerial from 'react-native-bluetooth-serial-next';


const ListDevices = () => {
  const data = [
    {
      devise: 'stk',
      key: 1,
    },
    {
      devise: 'stk-1',
      key: 2,
    },
  ];
  const renderEmptyComponent = () => <Empty title="No hay Dispositivos Habilitados"/>
  return (
    <>
      <Layout title={'Bluetooth'}>
      <Toggle/>/
      <Subtitle title={"Lista de Dispositivos"}/>
        <View>
          <FlatList
            data={data}
            ListEmptyComponent={renderEmptyComponent}
            renderItem={({item}) => {
              return (
                <View>
                  <Text style={styles.item}>{item.devise}</Text>
                </View>
              );
            }}
          />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
item:{
  fontSize: 20
}
});

export default ListDevices;
