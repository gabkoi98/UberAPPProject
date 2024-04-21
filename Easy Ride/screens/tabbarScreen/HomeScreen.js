import {
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.heroheader}>
        <Text style={styles.greetText}>Hi, Gabriel</Text>
        <Image
          style={styles.hereImage}
          source={require("../../assets/user.png")}
        />
      </View>

      <View style={styles.requestContainer}>
        <Text style={styles.requestText}>
          Request now, Ride When you're Ready
        </Text>
        <Text style={styles.keyMessage}>
          Hasles-free pickup with flexibility to add time for unexpected delays.
        </Text>
      </View>

      <View style={styles.verticalLIneConrtainer}>
        <MaterialIcons
          style={styles.vIcon2}
          name="my-location"
          size={20}
          color="black"
        />
        <View style={styles.verticleLine}></View>
        <Entypo
          style={styles.vIcon}
          name="location-pin"
          size={20}
          color="black"
        />

        <View style={styles.workContainer}>
          <View style={styles.inputContainer}>
            {/* <Pressable onPress={() => navigation.navigate("PickLocation")}> */}
            <Text style={styles.inputText}>Pickup Location</Text>

            {/* <TextInput
              style={styles.input}
              placeholder="Pickup Location"
              placeholderTextColor={"#000"}
            /> */}
            {/* </Pressable> */}
          </View>

          <View style={styles.inputContainer}>
            <Pressable onPress={() => navigation.navigate("PickLocation")}>
              <Text style={styles.inputText}>Destination</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.reacentContainer}>
          <Text style={styles.recentText}>Recent Pickups</Text>

          <View style={styles.timepickContainer}>
            <AntDesign
              style={styles.Iconclock}
              name="clockcircleo"
              size={18}
              color="#B4B4B3"
            />
            <View style={styles.Locationtimecontainer}>
              <Text style={styles.locaText}>Boulevard Palace, Sinkor</Text>
              <Text style={styles.dateTime}>April 1 , 2024 at 8:30 Pm</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    marginTop: 60,
  },

  verticalLIneConrtainer: {
    width: "100%",
    // marginBottom: 20,
    // marginLeft: 8,
    marginTop: 30,
  },

  vIcon: {
    // fontSize: 30,
    // paddingTop: -53,
    paddingTop: -1,
  },

  vIcon2: {
    // fontSize: 30,
    paddingBottom: -7,
  },

  verticleLine: {
    height: "19%",
    width: 1,
    backgroundColor: "#909090",
    marginLeft: 10,
    marginTop: 5,
  },

  hereImage: {
    width: 40,
    height: 40,
    // marginTop: 15,
  },

  heroheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  greetText: {
    fontSize: 20,
    // fontWeight: "bold",
  },

  requestText: {
    fontSize: 25,
    color: "black",
  },

  requestContainer: {
    marginTop: 35,
    marginBottom: 25,
  },

  keyMessage: {
    fontSize: 15,
    marginTop: 10,
  },
  keyMessage2: {
    fontSize: 16,
  },

  workContainer: {
    marginTop: -115,
    gap: 25,
  },

  inputContainer: {
    top: 0,
    left: 32,
    backgroundColor: "#B4B4B3",
    borderRadius: 5,
    padding: 13,
    width: "86%",
  },

  input: {
    padding: 0,
    margin: 0,
  },

  // inputText: {
  //   color: "white",
  //   fontSize: 18,
  // },

  line: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10,
    margin: 5,
    marginTop: 45,
  },

  reacentContainer: {
    marginLeft: 5,
  },

  recentText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  timepickContainer: {
    flexDirection: "row",
    marginTop: 5,
  },

  Iconclock: {
    marginTop: 12,
    // marginLeft: 10,
  },

  Locationtimecontainer: {
    marginLeft: 15,
  },

  locaText: {
    fontSize: 17,
    color: "black",
  },

  dateTime: {
    fontSize: 15,
  },
});
export default HomeScreen;
