import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header, Gap, Button} from '../../components';
import {Sign, SignBottom, SignTops} from '../../assets';
const windowWidth = Dimensions.get('window').width;

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={Sign} style={styles.topImage} />
      <View style={styles.contentWrapper}>
        <Text style={styles.titleText}>Sign Up</Text>
        <Gap height={25} />
        <Text style={styles.title}>Full Name</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#A39D9D"
          placeholder=""
        />
        <Gap height={16} />
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
        <Gap height={10} />
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.noacc}> Sudah punya Akun? Masuk Sekarang</Text>
        </TouchableOpacity>

        <View style={{alignItems: 'flex-end', top: 60}}>
          <Button
            width={120}
            height={50}
            color="transparent"
            title="Register"
            fontSize={20}
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'cover',
    width: windowWidth,
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'cover',
    width: windowWidth,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 220,
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
    right: 20,
  },
});
