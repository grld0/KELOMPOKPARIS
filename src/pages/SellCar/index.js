import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import React, {useState} from 'react';
import {
  MenuBack,
  SignTops,
  HomeIcon,
  SellIcon,
  ProfileIcon,
  Gambar,
} from '../../assets';
import {Header, Gap, Button} from '../../components';

const windowWidth = Dimensions.get('window').width;

const SellCar = ({navigation}) => {
  const handleHomePress = () => {
    navigation.navigate('Home');
  };

  const handleSellPress = () => {
    navigation.navigate('SellCar');
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };
  const handleKirim = () => {
    alert('Done Adding Car');
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Gap height={20} />
        <Text style={styles.contentTitleText}>ShowroomOto</Text>
        <Gap height={20} />
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
          }}>
          Masukan Data Mobil Yang Ingin Dijual!
        </Text>
        <Gap height={20} />
        <Text style={styles.title}>Merek Mobil</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#A39D9D"
          placeholder=""
        />
        <Gap height={15} />
        <Text style={styles.title}>Deskripsi</Text>
        <TextInput
          style={styles.textInput1}
          placeholderTextColor="#A39D9D"
          placeholder=""
        />
        <Gap height={15} />
        <Text style={styles.title}>Pesan</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#A39D9D"
          placeholder=""
        />
        <Gap height={20} />
        <Image style={{left: 25}} source={Gambar} />
        <Gap height={20} />
        <View style={{alignItems: 'center'}}>
          <Button
            width={120}
            height={50}
            color="#057891"
            title="KIRIM"
            fontSize={20}
            onPress={handleKirim}
          />
        </View>
      </View>
      <View style={styles.menuBack}>
        <ImageBackground source={MenuBack} style={styles.menuBackImage}>
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={handleHomePress} style={styles.button}>
              <Image source={HomeIcon} style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity onPress={handleSellPress} style={styles.button}>
              <Image source={SellIcon} style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity
              onPress={handleProfilePress}
              style={styles.button}>
              <Image source={ProfileIcon} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      <Image source={SignTops} style={styles.topSign} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    paddingHorizontal: 30,
    zIndex: 1,
  },
  contentTitleText: {
    color: '#057891',
    fontSize: 40,
    alignSelf: 'center',
  },
  contentText: {
    color: 'black',
    fontSize: 15,
  },
  title: {
    fontSize: 20,
    marginBottom: 6,
    color: 'black',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'transparent',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#057891',
    padding: 10,
    zIndex: 2,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  search: {
    padding: 20,
  },
  topSign: {
    position: 'absolute',
    top: -200,
    left: 0,
    right: 0,
    resizeMode: 'cover',
    width: windowWidth,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#057891',
    padding: 10,
    height: 70,
  },
  textInput1: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#057891',
    padding: 10,
    height: 100,
  },
  menuBack: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: windowWidth,
  },
  menuBackImage: {
    resizeMode: 'stretch',
    width: '100%',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 30,
  },
  icon: {
    width: 24,
    height: 24,
  },
  separator: {
    width: 10,
  },
});

export default SellCar;
