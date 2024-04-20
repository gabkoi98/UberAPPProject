import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SelectCartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Available vehicle</Text>
      <View style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="car-side" size={30} color="black" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.carNameText}>Toyata H</Text>
          <Text style={styles.seatText}>4 Seats</Text>
        </View>
        <Text style={styles.priceText}>$120.00</Text>
      </View>

      <View style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="car-side" size={30} color="black" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.carNameText}>Toyata H</Text>
          <Text style={styles.seatText}>4 Seats</Text>
        </View>
        <Text style={styles.priceText}>$120.00</Text>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="car-side" size={30} color="black" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.carNameText}>Toyata H</Text>
          <Text style={styles.seatText}>4 Seats</Text>
        </View>
        <Text style={styles.priceText}>$120.00</Text>
      </View>

      <Pressable>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Book a Ride </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 130,
    margin: 10,
  },

  heading: {
    fontSize: 20,
    marginBottom: 20,
  },

  itemContainer: {
    flexDirection: "row",
    borderWidth: 1,
    width: 335,
    padding: 14,
    marginTop: 30,
    alignItems: "center",
    borderRadius: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,

    justifyContent: "center",
    borderWidth: 1,
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 10,
  },

  priceText: {
    marginLeft: "auto",
    fontSize: 18,
  },

  carNameText: {
    fontSize: 23,
  },

  seatText: {
    fontSize: 18,
  },

  //  button styes

  buttonContainer: {
    backgroundColor: "#211951",
    borderRadius: 15,
    paddingVertical: 18,
    padding: 28,
    marginTop: 45,
  },

  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    padding: 5,
    fontWeight: "bold",
  },
});

export default SelectCartScreen;
