import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,SafeAreaView,TouchableOpacity,
    TouchableHighlight
  } from 'react-native';
import {addPost} from '../service';
import {LinearGradient} from 'expo-linear-gradient';
//YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
export default class AddPostScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        name: '',
        error: false,
        clear:'', 
          uid: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(e) {
        this.setState({
          name: e.nativeEvent.text
        });
      }
      handleSubmit() {
          addPost(this.state.name);
        console.log(this.state.name);
        alert(
            'Posted successfully'
           );
      }


      render() {
        return (
      <SafeAreaView style={{flex:1}}>
       <LinearGradient colors={[ '#000000','#6b1d1d','#5c5d2d']} style={styles.linearGradient}>
        {/* <View style={styles.header}>      
        </View> */}
        <View style={styles.inputContainer}>
          
            {/* <Image source={require("./sana.jpg")} style={styles.avatar}></Image> */}
        <TextInput   autoFocus={true} 
        onChange={this.handleChange}
        // value={this.state.text}
        multiline={true} numberOfLines={2} style={{flex:1, color:"white", padding:20,borderColor:"white",borderRadius:10, borderWidth:1}} placeholder="Write something here " placeholderTextColor="grey" ></TextInput>
      
        </View>
        {/* <LinearGradient colors={[ '#000000','#6b1d1d','#5c5d2d']} style={styles.linearGradient}> */}
        <View style={{ flexDirection:"row", marginLeft:20, marginRight:20, justifyContent:"space-between"}}>
            <TouchableOpacity onPress={this.handleSubmit}>
                <Text style={{fontWeight:'500', marginTop:5,   color:'white', backgroundColor:'black', padding:10, borderRadius:5}}>
                    POST
                </Text>
            </TouchableOpacity>
            
        </View>
        {/* </LinearGradient> */}
        
      </LinearGradient>
      </SafeAreaView>
        );
      }
      }

const styles= StyleSheet.create({
    inputContainer:{
  margin:10,
  padding:10,
  flexDirection:'row', borderColor:40, borderWidth:1, borderRadius:8
    },
            linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
    avatar:{
        width:50,
        height:50, borderRadius:25, marginRight:18, marginLeft:10
    }
  })

// function writeUserData(post){
//     firebase.database().ref('UsersList/').push({
//         post}).then((data)=>{
//         //success callback
//         console.log('data ' , data)
//     }).catch((error)=>{
//         //error callback
//         console.log('error ' , error)
//     })
// }
// function readUserData() {
//     firebase.database().ref('Users/').on('value', function (snapshot) {
//         console.log(snapshot.val())
//     });
// }