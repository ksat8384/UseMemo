import React, { useState, useMemo } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from "react-native";
import List from "./src/components/List";

const users = [
  { id: "a", name: "Batman" },
  { id: "b", name: "Superman" },
  { id: "c", name: "Ironman" },
  { id: "d", name: "Hulk" },
  { id: "e", name: "BlackWidow" },
  { id: "f", name: "Thor" },
  { id: "g", name: "Captain America" },
  { id: "h", name: "Hawkeye" },
  { id: "i", name: "Spiderman" },
  { id: "j", name: "Antman" },
];

const App = () => {
  // console.log('Rendering App... ');
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleText = (text) => {
    console.log(text);
    setText(text);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  /*
  Without useMemo, filter function will run for every key stroke the user types into the 
  input field eventhough filteredUsers only change when the search state changes and not 
  when text state changes.

  Try it yourself: Typing something into the input field shouldn't trigger the logging,
  but executing the search with the button click will trigger it.
  */
  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        console.log("Filter function is running...");
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        testID="input"
        style={styles.input}
        placeholder="Enter search term here..."
        value={text}
        onChangeText={handleText}
      />

      <Button testID="search" title="Search" onPress={handleSearch} />

      <List list={filteredUsers} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    backgroundColor: "white",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});

export default App;
