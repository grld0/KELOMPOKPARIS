import {StyleSheet, Text, View, TextInput, Image, Dimensions, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header, Gap, Button} from '../../components';
import { Sign } from '../../assets';
const windowWidth = Dimensions.get('window').width;

const SignIn = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <Image source={Sign} style={styles.topImage} />
      <View style={styles.contentWrapper}>
        <Text style={styles.titleText}>Sign In</Text>
        <Gap height={25} />
        <Text style={styles.title}>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#A39D9D"
          placeholder=""
        />
        <Gap height={16} />
        <Text style={styles.title}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#A39D9D"
          placeholder=""
          secureTextEntry={true}
        />
        <Text style={styles.forgot}>Forgot Password?</Text>
        <Gap height={20} />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.noacc}> Tidak punya Akun? Buat Sekarang</Text>
        </TouchableOpacity>

        <View style={{alignItems: 'flex-end', top: 60}}>
          <Button
            width={120}
            height={50}
            color="transparent"
            title="Login"
            fontSize={20}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topImage: {
    bottom: 0,
    position: 'absolute',
    width: windowWidth,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 300,
  },
  titleText: {
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#057891',
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#057891',
    padding: 10,
    height: 70,
  },
  title: {
    fontSize: 17,
    marginBottom: 6,
    color: '#057891',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  forgot: {
    fontSize: 17,
    color: '#057891',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'right',
    top: 10,
  },
  noacc: {
    fontSize: 17,
    color: 'white',
    top: 150,
    right: 20
  },
});
