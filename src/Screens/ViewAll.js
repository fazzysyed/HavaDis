import React, {useState, useEffect} from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon, Tabs, Tab, Item} from 'native-base';
import Headers from '../components/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CheckTab from '../components/CheckTab';
import ProductDetailtab1 from '../ScreenComponents/ProductDetailtab1';
import {set} from 'react-native-reanimated';
const FirstRoute = () => <View style={{height: 400, backgroundColor: 'red'}} />;

const SecondRoute = () => <View style={{flex: 1, backgroundColor: 'green'}} />;
const ENTRIES1 = [
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration:
      'https://media.istockphoto.com/photos/steering-wheel-picture-id507984911?k=6&m=507984911&s=612x612&w=0&h=Qcr0bGMqXYi2b1rBgjtD8l6eiPXchaSoXS-CjuyHG3E=',
  },
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://static.toiimg.com/photo/msid-74608450/74608450.jpg',
  },
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGLO11zpi1jopW17rsKtV3IHk0LbgFL7ieg&usqp=CAU',
  },

  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://images.pexels.com/photos/3401900/pexels-photo-3401900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAg1vM1IbIR9JDJ4cmqxknoi3NYNMRZCDbA&usqp=CAU',
  },
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://www.telemart.pk/uploads/product_image/product_116446_1.jpg',
  },
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://uswitch-mobiles-contentful.imgix.net/qhi9fkhtpbo3/675MCGCpbOmC4qeKSUCKmo/b9682fd651bcd82b59b3a4edfa266ce5/iPhone_X_and_Note_8_.jpg?w=770',
  },
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwUACKXFVmtlvne5ZRuInI73-vh3JJqHW3MQ&usqp=CAU',
  },
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://images.pexels.com/photos/3401900/pexels-photo-3401900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAg1vM1IbIR9JDJ4cmqxknoi3NYNMRZCDbA&usqp=CAU',
  },
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://www.telemart.pk/uploads/product_image/product_116446_1.jpg',
  },
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://uswitch-mobiles-contentful.imgix.net/qhi9fkhtpbo3/675MCGCpbOmC4qeKSUCKmo/b9682fd651bcd82b59b3a4edfa266ce5/iPhone_X_and_Note_8_.jpg?w=770',
  },
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwUACKXFVmtlvne5ZRuInI73-vh3JJqHW3MQ&usqp=CAU',
  },
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://uswitch-mobiles-contentful.imgix.net/qhi9fkhtpbo3/675MCGCpbOmC4qeKSUCKmo/b9682fd651bcd82b59b3a4edfa266ce5/iPhone_X_and_Note_8_.jpg?w=770',
  },
  {
    title: 'Professional Modification of racing car Steering Wheel',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwUACKXFVmtlvne5ZRuInI73-vh3JJqHW3MQ&usqp=CAU',
  },
];

const ProductDetailtab2 = (props) => {
  const [selected, setSelected] = useState('');
  const [id, setId] = useState('');
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState([]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case '1':
        return <CheckTab />;
      case '2':
        return <SecondRoute />;
      case '3':
        return <SecondRoute />;
      case '4':
        return <SecondRoute />;
      case '5':
        return <SecondRoute />;
      case '6':
        return <SecondRoute />;
      case '7':
        return <SecondRoute />;
      case '8':
        return <SecondRoute />;
      default:
        return null;
    }
  };
  const handleSelection = (id) => {
    console.log(id);
    setId(id);
    var selectedId = selected;

    if (selectedId === id) setSelected(null);
    else setSelected(id);
  };
  useEffect(() => {
    // setRoutes([])
    props.route.params.array.map((item) => {
      console.log(item);
      routes.push({
        key: item.id,
        title: item.title,
      });
    });
  }, []);
  {
    /* {selected.includes("1") ? <CheckTab/> : null} */
  }

  return (
    <View style={{flex: 1}}>
      <Headers title="Category" left={() => props.navigation.goBack()} />

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: '#3FAD72'}}
            tabStyle={{width: 100}}
            // scrollEnabled={true}
            activeColor="#3FAD72"
            inactiveColor="#5D5D5D"
            indicatorContainerStyle={{backgroundColor: 'white'}}
            labelStyle={{
              fontSize: 12,
              // textAlign: 'right',
              fontFamily: 'HK Grotesk-Regular',
            }}
            style={{backgroundColor: 'white'}}
            scrollEnabled={true}
          />
        )}
        initialLayout={{
          width: Dimensions.get('window').width,
          height: 50,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heroImage: {
    height: hp('23%'),
    width: wp('95%'),
    borderRadius: 10,
  },

  flatlistContainer: {
    height: hp('25%'),
    width: wp('29%'),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    marginHorizontal: wp('2%'),
    marginVertical: hp('1%'),
  },
  imageConatiner: {
    width: wp('100%'),
    height: hp('14%'),
  },
  flatlistImage: {
    height: hp('14%'),
    width: wp('28.5%'),
    position: 'absolute',
  },
  flatlistbadge: {
    flexDirection: 'row',
    width: wp('11%'),
    height: hp('3%'),
    backgroundColor: 'orange',
    borderRadius: 7,
    alignItems: 'center',
  },
  onSale: {
    height: hp('3.5%'),
    width: wp('13%'),
    backgroundColor: '#FF0303',
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: hp('1%'),
    marginLeft: wp('1%'),
  },
});

export default ProductDetailtab2;
