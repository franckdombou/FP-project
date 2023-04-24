import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import FastImage from 'react-native-fast-image';

const LazyLoad = () => {

    const container = React.createRef(null);

  return (
    <>
    <ScrollView
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={10}
      onScroll={(event) => {
        container.current.onScroll();
      }}
      bounces={false}
      scrollEnabled={true}
    >
      <View>
        <ImageLazyLoad
          ref={container}
        />
      </View>
    </ScrollView>
  </>
  )
}




export default LazyLoad




// lazy loading for three images
const ImageLazyLoad = React.forwardRef((props, ref) => {
    const marker1 = React.useRef(null);
    const marker2 = React.useRef(null);
    const marker3 = React.useRef(null);
    const [markerVisible, setmarkerVisible] = useState(0);
  
    // marker Visible set with value -> 1,2,3
    React.useImperativeHandle(ref, () => ({
      onScroll: () => {
        marker1
          && marker1.current
          && marker1.current.measure((x, y, width, height, pageX, pageY) => {
            if( pageY < heightWindow + 100 && markerVisible === 0  ) {
              setmarkerVisible(1);
            }
          });
        marker2
          && marker2.current
          && marker2.current.measure((x, y, width, height, pageX, pageY) => {
            if (pageY < heightWindow + 100 && markerVisible === 1) {
              setmarkerVisible(2);
            }
          });
        marker3
          && marker3.current
          && marker3.current.measure((x, y, width, height, pageX, pageY) => {
            if (pageY < heightWindow + 100 && markerVisible === 2) {
              setmarkerVisible(3);
            }
          });
      },
    }));
  
    const renderComponent = (
      <>
     
        {[1,2,3].map((item) => {
              return (
                <View
                  ref={
                      item.key === 1
                        ? marker1
                        : item.key === 2
                          ? marker2
                          : item.key === 3
                            ? marker3
                                : null
                    }Image
                  key={`${item.key}`}
                  onLayout={(event) => event.target.measure(() => {})}
                >
                 {markerVisible >= item.key ?
                    <Image
                      source={{
                        uri:"https://imagizer.imageshack.com/img923/1786/Ijm6Kt.jpg", // setup your own uri
                        
                      }}
                      style={{height:100,width:300}}
                    /> : <Image
                    source={require('../../assets/nike/nike8.jpg')}
                    style={{height:1000,width:300}}
                  />
                  }
                  {markerVisible < item.key ?
                    <Image
                    style={{height:100,width:500}}
                    /> : <Image
                    source={require('../../assets/nike/nike6.jpeg')}
                    style={{height:1000,width:500}}
                  />
                  }
                </View>
              );
          })}
      </>
    );
    return <>{renderComponent}</>;
  });