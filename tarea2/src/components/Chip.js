import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
    // backgroundColor: 'gray',
    margin: 5,
    borderRadius: 20,
  },
  text: {
    fontWeight: 'bold',
  },
});

const Chip = ({ value, pressable, onPress, backgroundColor = 'gray', color = '#bdc3c7' }) => (
  <TouchableOpacity
    disabled={!pressable}
    style={[styles.container, { backgroundColor }]}
    onPress={() => onPress(value)}
  >
    <Text style={[styles.text, { color }]}>{value}</Text>
  </TouchableOpacity>
);

export default Chip;
