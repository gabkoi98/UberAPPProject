import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const PickLocation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.verticalLIneConrtainer}>
          <View style={styles.IconContainer}>
            <MaterialIcons
              style={styles.vIcon2}
              name="my-location"
              size={24}
              color="black"
            />
            <View style={styles.verticleLine}></View>
            <Entypo
              style={styles.vIcon}
              name="location-pin"
              size={24}
              color="black"
            />
          </View>
        </View>

        <View style={styles.work}>
          <View style={styles.tryContainer}>
            <Text style={styles.PickupText}>Pickup Location</Text>
            <Text style={styles.DropdownText}>
              Robert International Airport
            </Text>
          </View>

          <View style={styles.tryContainer2}>
            <Text style={styles.PickupText}>Destination</Text>
            <Text style={styles.DropdownText}>Boulevard Palace, Sinkor</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PickLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    marginTop: 170,
    margin: 0,
    padding: 0,
  },

  background: {
    backgroundColor: "red",
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    // marginTop:100
  },

  work: {
    // position: "relative",
    marginTop: -239,
    paddingLeft: 10,
    // marginTop: 10,
  },

  tryContainer: {
    // position: "absolute",
    top: 0,
    left: 32,
    backgroundColor: "#B4B4B3",
    borderRadius: 10,
    padding: 10,
    width: "86%",
  },

  tryContainer2: {
    marginLeft: 32,
    backgroundColor: "#B4B4B3",
    borderRadius: 10,
    padding: 10,
    width: "86%",
    marginTop: 10,
  },

  PickupText: {
    color: "gray",
    fontSize: 20,
  },

  DropdownText: {
    fontSize: 23,
  },

  verticalLIneConrtainer: {
    width: "100%",
    marginBottom: 20,
    marginLeft: 8,
    marginTop: 150,
  },

  vIcon: {
    fontSize: 30,
    marginTop: 3,
  },

  vIcon2: {
    fontSize: 30,
    // marginTop: 2,
    marginBottom: 10,
  },
  IconContainer: {
    marginTop: 50,
  },

  verticleLine: {
    height: "40%",
    width: 1,
    backgroundColor: "#909090",
    marginLeft: 15,
  },
});
