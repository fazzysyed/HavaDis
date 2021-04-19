import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Tab from '../components/Tab';
import {Container, Header} from 'native-base';
import Registration from '../components/Registration';
import UserRegistration from '../components/UserRegistration';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const VenderRegistraion = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);

  return (
    <Container>
      <View style={styles.logo}>
        <Image source={require('../../assets/Main.png')} />
      </View>

      {/* <Tabs tabBarUnderlineStyle = {{backgroundColor:"transparent"}} tabBarBackgroundColor = "white" tabContainerStyle = {{backgroundColor:"#FFFFFF",borderWidth:1,borderColor:"#3FAD72",height:70,borderBottomWidth:1, borderRadius:20, marginHorizontal:wp('3%')}} >
          <Tab heading="User Resgistration"  tabStyle = {{backgroundColor:"#FFF", }} activeTabStyle = {{borderRadius:20,backgroundColor:"#3FAD72",height:70}} >
             
       
             
          </Tab>
          <Tab heading="Vendor Registration" tabStyle = {{backgroundColor:"#FFF", }} activeTabStyle = {{ borderRadius:20,backgroundColor:"#3FAD72",height:70}} > 

      
        </Tab>
 
        </Tabs> */}
      <View
        style={{
          borderWidth: 2,
          borderColor: '#3FAD72',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          alignSelf: 'center',
          borderRadius: 24,
        }}>
        <Tab
          Text="User Resgistration"
          color={tab1 ? '#FFFFFF' : '#3FAD72'}
          backgroundColor={tab1 ? '#3FAD72' : '#FFFFFF'}
          onPress={() => {
            setTab1(true);
            setTab2(false);
          }}
        />

        <Tab
          Text="Vendor Registration"
          color={tab2 ? '#FFFFFF' : '#3FAD72'}
          backgroundColor={tab2 ? '#3FAD72' : '#FFFFFF'}
          onPress={() => {
            setTab2(true);
            setTab1(false);
          }}
        />
      </View>

      {tab1 ? (
        <UserRegistration navigation={navigation} />
      ) : (
        <Registration navigation={navigation} />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  logo: {marginVertical: hp('4%'), alignSelf: 'center'},
});

export default VenderRegistraion;
