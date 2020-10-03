import React, {useContext} from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import GlobalContext from '../GlobalContext/globalcontext'

const Layout = ({children}) => {
  const {page,horizontal, scale, prePage, nextPage, zoomOut, zoomIn, switchHorizontal} = useContext(GlobalContext);

  return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight
            disabled={page === 1}
            style={page === 1 ? styles.btnDisable : styles.btn}
            onPress={() => prePage()}>
            <Text style={styles.btnText}>{'-'}</Text>
          </TouchableHighlight>
          <View style={styles.btnText}>
            <Text style={styles.btnText}>Page</Text>
          </View>
          <TouchableHighlight
            disabled={page === numberOfPages}
            style={page === numberOfPages ? styles.btnDisable : styles.btn}
            onPress={() => nextPage()}>
            <Text style={styles.btnText}>{'+'}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            disabled={scale === 1}
            style={scale === 1 ? styles.btnDisable : styles.btn}
            onPress={() => zoomOut()}>
            <Text style={styles.btnText}>{'-'}</Text>
          </TouchableHighlight>
          <View style={styles.btnText}>
            <Text style={styles.btnText}>Scale</Text>
          </View>
          <TouchableHighlight
            disabled={scale >= 3}
            style={scale >= 3 ? styles.btnDisable : styles.btn}
            onPress={() => zoomIn()}>
            <Text style={styles.btnText}>{'+'}</Text>
          </TouchableHighlight>
          <View style={styles.btnText}>
            <Text style={styles.btnText}>{'Horizontal:'}</Text>
          </View>
          <TouchableHighlight
            style={styles.btn}
            onPress={() => switchHorizontal()}>
            {!horizontal ? (
              <Text style={styles.btnText}>{'false'}</Text>
            ) : (
              <Text style={styles.btnText}>{'true'}</Text>
            )}
          </TouchableHighlight>
        </View>
        {children}
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  btn: {
    margin: 2,
    padding: 2,
    backgroundColor: 'aqua',
  },
  btnDisable: {
    margin: 2,
    padding: 2,
    backgroundColor: 'gray',
  },
  btnText: {
    margin: 2,
    padding: 2,
  },
});

export default Layout;
