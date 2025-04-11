import { StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
      />
      <View style={styles.buutonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#3b021f',
    elevation: 4, // Android shadow only
    shadowColor: 'black', // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowRadius: 6, // iOS shadow radius
    shadowOpacity: 0.25, // iOS shadow opacity
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    paddingBottom: 0,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buutonsContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
