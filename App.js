import { Platform, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Main from './Components/Main';


export default function App() {


  if(Platform.OS !== 'web') {
    return (
      <LinearGradient
      colors={['rgb(107, 115, 255)', 'rgb(0, 13, 255)']} 
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 1}}
      >
        <Main/>
      </LinearGradient>
    );
  }

  return (
    <Main/>
  );
}
