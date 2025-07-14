import { TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Back = ({ navigation }: any) => {
  // const handleBack = () => {
  //   navigation.goBack
  // };
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={require('../../assets/onboarding/arrow-left.png')} />
    </TouchableOpacity>
  );
};

export default Back;
