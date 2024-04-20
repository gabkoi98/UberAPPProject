import { StyleSheet, Text, Pressable, View, Image } from "react-native";
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
        <Text style={styles.requestText}>Request now, Ride When </Text>
        <Text style={styles.requestText}>you're Ready</Text>

        <Text style={styles.keyMessage}>
          Hasles-free pickup with flexibility to add time
        </Text>
        <Text style={styles.keyMessage2}>for unexpected delays.</Text>
      </View>

      <View style={styles.verticalLIneConrtainer}>
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

        <View style={styles.workContainer}>
          <View style={styles.tryContainer}>
            <Pressable onPress={() => navigation.navigate("PickLocation")}>
              <Text style={styles.PickupText}>pickup Location</Text>
            </Pressable>
          </View>

          <View style={styles.tryContainer2}>
            <Pressable onPress={() => navigation.navigate("PickLocation")}>
              <Text style={styles.PickupText}>Destination</Text>
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
              size={24}
              color="black"
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
    marginBottom: 20,
    marginLeft: 8,
    marginTop: 40,
  },

  vIcon: {
    fontSize: 30,
    marginTop: -3,
  },

  vIcon2: {
    fontSize: 30,
    marginBottom: -7,
  },

  verticleLine: {
    height: "20%",
    width: 1,
    backgroundColor: "#909090",
    marginLeft: 15,
    marginTop: 5,
  },

  hereImage: {
    width: 60,
    height: 60,
    marginTop: 15,
  },

  heroheader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  greetText: {
    fontSize: 20,
    fontWeight: "bold",
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
    fontSize: 16,
    marginTop: 20,
  },
  keyMessage2: {
    fontSize: 16,
  },

  workContainer: {
    marginTop: -140,
  },

  tryContainer: {
    top: 0,
    left: 32,
    backgroundColor: "#B4B4B3",
    borderRadius: 10,
    padding: 21,
    width: "86%",
  },

  tryContainer2: {
    marginLeft: 32,
    backgroundColor: "#B4B4B3",
    borderRadius: 10,
    padding: 21,
    width: "86%",
    marginTop: 23,
  },

  PickupText: {
    color: "white",
    fontSize: 18,
  },

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
    fontSize: 28,
    fontWeight: "bold",
  },

  timepickContainer: {
    flexDirection: "row",
    marginTop: 5,
  },

  Iconclock: {
    marginTop: 12,
    marginLeft: 10,
  },

  Locationtimecontainer: {
    marginLeft: 15,
  },

  locaText: {
    fontSize: 23,
    color: "black",
  },

  dateTime: {
    fontSize: 18,
  },
});
export default HomeScreen;
