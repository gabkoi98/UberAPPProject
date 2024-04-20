import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const PickLocation = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
          <Text style={styles.DropdownText}>Robert International Airport</Text>
        </View>

        <View style={styles.tryContainer2}>
          <Text style={styles.PickupText}>Destination</Text>
          <Text style={styles.DropdownText}>Boulevard Palace, Sinkor</Text>
        </View>
        <View style={styles.dateTimeContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>Date</Text>
            <Text style={styles.dateText}>Feb 28, 2024</Text>
          </View>
          <View style={styles.hourContainer}>
            <Text style={styles.dateText}>Time</Text>
            <Text style={styles.dateText}>8: 30 PM</Text>
          </View>
        </View>

        <Pressable onPress={() => navigation.navigate("SelectCartScreen")}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Continue</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default PickLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 16,
    marginTop: 170,
    // margin: 0,
    // padding: 0,
  },

  background: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },

  lineStyle: {
    borderWidth: 2,
    borderColor: "gray",
    marginLeft: 120,
    marginTop: 30,
    width: 120,
    alignItems: "center",
  },

  work: {
    marginTop: -270,
    paddingLeft: 10,
  },

  tryContainer: {
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
    marginTop: 2,
  },

  vIcon: {
    fontSize: 30,
    // marginTop: 3,
  },

  vIcon2: {
    fontSize: 30,
    // marginTo: 10,
    marginTop: 19,
  },
  IconContainer: {
    marginTop: 70,
  },

  verticleLine: {
    height: "35%",
    width: 1,
    backgroundColor: "#909090",
    marginLeft: 15,
    marginTop: 5,
  },

  dateTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
    marginLeft: 30,
    paddingLeft: 3,
    // width: 0,
  },

  dateContainer: {
    backgroundColor: "#B4B4B3",
    padding: 18,
    borderRadius: 10,
  },

  hourContainer: {
    backgroundColor: "#B4B4B3",
    padding: 18,
    borderRadius: 10,
    width: 150,
  },

  dateText: {
    fontSize: 20,
  },

  buttonContainer: {
    backgroundColor: "#211951",
    borderRadius: 20,
    paddingVertical: 15,
    width: 300,
    padding: 28,
    marginLeft: 30,
  },

  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    padding: 5,
  },
});
