import { StyleSheet, Image, SafeAreaView, View, Text } from 'react-native'
import React,  {useEffect} from 'react'
import {colors} from '../../utils/colors'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/AppNavigator'

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>

const Splash: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(()=> {
      navigation.replace('Manage')
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigation])
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../../assets/onboarding/logo.png')}
       />
       <View style={styles.textContainer}>
        <Text style={styles.text}>dolt</Text>
       </View>
    </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[300],
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    textTransform: 'uppercase',
    width: '100%',
    fontSize: 30,
    fontWeight: 600
  }
})