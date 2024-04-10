import { StatusBar } from 'expo-status-bar';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { useState } from 'react';
import BottomButton from './BottomButton';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide1 from './Slide1';
import GlobalStyles from '../GlobalStyles';

export default function Main() {
  const buttons = ['Cool!', 'Awesome!', 'Try now!'];
  const [buttonTitle, setButtonTitle] = useState(buttons[0]);

  return (
    <View style={
      [
          styles.container, 
          Platform.OS === 'web' 
          && 
          { backgroundImage: 'linear-gradient(135.00deg, rgb(107, 115, 255) 0%,rgb(0, 13, 255) 100%)'}
      ]
    }>
      <View style={[styles.heading, GlobalStyles.wrapper]}>
        <Image 
          source={require('../assets/logo.png')} 
          style={{width: 108, height: 35}}
        />
      </View>
      <SwiperFlatList  
        showPagination
        onChangeIndex= {({index}) => setButtonTitle(buttons[index])}
        paginationStyle={{
          position: 'relative',
        }}
        paginationStyleItem={{
          height: 10,
          width: 10,
          marginRight: 5,
        }}
        >
        <Slide1/>
        <Slide2/>
        <Slide3/>
      </SwiperFlatList>
      <BottomButton title={buttonTitle}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  heading: {
    marginTop: 30,
    marginBottom: 50,
  }
});
