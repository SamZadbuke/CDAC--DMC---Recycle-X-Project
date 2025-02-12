import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, UserTypeScreen } from './Component/Home';
import Dashboard from './Component/DashBoard';
import SignUpScreen from './Component/SignUp';
import LoginScreen  from './Component/Login';
import AboutUsScreen from './Component/AboutUs';
import ContactUsScreen from './Component/ContactUs';
import CategoriesScreen from './Component/Categories';
import SubCategoryScreen from './Component/SubCategories';
import CartScreen from './Component/Cart';
import OrderSummaryScreen from './Component/OrderSummary';
import PaymentScreen from './Component/Payment';
import OrderConfirmScreen from './Component/OrderConfirm';
import { AccountScreen } from './Component/Account';
import ProfileScreen from './Component/Profile';
import SubcategoryDetails from './Component/SubCategoreyDetails';

import SellingProduct from './Component/SellingProduct';




export default function App() {
   const Stack = createNativeStackNavigator();
   
   return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="UserType" component={UserTypeScreen} />
               <Stack.Screen name="Login" component={LoginScreen} />
               <Stack.Screen name='Dashboard' component={Dashboard}/>
               <Stack.Screen name="SignUp" component={SignUpScreen} />
               <Stack.Screen name="AboutUs" component={AboutUsScreen} />
         <Stack.Screen name="ContactUs" component={ContactUsScreen} />
         <Stack.Screen name='Categories' component={CategoriesScreen} />
         <Stack.Screen name='SubCategoryScreen' component={SubCategoryScreen} />
         <Stack.Screen name='Cart' component={CartScreen} />
         <Stack.Screen name='OrderSummary' component={OrderSummaryScreen} />
         <Stack.Screen name='Payment' component={PaymentScreen} />
         <Stack.Screen name='OrderConfirm' component={OrderConfirmScreen} />
         <Stack.Screen name='Account' component={AccountScreen} />
         <Stack.Screen name='Profile' component={ProfileScreen} />
         <Stack.Screen name='SubCategoryDetails' component={SubcategoryDetails} />
         <Stack.Screen name='SellingProduct'component={SellingProduct}/>
        
               

         
       </Stack.Navigator>
     </NavigationContainer>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
