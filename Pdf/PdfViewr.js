import React, { useState, useEffect } from 'react';
import {Dimensions,View} from 'react-native';
import {configOrientation, prev, next, zoomI, zoomO} from './helper/helper';
import Pdf from 'react-native-pdf';
import Orientation from 'react-native-orientation-locker';
import {source} from './consts/urls'
import GlobalContext from './GlobalContext/globalcontext'
import Layout from './layout/layout'

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
        let prePage = prev(page)
        pdf.setPage(prePage);
    };

    const nextPage = () => {
        let nextPage = next(page, numberOfPages)
        pdf.setPage(nextPage);
    };

   const zoomOut = () => {
        let scale = zoomO(scale)
        setScale(sacale)
    };

    const zoomIn = () => {
        let scale = scale * 1.2;
        scale = zoomI(scale)
        setScale(scale)
    };

    const switchHorizontal = () => {
      setHorizontal(!horizontal)
      setPage(page)
    };

    const values = {
      zoomIn,
      zoomOut,
      switchHorizontal,
      nextPage,
      prePage,
      page,
      setPage,
      scale,
      setScale,
      numberOfPages,
      setnumberOfPages,
      horizontal,
      width,
      setWidth,
      setHorizontal,
      page,
    };

        return (
          <GlobalContext.Provider value={values}>
            <Layout>
              <View style={{flex: 1, width: width}}>
                <Pdf
                  ref={(pdf) => {
                    pdf = pdf;
                  }}
                  source={source}
                  scale={scale}
                  horizontal={horizontal}
                  onLoadComplete={(numberOfPages) => {
                    setnumberOfPages(numberOfPages);
                  }}
                  onPageChanged={(page) => {
                    setPage(page);
                  }}
                  onError={(error) => {
                    console.log(error);
                  }}
                  style={{flex: 1}}
                />
              </View>
            </Layout>
          </GlobalContext.Provider>
        );
    }


export default PDF;