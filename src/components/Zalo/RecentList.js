import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import {recentListData} from "../../Data";
import Icon from 'react-native-vector-icons/Entypo';

export default class RecentList extends Component {
    renderItem = () => {
        return recentListData.map( item => (
            <View style={styles.RecentItem} key={item.id}>
                <Image style={styles.Avatar} source={item.avatar}/>
                <Text style={styles.RecentName}>{item.name}</Text>
            </View>
        ))
    }
    render() {
        return (
            <View>
                <Text style={styles.Title}><Icon name="back-in-time" size={20}/> Danh sách tìm kiếm gần đây</Text>
                <ScrollView
                    horizontal 
                    showsHorizontalScrollIndicator={false}>
                    {this.renderItem()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        marginHorizontal: 10
    },
    Avatar: {
        borderRadius: 50,
        height: 70,
        width: 70
    },
    RecentItem: {
        alignItems: 'center',
        margin: 5      
    },
    RecentName: {
        marginVertical: 5,
        fontWeight: '700'
    }
})
