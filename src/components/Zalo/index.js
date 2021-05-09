import React, { Component } from 'react'
import { StyleSheet, Platform, SafeAreaView } from 'react-native'
import RecentList from './RecentList'
import SuggestionList from './SuggestionList'

export default class Zalo extends Component {
    render() {
        return (
            <SafeAreaView  style={styles.Container}>
                <RecentList/>
                <SuggestionList/>
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingVertical: Platform.OS === 'android' ? 25 : 0,
    }
})
