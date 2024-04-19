import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable } from "react-native";

// Icons
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";


// Import your existing screen components here
// import HomeScreen from "../screens/HomeScreen";
// Import your existing screen components here
// import HomeScreen from "../screens/HomeScreen";
// import HomeScreen from "../screens/HomeScreen"


import HomeScreen from "../screens/tabbarScreen/HomeScreen";
import SettingScreen from "../screens/tabbarScreen/SettingScreen";
import ProfileScreen from "../screens/tabbarScreen/ProfileScreen";






const Tab = createBottomTabNavigator();
const HomeStackScreen = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator >
        {/* <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        /> */}
        <AuthStack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackGroup}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
          headerShown: false
        }}
      />
      
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: "Setting Sce",
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStackGroup = () => {
  return (
    <HomeStackScreen.Navigator>
      <HomeStackScreen.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home Screen",
          headerShown: false,
        }}
      />
      {/* <HomeStackScreen.Screen
        name="PickLocationScreen"
        component={PickLocationScreen}
        options={({ navigation }) => ({
          title: "Pick Location Screen",
          headerTitleAlign: "center",
          headerTransparent: true,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </Pressable>
          ),
        })}
      /> */}
      {/* <HomeStackScreen.Screen
        name="SelectCartScreen"
        component={SelectCartScreen}
        options={({ navigation }) => ({
          title: "Select Cart Screen",
          headerTitleAlign: "center",
          headerTransparent: true,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </Pressable>
          ),
        })}
      /> */}
    </HomeStackScreen.Navigator>
  );
};

export default AppNavigator;
