import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/Color';

function PrimaryButton({ children, onPress }) {
  function pressHandler() {
    console.log('Pressed!');
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) => (pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer)}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    overflow: 'hidden',
    margin: 4,
    backgroundColor: Colors.primary800,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2, // Android shadow only
    // shadowColor: 'black', // iOS shadow color
    // shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    // shadowRadius: 6, // iOS shadow radius
    // shadowOpacity: 0.25, // iOS shadow opacity
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
