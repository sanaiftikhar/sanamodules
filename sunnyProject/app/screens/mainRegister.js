// import * as React from 'react';
// import { StyleSheet, Text, Button,View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import Login from './login';
// // import Signup from './signup';
// import Dashboard from './dashboard';

// const Stack = createStackNavigator();
// export default class MainRegister extends React.Component {
// render(){
//   return(

//     <NavigationContainer independent={true}>
//     <Stack.Navigator>
//           <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{ title: 'Welcome' }}
//       />
//       <Stack.Screen name="Login" component={Login} />
      
//     </Stack.Navigator>
//     </NavigationContainer>
//     // <View>
//     // <Text>SDASD</Text>
//     // </View>
//   )
// }
// }
// function Home({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Navigating to different Screens</Text>
//       <Button
//         title="Go to login"
//         onPress={() => navigation.navigate('Login')}
//       />
//     </View>
//   );
// }


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './login';
//import Signup from './components/signup';
import Dashboard from './dashboard';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* <Stack.Screen 
        name="Registration" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />        */}
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'Dashboard' },
         {headerLeft: null} 
       }
      />
    </Stack.Navigator>
  );
}

export default function MainRegister() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

// function MyStack() {
//   return (
//     <Stack.Navigator
//       initialRouteName="Signup"
//       screenOptions={{
//         headerTitleAlign: 'center',
//         headerStyle: {
//           backgroundColor: '#3740FE',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}>
//       {/* <Stack.Screen 
//         name="Signup" 
//         component={Signup} 
//         options={{ title: 'Signup' }}
//       />        */}
//       <Stack.Screen 
//         name="Login" 
//         component={Login} 
//         options={
//           {title: 'Login'},
//           {headerLeft: null} 
//         }
//       />
//       <Stack.Screen 
//        name="Dashboard" 
//        component={Dashboard} 
//        options={
//          { title: 'Dashboard' },
//          {headerLeft: null} 
//        }
//       />
//     </Stack.Navigator>
//   );
// }

