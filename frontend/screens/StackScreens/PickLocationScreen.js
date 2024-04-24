import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";

const PickLocation = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.work}>
        <View style={styles.tryContainer}>
          <Text style={styles.PickupText}>Pickup Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Robert International Airport"
            placeholderTextColor={"#000"}
          />
        </View>

        <View style={styles.tryContainer2}>
          <Text style={styles.PickupText}>Destination</Text>
          <TextInput
            style={styles.input}
            placeholder="Boulevard Palace, Sinkor"
            placeholderTextColor={"#000"}
          />
        </View>
        <View style={styles.dateTimeContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.PickupText}>Date</Text>
            <Text style={styles.dateText} onPress={showDatepicker}>
              {date.toLocaleDateString(undefined, options)}
            </Text>
          </View>
          <View style={styles.hourContainer}>
            <Text style={styles.PickupText}>Time</Text>

            <Text style={styles.dateText} onPress={showTimepicker}>
              {date.toLocaleTimeString("en-US")}
            </Text>
          </View>
        </View>
        <Pressable onPress={() => navigation.navigate("SelectCartScreen")}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Continue</Text>
          </View>
        </Pressable>
        
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            display="spinner"
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default PickLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    paddingHorizontal: 20,
  },

  input: {
    fontSize: 18,
  },

  work: {},

  tryContainer: {
    backgroundColor: "#e8e8e8",
    borderRadius: 10,
    padding: 10,
  },

  tryContainer2: {
    backgroundColor: "#e8e8e8",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },

  PickupText: {
    color: "gray",
    fontSize: 16,
  },

  dateTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  dateContainer: {
    backgroundColor: "#e8e8e8",
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },

  hourContainer: {
    backgroundColor: "#e8e8e8",
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },

  dateText: {
    fontSize: 16,
  },

  buttonContainer: {
    backgroundColor: "#211951",
    borderRadius: 5,
    padding: 12,
    marginTop: 30,
  },

  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
