import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native';
import React from 'react';
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
  Car5,
  WA,
  Call,
  Car6,
  Car7,
  Car8,
  Car9,
} from '../../assets';
import {Gap} from '../../components';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Menu2 = ({navigation}) => {
  const handleHomePress = () => {
    navigation.navigate('Home');
  };

  const handleSellPress = () => {
    navigation.navigate('SellCar');
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };
  const handleMenu1 = () => {
    navigation.navigate('Menu1');
  };
  const url = 'https://wa.me/6289697945017';
  const handleWA = () => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <Image style={{width: windowWidth, height: 180}} source={Car6} />
      <ScrollView style={styles.contentContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
            Audi RS7
          </Text>
          <Text style={{color: 'black', fontSize: 15}}>Rp. 999.999.999</Text>
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Text style={{color: 'black', fontSize: 12}}>Deskripsi Mobil: </Text>
          <Text style={{color: 'black', fontSize: 12}}>
            4800cc V8, Keren langsung dapa cewe kalo beli ini oto
          </Text>
        </View>

        <Gap height={20} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 100,
            marginLeft: 90,
          }}>
          <TouchableOpacity onPress={handleWA}>
            <Image style={{right: 5}} source={WA} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleWA}>
            <Image source={Call} />
          </TouchableOpacity>
        </View>
        <Gap height={20} />
        <TouchableOpacity onPress={handleMenu1}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <Image source={Car1} style={{width: 180, height: 100}} />
            <View style={{paddingHorizontal: 20, top: 20}}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
                Ferrari ROMA
              </Text>
              <Text style={{color: 'black', fontSize: 13}}>
                Deskripsi Mobil:{' '}
              </Text>
              <Text style={{color: 'black', fontSize: 13}}>
                Mobil Gaul mobilnya parah lelaki
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Image source={Car7} style={{width: 180, height: 100}} />
          <View style={{paddingHorizontal: 20, top: 20}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              Volvo CX-9
            </Text>
            <Text style={{color: 'black', fontSize: 13}}>
              Deskripsi Mobil:{' '}
            </Text>
            <Text style={{color: 'black', fontSize: 13}}>
              Mobil Gaul mobilnya parah lelaki
            </Text>
          </View>
        </View>
        <Gap height={15} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Image source={Car8} style={{width: 180, height: 100}} />
          <View style={{paddingHorizontal: 20, top: 20}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              Wuling Almaz
            </Text>
            <Text style={{color: 'black', fontSize: 13}}>
              Deskripsi Mobil:{' '}
            </Text>
            <Text style={{color: 'black', fontSize: 13}}>
              Mobil Gaul mobilnya parah lelaki
            </Text>
          </View>
        </View>
        <Gap height={20} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Image source={Car9} style={{width: 180, height: 100}} />
          <View style={{paddingHorizontal: 20, top: 20}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              Toyota RAV4
            </Text>
            <Text style={{color: 'black', fontSize: 13}}>
              Deskripsi Mobil:{' '}
            </Text>
            <Text style={{color: 'black', fontSize: 13}}>
              Mobil Gaul mobilnya parah lelaki
            </Text>
          </View>
        </View>
        <Gap height={20} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Image source={Car9} style={{width: 180, height: 100}} />
          <View style={{paddingHorizontal: 20, top: 20}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              Toyota RAV4
            </Text>
            <Text style={{color: 'black', fontSize: 13}}>
              Deskripsi Mobil:{' '}
            </Text>
            <Text style={{color: 'black', fontSize: 13}}>
              Mobil Gaul mobilnya parah lelaki
            </Text>
          </View>
        </View>
        <Gap height={20} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Image source={Car9} style={{width: 180, height: 100}} />
          <View style={{paddingHorizontal: 20, top: 20}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              Toyota RAV4
            </Text>
            <Text style={{color: 'black', fontSize: 13}}>
              Deskripsi Mobil:{' '}
            </Text>
            <Text style={{color: 'black', fontSize: 13}}>
              Mobil Gaul mobilnya parah lelaki
            </Text>
          </View>
        </View>
        <Gap height={20} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Image source={Car9} style={{width: 180, height: 100}} />
          <View style={{paddingHorizontal: 20, top: 20}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              Toyota RAV4
            </Text>
            <Text style={{color: 'black', fontSize: 13}}>
              Deskripsi Mobil:{' '}
            </Text>
            <Text style={{color: 'black', fontSize: 13}}>
              Mobil Gaul mobilnya parah lelaki
            </Text>
          </View>
        </View>
        <Gap height={20} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Image source={Car9} style={{width: 180, height: 100}} />
          <View style={{paddingHorizontal: 20, top: 20}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              Toyota RAV4
            </Text>
            <Text style={{color: 'black', fontSize: 13}}>
              Deskripsi Mobil:{' '}
            </Text>
            <Text style={{color: 'black', fontSize: 13}}>
              Mobil Gaul mobilnya parah lelaki
            </Text>
          </View>
        </View>
      </ScrollView>
      <Gap height={10} />
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
    </View>
  );
};

export default Menu2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    zIndex: 1,
  },
  menuBack: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: windowWidth,
    zIndex: 1,
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
