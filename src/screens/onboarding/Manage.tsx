import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { colors } from '../../utils/colors';

const Manage = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.skipText}>skip</Text>
        </TouchableOpacity>
      </View> */}
      <View style={styles.main}>
        <View style={styles.image}>
          <Image source={require('../../../assets/onboarding/image-one.png')} />
        </View>
        <View style={styles.slides}>
          <View style={[styles.baseStyle, styles.content]} />
          <View style={styles.baseStyle} />
          <View style={styles.baseStyle} />
        </View>
        <View style={styles.text}>
          <Text style={styles.headerText}>Manage your tasks</Text>
          <Text style={styles.subText}>
            You can easily manage all of your daily tasks in Dolts for free
          </Text>
        </View>
        <View style={styles.base}>
          <TouchableOpacity style={styles.next} onPress={() => navigation.navigate('Create')}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Manage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[300],
    flex: 1,
    paddingHorizontal: 10,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //   header: {},
  skipText: {
    color: colors.gray[200],
    fontSize: 16,
    fontWeight: 500,
    textTransform: 'uppercase',
  },
  image: {},
  slides: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 51,
  },
  baseStyle: {
    width: 30,
    height: 5,
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  content: {
    backgroundColor: colors.gray[100],
    borderRadius: 20,
  },
  text: {
    flexDirection: 'column',
    gap: 42,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 600,
    color: colors.white[100],
  },
  subText: {
    fontSize: 16,
    fontWeight: 400,
    color: colors.white[100],
    width: 260,
    textAlign: 'center',
    lineHeight: 25,
  },
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40%',
    width: '80%',
  },
  next: {
    backgroundColor: colors.primary[200],
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  nextText: {
    fontSize: 20,
    color: "#fff"
  },
});
