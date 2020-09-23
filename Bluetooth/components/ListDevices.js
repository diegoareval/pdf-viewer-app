
import React, {useState, useEffect} from 'react';
import {StyleSheet, View,Text, FlatList} from 'react-native';
import Layout from './LayoutListDevise'
import Empty from './Empty'
import Toggle from './Toggle'
import Subtitle from './Subtitle'
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import Device from './device'


const ListDevices = () => {

const [data, setLista] = useState([]);
const [enable, setEnable] = useState(true)

useEffect(() => {
 const init = async () => {
  const enabled = await BluetoothSerial.requestEnable();
  const list = await BluetoothSerial.list()
  setEnable(enabled);
  setLista(list);
 }
 init()
 return() =>{
   const remove = async () => {
     await BluetoothSerial.stopScanning();
     console.log("termino de scannear");
   }
   remove()
 }
}, [])

const disableBluetooth = async () =>{
try {
 await BluetoothSerial.disable();
 await BluetoothSerial.stopScanning();
 setLista([]);
 setEnable(false);
} catch (error) {
  console.log(error);
}
};

const enableBluetooth = async () =>{
try {
await BluetoothSerial.requestEnable();
const list = await BluetoothSerial.list();
await BluetoothSerial.stopScanning();
setLista(list)
setEnable(true)
} catch (error) {
  console.log(error);
}
}

const toggleBluetooth = (value) =>{
  if(value){
   return enableBluetooth()
  }
  disableBluetooth()
}
  const renderEmptyComponent = () => <Empty title="No hay Dispositivos"/>
  const renderItem = (item) => {
    return(
      <Device {...item}
    />
    )
  }
  return (
    <>
      <Layout title={'Bluetooth'}>
        <Toggle toggle={enable} onValueChange={toggleBluetooth} />
        <Subtitle title={'Lista de Dispositivos'} />
        <View>
          <FlatList
            data={data}
            ListEmptyComponent={renderEmptyComponent}
            renderItem={renderItem}
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
