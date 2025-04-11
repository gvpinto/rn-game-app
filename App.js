import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient
      colors={['#4e0329', '#ddb52f']}
      style={styles.rootScreen}
    >
      <ImageBackground
        style={styles.rootScreen}
        source={require('./assets/images/background.png')}
        imageStyle={styles.imageBackground}
        resizeMode='cover'
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

// Add Style
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // paddingTop: 50,
    // paddingHorizontal: 16,
    // backgroundColor: '#ddb52f',
  },
  imageBackground: {
    opacity: 0.15,
  },
});
