import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  MenuBack,
  SignTops,
  HomeIcon,
  SellIcon,
  ProfileIcon,
  SearchIcon,
  Car1,
  Car2, 
  Car3,
  Car4, 
  Car5
} from '../../assets';
import { Gap } from '../../components';
import { ScrollView } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Home = ({navigation}) => {
  

  const handleHomePress = () => {
    navigation.navigate('Home')
  };

  const handleSellPress = () => {
    navigation.navigate('SellCar');
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };
  const handleMenu1 = () => {
    navigation.navigate('Menu1')
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image source={SearchIcon} style={styles.searchIcon} />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#A39D9D"
          placeholder="Cek Tahun, Harga, Model..."
        />
      </View>
      <Gap height={10} />
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.contentTitleText}>Hello User</Text>
        <Gap height={5} />
        <Text style={styles.contentText}>We have recommendation for you</Text>
        <Gap height={20} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
            Good Deals
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
            see all
          </Text>
        </View>
        <TouchableOpacity onPress={handleMenu1}>
          <Image style={{alignSelf: 'center'}} source={Car1} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 40,
            }}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Ferrari ROMA
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>Rp. 999.999.999</Text>
          </View>

          <View style={{paddingHorizontal: 40}}>
            <Text style={{color: 'black', fontSize: 12}}>
              Deskripsi Mobil:{' '}
            </Text>
            <Text style={{color: 'black', fontSize: 12}}>
              4800cc V8, Keren langsung dapa cewe kalo beli ini oto
            </Text>
          </View>
        </TouchableOpacity>
        <Gap height={20} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
            Deals
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
            see all
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image source={Car2} />
          <Image source={Car3} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Lamborghini Aventador
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>Rp. 999.999.999</Text>
          </View>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Mercedes Benz S-Class
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>Rp. 999.999.999</Text>
          </View>
        </View>

        <Gap height={20} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image source={Car4} />
          <Image source={Car5} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Audi A6
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>Rp. 999.999.999</Text>
          </View>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Mercedes Benz AMG G63
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>Rp. 999.999.999</Text>
          </View>
        </View>
        <Gap height={20} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image source={Car4} />
          <Image source={Car5} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Audi A6
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>Rp. 999.999.999</Text>
          </View>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Mercedes Benz AMG G63
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>Rp. 999.999.999</Text>
          </View>
        </View>
        <Gap height={20} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image source={Car4} />
          <Image source={Car5} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Audi A6
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>Rp. 999.999.999</Text>
          </View>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Mercedes Benz AMG G63
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>Rp. 999.999.999</Text>
          </View>
        </View>
        <Gap height={20} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image source={Car4} />
          <Image source={Car5} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Audi A6
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>Rp. 999.999.999</Text>
          </View>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Mercedes Benz AMG G63
            </Text>
            <Text style={{color: 'black', fontSize: 15}}>Rp. 999.999.999</Text>
          </View>
        </View>
      </ScrollView>
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
    fontSize: 30,
  },
  contentText: {
    color: 'black',
    fontSize: 15,
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
    top: -250,
    left: 0,
    right: 0,
    resizeMode: 'cover',
    width: windowWidth,
  },
  textInput: {
    flex: 1,
    height: '100%',
    marginLeft: 10,
    fontSize: 16,
    color: 'white',
  },
  menuBack: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: windowWidth,
    zIndex: 1
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

export default Home;
