import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../utils/colors';

const Register = ({ navigation }: any) => {
  const handleBack = () => {
    navigation.goBack();
  };
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.header} onPress={handleBack}>
          <Image
            source={require('../../../assets/onboarding/arrow-left.png')}
          />
        </TouchableOpacity>

        <View style={styles.main}>
          <Text style={styles.loginHeader}>register</Text>

          <View style={styles.inputSection}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                placeholder="Enter your email"
                style={styles.input}
                placeholderTextColor="#ffffff40"
                ref={inputRef}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                placeholder="Enter your Password"
                style={styles.input}
                placeholderTextColor="#ffffff40"
                secureTextEntry={true}
                ref={inputRef}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                placeholder="Enter Password to Confirm"
                style={styles.input}
                placeholderTextColor="#ffffff40"
                secureTextEntry={true}
                ref={inputRef}
              />
            </View>

            <TouchableOpacity style={styles.registerBtn}>
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>

            <Image
              source={require('../../../assets/auth/orLine.png')}
              style={styles.line}
            />

            <View style={styles.buttons}>
              <TouchableOpacity style={styles.regBtn}>
                <Image source={require('../../../assets/auth/google.png')} />
                <Text style={styles.regText}>Register with Google</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.regBtn}>
                <Image source={require('../../../assets/auth/apple.png')} />
                <Text style={styles.regText}>Register with Apple</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.footerMain}>
            <Text style={styles.footerQuest}>Already an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.footerText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

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
    gap: 30,
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
    fontSize: 18,
  },
  input: {
    borderStyle: 'solid',
    borderColor: colors.gray[200],
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 4,
    color: colors.white[100],
    fontSize: 16,
  },
  registerBtn: {
    backgroundColor: colors.primary[100],
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 4,
    marginTop: 0,
  },
  registerText: {
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 16,
  },
  line: {
    width: '100%',
    paddingVertical: 14,
  },
  buttons: {
    gap: 10,
    width: '100%',
    paddingBottom: 24,
  },
  regBtn: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: colors.primary[100],
    borderWidth: 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  regText: {
    color: '#fff',
    // width: '100%',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 16,
  },
  footer: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  footerMain: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    gap: 5,
  },
  footerQuest: {
    color: colors.gray[200],
  },
  footerText: {
    color: '#fff',
  },
});
