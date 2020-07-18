import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, Button,View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ChartScreen from './screens/ChartScreen';
import NewsScreen from './screens/News';
import SocialScreen from './screens/SocialScreen';
//import SampleScreen from './screens/ChatScreen';
import Mainregister from './screens/mainRegister'
// import Login from './components/Login';
// import CreateAccount from './components/CreateAccount';
// import Chat from './components/Chat';

//  import RegisterScreen from './screens/login';
import * as firebase from 'firebase';
const Stack = createStackNavigator();
export default class App extends React.Component {
  render(){
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Welcome' }}
      /><Stack.Screen name="SocialScreen" component={SocialScreen} />
       {/* <Stack.Screen name="Dashboard" component={Dashboard} />  
      {/* <Stack.Screen name="Details" component={Details} />*/}
      <Stack.Screen name="ChartScreen" component={ChartScreen} />
      
      {/* <Stack.Screen name="SampleScreen" component={SampleScreen} /> */}
      <Stack.Screen name="NewsScreen" component={NewsScreen} /> 
      {/* <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Chat" component={Chat} /> */}
      
      <Stack.Screen name="Mainregister" component={Mainregister}/> 
    </Stack.Navigator>
  </NavigationContainer>
  );
}}
// var user = firebase.auth().currentUser;
// var credential;

// Prompt the user to re-provide their sign-in credentials

// user.reauthenticateWithCredential(credential).then(function() {
//   //User re-authenticated.
//   firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     console.log(user);
//   } else {
//     console.log("No user signed in")
//   }
// }).catch(function(error) {
//   // An error happened.
//   console.log(error);
//});
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     console.log(user);
//   } else {
//     console.log('No user is signed in.')
//   }
//  });s
 firebase.database().ref('/users/').once('value').then((snapshot) => {
  let values = [];
  snapshot.forEach((child) => {
    values.push(child.val());
  });
  console.log(values);
});
function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Navigating to different Screens</Text>
      {/* <Button
        title="Go to Details"
/        onPress={() => navigation.navigate('Details')}
      /> */}
     <Button
        title="Go to Social"
        onPress={() => navigation.navigate('SocialScreen')}
      />
               {/* <Button
        title="Go to Charts"
        onPress={() => navigation.navigate('ChartScreen')}/>
      <Button
        title="Go to login"
        onPress={() => navigation.navigate('Mainregister')}
      />
            <Button
        title="Go to News"
        onPress={() => navigation.navigate('NewsScreen')}
      /> */}
            {/* <Button
        title="Sample Screen"
        onPress={() => navigation.navigate('SampleScreen')}
      /> */}

    </View>
  );
}

// function Details() {
//   // const user = firebase.auth().currentUser;

//   // if (user) {
//   //  console.log('User email: ', user.email);
//   // }
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>details Screen</Text>

//     </View>
//   );
// }


