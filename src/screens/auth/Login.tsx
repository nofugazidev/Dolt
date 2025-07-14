import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../utils/colors';

const Login = ({ navigation }: any) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={handleBack}>
        <Image source={require('../../../assets/onboarding/arrow-left.png')} />
      </TouchableOpacity>

      <View style={styles.main}>
        <Text style={styles.loginHeader}>login</Text>

        <View style={styles.inputSection}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              placeholder="Enter your email"
              style={styles.input}
              placeholderTextColor="#ffffff40"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="Enter your Password"
              style={styles.input}
              placeholderTextColor="#ffffff40"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity style={styles.logBtn}>
            <Text style={styles.logText}>Login</Text>
          </TouchableOpacity>

          <Image source={require('../../../assets/auth/orLine.png')} style={styles.line} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[300],
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    height: 20,
  },
  main: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 50,
    width: '100%',
    flexDirection: 'column',
    gap: 50,
  },
  loginHeader: {
    color: '#fff',
    textTransform: 'capitalize',
    width: '100%',
    fontSize: 35,
    fontWeight: 600,
  },
  inputSection: {
    gap: 30,
    width: '100%',
  },
  inputContainer: {
    gap: 10,
    width: '100%',
  },
  label: {
    color: '#ffffffde',
    fontSize: 20,
  },
  input: {
    borderStyle: 'solid',
    borderColor: colors.gray[200],
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 4,
    color: colors.white[100],
    fontSize: 18,
  },
  logBtn: {
    backgroundColor: colors.primary[100],
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 4,
    marginTop: 40,
  },
  logText: {
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 16,
  },
  line: {
    width: '100%'
  },
});
