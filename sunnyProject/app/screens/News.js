import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
import {saveNews} from '../service';
import { Alert, TouchableOpacity, TouchableHighlight, Image, Share, StyleSheet, FlatList, Button, Text, View, ActivityIndicator } from 'react-native';
//import { StyleSheet,FlatList,Button, Text, View, ActivityIndicator } from 'react-native';
import data from '../news.json';
//import { TouchableHighlight } from 'react-native-gesture-handler';
export default class NewsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],

        }
        this.shareMessage = this.shareMessage.bind(this);
        this.showResult = this.showResult.bind(this);
        this.state = { result: ' ' };
    }

    componentDidMount() {
        // fetch('http://billboard.modulo.site/rank/album/').then(
        //   (response)=>response.json()
        // ).then((responseJson)=>{
        this.setState({
            isLoading: false,
            dataSource: data.news
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
showAlert = () => {
    saveNews("Liked")
        Alert.alert(
            'This news has been added to your liked lists'
        )
    }

    shareMessage() {
        <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
                <View style={{ marginTop: 20, marginBottom: 10 }}>

                    <Text style={styles.info}>{item.Position} . Song: {item.Category}</Text>
                    {/* <Text style={styles.info}>     Artist: {item.Artist}</Text> */}

                </View>
            )
            }
            keyExtractor={(item, index) => index.toString()}
        />
        Share.share({


            message: 'The news info has been send from "W.O.R.M" music app  => ' + this.state.dataSource.Artist + '  ' + this.state.dataSource.Track
        }).then(this.showResult);

    }
    showResult(result) {
        this.setState({ result })
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
            <View
            //  style={{ flex: 1, marginLeft: 25, marginRight: 10 }}
             >

                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({ item }) => (
                         <LinearGradient colors={['#000000','#6b1d1d','#5c5d2d']} style={styles.linearGradient}>
                        <View style={{ marginTop: 18, marginBottom: 10 }}>
                            <Text style={{fontWeight:'bold', color:"white",fontSize:30}}>{item.info}</Text>

                            <Text style={{color:"white"}}> Category  : {item.category}</Text>

                            <Image
                                style={{
                                    width: 300,
                                    height: 200,
                                    resizeMode: 'contain',
                                }}
                                source={{
                                    uri: item.imageSrc
                                }}
                            />
                            <View style={{ marginTop: 2, flex: 1, flexDirection: "row", marginLeft: 70, marginRight: 40, justifyContent: 'space-between', width: "50%", alignItems: "center" }}>

                                {/* <TouchableOpacity onPress={ this.showAlert}> */}
                                {/* <Button > */}
                                <TouchableOpacity onPress={this.showAlert}>
                                    <Icon reverse
                                        name='heart'
                                        type='feather'
                                        color='purple'
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.shareMessage}>
                                    <Icon reverse
                                        name='sharealt'
                                        type='antdesign'
                                        color='purple'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        </LinearGradient>
                    )}
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
    }, linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  
  }
});