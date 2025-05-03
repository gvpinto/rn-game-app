import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/Color';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
    borderRadius: 8,
    marginBottom: 24,
  },
});
export default Title;
