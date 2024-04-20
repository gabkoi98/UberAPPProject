import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SelectCartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Avialiable vechile</Text>
      <View>
        <Text>Toyata H</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 130,
    margin: 20,
  },

  heading: {
    fontSize: 20,
  },
});

export default SelectCartScreen;
