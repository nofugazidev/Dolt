import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../utils/colors';

const Welcome = ({navigation}: any) => {
    const handleBack = () => {
        navigation.goBack()
    }
  return (
    <SafeAreaView style={styles.container}>
        {/* top */}
      <View style={styles.top}>
        <TouchableOpacity style={styles.header} onPress={handleBack}>
          <Image
            source={require('../../../assets/onboarding/arrow-left.png')}
          />
        </TouchableOpacity>
        <View style={styles.main}>
          <Text style={styles.text}>Welcome to Dolt</Text>
          <Text style={styles.subtext}>
            Please login to your account or create new account to continue
          </Text>
        </View>
      </View>

      {/* bottom */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>login</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.regBtn} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.regText}>create account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[300],
    flex: 1,
    paddingHorizontal: 10,
  },
  top: {
    flex: 1,
  },
  header: {
    height: 20,
  },
  main: {
    flex: 1,
    gap: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
    paddingTop: 50,
  },
  text: {
    fontSize: 32,
    color: colors.white[100],
    fontWeight: 600,
  },
  subtext: {
    fontSize: 17,
    color: colors.gray[200],
    textAlign: 'center',
    width: '80%',
    lineHeight: 24,
  },
  buttons: {
    gap: 10,
    width: '100%',
    paddingBottom: 24,
  },
  loginBtn: {
    backgroundColor: colors.primary[100],
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 4,
  },
  loginText: {
    color: "#fff",
    textTransform: 'uppercase',
    width: '100%',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 16,
  },
  regBtn: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: colors.primary[100],
    borderWidth: 1.5,
  },
   regText: {
    color: "#fff",
    textTransform: 'uppercase',
    width: '100%',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 16,
  },
});
