import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import Colors from '../../constants/Color';

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}
export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    color: Colors.accent500,
  },
});
