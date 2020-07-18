import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import {saveChart} from '../service';
import { Alert, TouchableOpacity,TouchableHighlight, Share, StyleSheet, FlatList, Button, Text, View, ActivityIndicator } from 'react-native';
import data from '../csv.json';
import {LinearGradient} from 'expo-linear-gradient';
export default class Charts1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      }
   // this.shareMessage=this.shareMessage.bind(this);
    //this.showResult=this.showResult.bind(this);
    //this.state={result:' '};
  }
 componentDidMount() {
    // fetch('http://billboard.modulo.site/rank/album/').then(
    //   (response)=>response.json()
    // ).then((responseJson)=>{
    this.setState({
      isLoading: false,
      dataSource: data.info
    })
    }
 FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator size="large" animating />
        </View>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => (
             <LinearGradient colors={[ '#000000','#6b1d1d','#5c5d2d']} style={styles.linearGradient}>
            <View style={{ marginTop: 20, marginBottom: 10 }}>
              <Text style={{ color:"white"}}>{item.Position} . Song: {item.Track}</Text>
              <Text style={{ color:"white"}}>     Artist: {item.Artist}</Text>
              <View style={{ marginTop: 2, flex: 1, flexDirection: "row", marginLeft: 70, marginRight: 40, justifyContent: 'space-between', width: "50%", alignItems: "center" }}>
              <TouchableOpacity onPress={  () => {saveChart(item.Track);
              Alert.alert( 'This song has been added to your liked lists' )}}> 
                <Icon reverse
                  name='heart'
                  type='feather'
                  color='purple'
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                   Share.share({message: 'Hey ! I would suggest you to listen to my favorite song => '  +
                    "Song: "+ item.Track + ' Sung By: '+ item.Artist+ "Link of the song: "+item.URL+ 
                    ". This song suggestion has been send by the W.O.R.M application."})
                }}> 
                <Icon reverse
                  name='sharealt'
                  type='antdesign'
                  color='purple' />
               </TouchableOpacity>
              </View>
            </View>
            </LinearGradient>
          )
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'orange',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
              linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  
  }
});