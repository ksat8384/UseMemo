import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ListItem = ({item}) => {
  //   console.log('Rendering ListItem... ');
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#00ffff',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 32,
  },
});
