import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/Color';

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4, // Android shadow only
    shadowColor: 'black', // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowRadius: 6, // iOS shadow radius
    shadowOpacity: 0.25, // iOS shadow opacity
    alignItems: 'center',
    justifyContent: 'center',
  },
});
