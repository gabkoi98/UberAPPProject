import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function HomeScreen() {
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
        <View style={styles.work}>
          <View style={styles.tryContainer}>
            <Text style={styles.PickupText}>pickup Location</Text>
          </View>
          <View style={styles.tryContainer2}>
            <Text style={styles.PickupText}>pickup Location</Text>
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
    // paddingTop: 70,
    justifyContent: "space-evenly",
    width: "100%",
    // marginBottom: 20,
    marginTop: 30,
    marginLeft: 20,
  },
  vIcon: {
    fontSize: 30,
    marginTop: -20,
  },

  vIcon2: {
    fontSize: 30,
    marginTop: -20,
  },
  verticleLine: {
    height: "40%",
    width: 1,
    backgroundColor: "#909090",
    marginLeft: 15,
    marginTop: -30,
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

  // this is for the try
  tryContainer: {
    marginLeft: 32,
    marginTop: -200,
    backgroundColor: "gray",
    borderRadius: 10,
    padding: 23,
    width: "85%",
  },
  tryContainer2: {
    // flex:1,
    marginLeft: 32,
    marginTop: -170,
    backgroundColor: "gray",
    borderRadius: 10,
    padding: 23,
    width: "85%",
  },

  PickupText: {
    fontSize: 20,
  },

  work: {
    marginTop: 100,
  },
});
export default HomeScreen;
