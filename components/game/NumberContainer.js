import { Text, View } from 'react-native';
import Colors from '../../constants/Color';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberTest}>{children}</Text>
    </View>
  );
}

const styles = {
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8, // Not possible on iOS on the Text component
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberTest: {
    color: Colors.accent500,
    fontSize: 36,
    fontfamily: 'open-sans-bold',
    // fontWeight: 'bold',
  },
};

export default NumberContainer;
