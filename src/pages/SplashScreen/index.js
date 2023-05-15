import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {SplashBack} from '../../assets/images'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn')
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={SplashBack} style={{height: '100%', width: '100%'}}/>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212A3E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});