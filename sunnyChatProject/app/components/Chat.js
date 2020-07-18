// @flow
import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat-fix'; // 0.3.0
import {LinearGradient} from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Fire from '../Fire';

type Props = {
  name?: string,
};

class Chat extends React.Component<Props> {

  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });

  state = {
    messages: [],
  };

  get user() {
    return {
       _id: Fire.shared.uid,
      name: this.props.navigation.state.params.name,
     
    };
  }

  render() {
     
    return (
          <LinearGradient colors={[ '#000000','#6b1d1d','#5c5d2d']} style={styles.linearGradient}>
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
       </LinearGradient>
    );
   
  }

  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}
const styles = StyleSheet.create({
        linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
})

export default Chat;
