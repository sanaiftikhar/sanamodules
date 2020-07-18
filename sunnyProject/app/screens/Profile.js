import React, { Component } from 'react';
import { View,StyleSheet, Image, Text, Button , TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { updateBio } from '../service';
import {LinearGradient} from 'expo-linear-gradient';
import * as firebase from 'firebase';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import { TextInput } from 'react-native-gesture-handler';

export default class Home extends Component {
  constructor(props) {
    super(props);


    this.state = {
      bio: '',
      error: false,
      clear:'', items:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
      
  }
          componentDidMount() {
        firebase.database().ref('users/updateBio').on('value', (snapshot) => {
            let data = snapshot.val();
            console.log(data);
            let items = Object.values(data);
            this.setState({items:items});
         });
    }



  handleChange(e) {
    this.setState({
      bio: e.nativeEvent.text
    });
  }
  handleSubmit() {
    updateBio(this.state.bio);
   alert(
      'Updated successfully'
     );

     
  }
  
  //  (snapshot) => {
  //   const userItem = snapshot.val();
  //   let items = Object.values(userItem);
  //   this.setState({ items: items });
//});
  render() {
    return (
     <LinearGradient colors={[ '#000000','#6b1d1d','#5c5d2d']} style={styles.linearGradient}>
      <View  style={{  color:"white" , flex:1}}>
   

    
        {/* <Image source={require("./sana.jpg")} style={styles.avatar}></Image> */}
        <Text style={{fontWeight:"bold" ,marginTop:10, color:"white", fontSize:27, alignSelf:"center"}}>Bio</Text>
      <Text style={{ marginTop:10, color:"white", fontSize:27, alignSelf:"center"}}>
      {this.state.items}
    
    </Text>
      
      <TextInput   onChange={this.handleChange}   multiline={true} value=
    



      {this.state.bio} 
      style={{ borderRadius:10, margin:10, backgroundColor:"white",borderWidth:1, borderRadius:20,  alignSelf:"center", textAlign:"center",width:300}} placeholderTextColor="white"></TextInput>
     

     <TouchableOpacity style={{alignSelf:"center"}} onPress={this.handleSubmit}><Text style={{color:"white",borderRadius:5 ,marginTop:7, backgroundColor:"black" ,padding:10}}>Update</Text></TouchableOpacity>
     {/* <TextInput   onChange={this.handleChange}
  // // value={this.state.text}
  // style={{flex:1, paddingLeft:20}}
   placeholder="Update" placeholderTextColor="black"></TextInput> */}

      </View>
      </LinearGradient>
    )
  }
}
const styles=StyleSheet.create({
avatar:{
  width:200,
  height:200, marginTop:20,borderRadius:100, alignContent:"center", alignSelf:"center"
},linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
});