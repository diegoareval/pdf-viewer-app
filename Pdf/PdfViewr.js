import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Dimensions,
    SafeAreaView,
    View,
    Text
} from 'react-native';
import {configOrientation} from './helper/helper'
import Pdf from 'react-native-pdf';
import Orientation from 'react-native-orientation-locker';
import {source} from './consts/urls'
const WIN_WIDTH = Dimensions.get('window').width;
const WIN_HEIGHT = Dimensions.get('window').height;


const PDF =() => {
  const [page, setPage] = useState(1)
  const [scale, setScale] = useState(1)
  const [numberOfPages, setnumberOfPages] = useState(0)
  const [horizontal, setHorizontal] = useState(false)
  const [width, setWidth] = useState(WIN_WIDTH)

  const  pdf = null;


    const onOrientationDidChange = (orientation) => {
      const {horizonta, widt} = configOrientation(orientation, WIN_HEIGHT, WIN_WIDTH);
            setWidth(widt);
          setHorizontal(horizonta);
    };
    

    useEffect(() => {
       Orientation.addOrientationListener(onOrientationDidChange);
      return () => {
                Orientation.removeOrientationListener(onOrientationDidChange);
      };
    }, [])

   const  prePage = () => {
        let prePage = page > 1 ? page - 1 : 1;

        pdf.setPage(prePage);
        console.log(`prePage: ${prePage}`);
    };

    const nextPage = () => {
        let nextPage = page + 1 > numberOfPages ? numberOfPages : page + 1;
        pdf.setPage(nextPage);
        console.log(`nextPage: ${nextPage}`);
    };

   const zoomOut = () => {
        let scale = scale > 1 ? scale / 1.2 : 1;
        setScale(sacale)
        console.log(`zoomOut scale: ${scale}`);
    };

    const zoomIn = () => {
        let scale = scale * 1.2;
        scale = scale > 3 ? 3 : scale;
        setScale(sacale)
        console.log(`zoomIn scale: ${scale}`);
    };

    const switchHorizontal = () => {
      setHorizontal(!horizontal)
      setPage(page)
    };
        return (
            <SafeAreaView style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableHighlight disabled={page === 1}
                                        style={page === 1 ? styles.btnDisable : styles.btn}
                                        onPress={() => prePage()}>
                        <Text style={styles.btnText}>{'-'}</Text>
                    </TouchableHighlight>
                    <View style={styles.btnText}><Text style={styles.btnText}>Page</Text></View>
                    <TouchableHighlight disabled={page === numberOfPages}
                                        style={page === numberOfPages ? styles.btnDisable : styles.btn}
                                        onPress={() => nextPage()}>
                        <Text style={styles.btnText}>{'+'}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight disabled={scale === 1}
                                        style={scale === 1 ? styles.btnDisable : styles.btn}
                                        onPress={() => zoomOut()}>
                        <Text style={styles.btnText}>{'-'}</Text>
                    </TouchableHighlight>
                    <View style={styles.btnText}><Text style={styles.btnText}>Scale</Text></View>
                    <TouchableHighlight disabled={scale >= 3}
                                        style={scale >= 3 ? styles.btnDisable : styles.btn}
                                        onPress={() => zoomIn()}>
                        <Text style={styles.btnText}>{'+'}</Text>
                    </TouchableHighlight>
                    <View style={styles.btnText}><Text style={styles.btnText}>{'Horizontal:'}</Text></View>
                    <TouchableHighlight style={styles.btn} onPress={() => switchHorizontal()}>
                        {!horizontal ? (<Text style={styles.btnText}>{'false'}</Text>) : (
                            <Text style={styles.btnText}>{'true'}</Text>)}
                    </TouchableHighlight>

                </View>
                <View style={{flex:1,width: width}}>
                    <Pdf ref={(pdf) => {
                        pdf = pdf;
                    }}
                         source={source}
                         scale={scale}
                         horizontal={horizontal}
                         onLoadComplete={(numberOfPages, filePath,{width,height},tableContents) => {
                           setnumberOfPages(numberOfPages)
                          
                             console.log(`total page count: ${numberOfPages}`);
                             console.log(tableContents);
                         }}
                         onPageChanged={(page, numberOfPages) => {
                           setPage(page)
                             console.log(`current page: ${page}`);
                         }}
                         onError={(error) => {
                             console.log(error);
                         }}
                         style={{flex:1}}
                         />
                </View>
            </SafeAreaView>
        )
    }


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
        backgroundColor: "aqua",
    },
    btnDisable: {
        margin: 2,
        padding: 2,
        backgroundColor: "gray",
    },
    btnText: {
        margin: 2,
        padding: 2,
    }
});

export default PDF;