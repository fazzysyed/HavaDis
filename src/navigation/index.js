import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main3 from '../Screens/Main/MainScreen';
import CustomSidebarMenu from '../components/CustomSideBar';
import Registration from '../Screens/VenderRegistration';
import Login from '../Screens/Login';
import Continue from '../Screens/Continue';
import PlusVerification from '../Screens/PlusVerification';
import IdVerification from '../Screens/IDCamera';
import SelfieVerification from '../Screens/SelfieCamera';

import Settings from '../Screens/SettingScreen/SettingScreen';
import Aboutus from '../Screens/AboutAndTerms/AboutUs';
import Privacy from '../Screens/AboutAndTerms/PrivacyAndPolicy';
import ShippingMethod from '../Screens/ShippingMethod';

import HavausePlus from '../Screens/Main/MainScreen2';
import Dispensaries from '../Screens/Dispensaries/Dispensaries';
import HavaMap from '../Screens/Maps/HavausePlusMaps';
import HaveuseCash from '../Screens/Cash';
import AddPayment from '../Screens/AddPaymentMethod';
import MyProfile from '../Screens/Profile/MyProfile';
import EditProfile from '../Screens/EditProfile';
import MyOrders from '../Screens/Orders';
import WishList from '../Screens/BuyNow/FavoriteList';
import RateApp from '../Screens/Profile/RateApp';
import Country from '../Screens/SelectCountry';
import Currency from '../Screens/SelectCurrency';
import ClothingTab from '../Screens/HavaUseBemo/ClothingTab';
import BuynowScreen from '../Screens/BuyNow/BuynowScreen';
import ProductDetail from '../Screens/ProductDetail';
import SellerDetails from '../Screens/SellerDetails/Main';
import ProductDetailAdttionalInformationTab from '../ScreenComponents/ProductDetailAdttionalInformationTab';
import Details from '../Screens/Details/DetailsReview';
import ContactSupport from '../Screens/ContactSupport';
import CheckOut from '../Screens/CheckOut/Payment';
import Timing from '../Screens/Timing/Timing';
import ViewAll from '../Screens/ViewAll';
import TrackOrderDelivered from '../Screens/TrackOrder';
import OrderStatus from '../Screens/OrderStatus/OrderStatus';
import ChatScreen from '../Screens/ChatScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import Bemo from '../Screens/HavaUseBemo/Main';
import Cart from '../Screens/Cart/MainCart';
import Payment from '../Screens/Payment/PaymentMethod';
import Filter from '../popups/Filter';
import Photo from '../Screens/Photo';
import ProductList from '../Screens/ProductList';
import VerificationInfo from '../Screens/VerificationInfo';
import OrderDetails from '../popups/OrderDetails';
import RefundRequest1 from '../popups/RefundRequest';
import MyReturnAndRefund from '../Screens/ReturnAndRefund/MyReturnAndRefund';
import Following from '../Screens/Following';
import View1 from '../Screens/View/View1';
import View2 from '../Screens/View/View2';
import View3 from '../Screens/View/View3';
import View4 from '../Screens/View/View4';
import View5 from '../Screens/View/View5';
import View6 from '../Screens/View/View6';
import View7 from '../Screens/View/View7';
import View8 from '../Screens/View/View8';
import Viewb1 from '../Screens/View/Viewb1';
import Viewb2 from '../Screens/View/Viewb2';
import Viewb3 from '../Screens/View/Viewb3';
import Viewb4 from '../Screens/View/Viewb4';
import Viewb5 from '../Screens/View/Viewb5';
import Viewb6 from '../Screens/View/Viewb6';
import Viewp1 from '../Screens/View/Viewp1';
import Viewp2 from '../Screens/View/Viewp2';
import Viewp3 from '../Screens/View/Viewp3';
import Viewp4 from '../Screens/View/Viewp4';
import Viewp5 from '../Screens/View/Viewp5';
import Viewp6 from '../Screens/View/Viewp6';
import Splash from '../Screens/Splash';
import DeliveryAddress from '../Screens/DeliveryAddress';
import SavedForLater from '../Screens/View/SavedForLater';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Continue"
        component={Continue}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Signup"
        component={Registration}
        options={{headerShown: null}}
      />

      <Stack.Screen
        name="Timing"
        component={Timing}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="View1"
        component={View1}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="View2"
        component={View2}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="View3"
        component={View3}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="View4"
        component={View4}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="View5"
        component={View5}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="View6"
        component={View6}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="View7"
        component={View7}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="View8"
        component={View8}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Viewb1"
        component={Viewb1}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Viewb2"
        component={Viewb2}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Viewb3"
        component={Viewb3}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Viewb4"
        component={Viewb4}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Viewb5"
        component={Viewb5}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Viewb6"
        component={Viewb6}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Viewp1"
        component={Viewp1}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Viewp2"
        component={Viewp2}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Viewp3"
        component={Viewp3}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Viewp4"
        component={Viewp4}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Viewp5"
        component={Viewp5}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Viewp6"
        component={Viewp6}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="SavedForLater"
        component={SavedForLater}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Pending"
        component={VerificationInfo}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="MyReturnAndRefund"
        component={MyReturnAndRefund}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="OrderDetailPopup"
        component={RefundRequest1}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Bemo"
        component={Bemo}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="MyOrders"
        component={MyOrders}
        options={{headerShown: null}}
      />

      <Stack.Screen
        name="CheckOut"
        component={CheckOut}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Detail"
        component={Details}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Photo"
        component={Photo}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="ShippingMethod"
        component={ShippingMethod}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="InfoTab"
        component={ProductDetailAdttionalInformationTab}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="SellerDetail"
        component={SellerDetails}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="BuyNow"
        component={BuynowScreen}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="ClothingTab"
        component={ClothingTab}
        options={{headerShown: null}}
      />

      <Stack.Screen
        name="Havause"
        component={MyDrawer}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="PlusVerification"
        component={PlusVerification}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="IdVerification"
        component={IdVerification}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="SelfieVerification"
        component={SelfieVerification}
        options={{headerShown: null}}
      />

      <Stack.Screen
        name="Dispensaries"
        component={Dispensaries}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Verification"
        component={VerificationInfo}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="WishList"
        component={WishList}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Rate"
        component={RateApp}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Country"
        component={Country}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Currency"
        component={Currency}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="TrackOrder"
        component={TrackOrderDelivered}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="OrderStatus"
        component={OrderStatus}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="WelcomeBemo"
        component={WelcomeScreen}
        options={{headerShown: null}}
      />

      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="View"
        component={ViewAll}
        options={{headerShown: null}}
      />

      {/* <Stack.Screen
        name="BottomTabStack"
        component={MyTab}
        options={() => ({
          headerTitle: 'check',
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        })}
      /> */}
    </Stack.Navigator>
  );
};

// const MyTab = () => {
//   return (
//     <Tab.Navigator
      
//       tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//         style: {
//           backgroundColor: '#e0e0e0',
//         },
//         labelStyle: {
//           textAlign: 'center',
//           fontSize: 16,
//         },
//       }}>
//       <Tab.Screen
//         name="Main3"
//         component={Main3}
//         options={{
//           tabBarLabel: 'Home Screen',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons
//               name="home"
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="HavausePlus"
//         component={HavausePlus}
//         options={{
//           tabBarLabel: 'Explore Screen',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons
//               name="settings"
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        component={Main3}
        name="Main"
        options={{drawerLabel: 'First page Option'}}
      />
      <Drawer.Screen
        name="View"
        component={ViewAll}
        options={{headerShown: null}}
      />
      <Drawer.Screen
        component={Bemo}
        name="Bemo"
        options={{drawerLabel: 'First page Option'}}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: null}}
      />
      <Drawer.Screen
        name="Aboutus"
        component={Aboutus}
        options={{headerShown: null}}
      />
      <Drawer.Screen
        name="Privacy"
        component={Privacy}
        options={{headerShown: null}}
      />
      <Drawer.Screen
        name="ContactSupport"
        component={ContactSupport}
        options={{headerShown: null}}
      />
      <Drawer.Screen
        name="HavausePlus"
        component={HavausePlus}
        options={{headerShown: null}}
      />
      <Drawer.Screen
        name="Dispensaries"
        component={Dispensaries}
        options={{headerShown: null}}
      />
      <Drawer.Screen
        name="HavaMap"
        component={HavaMap}
        options={{headerShown: null}}
      />
      <Drawer.Screen
        name="HavauseCash"
        component={HaveuseCash}
        options={{headerShown: null}}
      />
      <Drawer.Screen
        name="AddPayment"
        component={AddPayment}
        options={{headerShown: null}}
      />
      <Drawer.Screen
        name="MyProfile"
        component={MyProfile}
        options={{headerShown: null}}
      />
      <Drawer.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: null}}
      />
      <Drawer.Screen
        name="MyOrders"
        component={MyOrders}
        options={{headerShown: null}}
      />
      <Drawer.Screen
        name="Following"
        component={Following}
        options={{headerShown: null}}
      />
      <Drawer.Screen
        name="DeliveryAddress"
        component={DeliveryAddress}
        options={{headerShown: null}}
      />
      <Drawer.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: null}}
      />
    </Drawer.Navigator>
  );
};
const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <MyDrawer /> */}
      <MyStack />
    </NavigationContainer>
  );
};

export default Navigation;
