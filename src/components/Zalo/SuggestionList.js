import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { sugesstionListData } from "../../Data";

export default class SuggestionList extends Component {
    renderItem = ({item})=> (
        <View style={styles.SuggestionItem}>
            <Image style={styles.Avatar} source={item.avatar}/>
            <View style={styles.SuggestionInfo}>
                <Text style={styles.SuggestionName}>{item.name}</Text>
                <Text>{item.mutualFriend} bạn chung</Text>
            </View>
            <TouchableOpacity>
                <Text style={styles.Button}>Kết bạn</Text>
            </TouchableOpacity>
        </View>
    )
    render() {
        return (
            <>
                <View style={styles.SuggestionContainer}>
                    <Text style={styles.Title}>
                        <Icon name="user-friends" size={20}/> Gợi ý kết bạn
                    </Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={sugesstionListData}
                        renderItem={this.renderItem}
                        keyExtractor={(item)=> {
                            return item.id.toString()
                        }}
                    >
                    </FlatList>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    SuggestionContainer: {
        marginBottom: 25
    },
    Title: {
        fontSize: 20,
        fontWeight: '700',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    SuggestionItem: {
        backgroundColor: '#dcdee3',
        margin: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 10,
        paddingVertical: 10,
        borderRadius: 10
    },
    Avatar: {
        borderRadius: 50,
        height: 70,
        width: 70
    },
    SuggestionInfo: {
        flex: 1,
        paddingHorizontal: 5,
    },
    SuggestionName: {
        fontWeight: '700'
    },
    Button: {
        backgroundColor: '#cb9cd9',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    }
})
