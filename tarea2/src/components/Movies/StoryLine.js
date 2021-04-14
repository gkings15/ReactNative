import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    text: {
        padding: 10,
        textAlign: 'justify',
        fontStyle: 'italic',
    }
});

export default class StoryLine extends Component {
    constructor(props) {
        super(props)

        this.state = {

        };
    }
    render() {
        const { storyline } = this.props;
        return (
            <Text style={styles.text}>
                {storyline}
            </Text>
        );
    };
};