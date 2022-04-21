import React from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItem";

const List = ({ list }) => {
  //   console.log('Rendering List... ');

  const renderItem = ({ item }) => <ListItem key={item.id} item={item} />;

  return <FlatList testID="flat-list" data={list} renderItem={renderItem} />;
};

export default List;
