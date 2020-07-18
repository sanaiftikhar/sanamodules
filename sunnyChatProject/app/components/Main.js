import React from 'react';
//import LinearGradient from 'react-native-linear-gradient';
import {LinearGradient} from "expo-linear-gradient";
import { Icon } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

class Main extends React.Component {
  static navigationOptions = {
  title: 'Chat',
  headerStyle: {
            backgroundColor: '#D3D3D3',    
          },
          headerTitleStyle: { alignSelf: 'center' },};

  state = {
    name: '',
  };

  onPress = () =>
    this.props.navigation.navigate('Chat', { name: this.state.name });

  onChangeText = name => this.setState({ name });

  render() {
    return (
      <LinearGradient colors={[ '#000000','#6b1d1d','#5c5d2d']} style={styles.linearGradient}>
      {/* <View> */}
        <Text style={styles.title}>Enter your name:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="Flutter God Evan Bacon"
          onChangeText={this.onChangeText}
          value={this.state.name}
        />
        <TouchableOpacity onPress={this.onPress}>
        <Icon  style={styles.icon}
                                 name="arrow-circle-right"
                                type='font-awesome-5'
                                color='#D3D3D3'
                                size={40}
                            />
          {/* <Text style={styles.buttonText}>-></Text> */}
        </TouchableOpacity>
      {/* </View> */}
      </LinearGradient>
    );
  }
}

const offset = 24;

const styles = StyleSheet.create({
  title: {
    color:"#D3D3D3",
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  icon:{
marginRight:offset
  },
  nameInput: {
    height: offset * 2,
    color: "#D3D3D3",
    margin: offset,
    paddingHorizontal: offset,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    borderRadius: 20
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
    color:"#D3D3D3"
  },
    linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
});

export default Main;
