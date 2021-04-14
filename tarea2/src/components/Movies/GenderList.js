import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Chip from '../Chip';
import Icon from 'react-native-vector-icons/FontAwesome5'
import colors from '../config/colors';

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        margin: 20,
    },
});

const GenderList = ({ genres }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FlatList
            style={styles.container}
            data={genres}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(genreName) => { return genreName }}
            renderItem={({ item: genreName }) => <Chip value={genreName} backgroundColor={colors[genreName]} color='white' />}
        />
    </View>
);

export default GenderList;