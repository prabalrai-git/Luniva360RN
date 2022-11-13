import { View, Text, Image, PixelRatio } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../Screens/DashboardScreens/HomeScreen";
import Report from "../../Screens/DashboardScreens/Report";
import Appointment from "../../Screens/DashboardScreens/Appointment";
import Profile from "../../Screens/DashboardScreens/Profile";
import Ionicons from "react-native-vector-icons/Ionicons";
import tw from "twrnc";
import QrCodeScanner from "../../Screens/DashboardScreens/QrCodeScanner";

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Report") {
            iconName = "reader";
          } else if (route.name === "Scan") {
            iconName = "ios-qr-code-sharp";

            // return (
            //   <>
            //     <Ionicons
            //       name={iconName}
            //       size={size}
            //       color={focused ? "black" : "black"}
            //       // style={[
            //       //   tw`absolute bottom-4  `,
            //       //   {
            //       //     borderRadius: 36,
            //       //     backgroundColor: "#fc932c",
            //       //     padding: 6,
            //       //     shadowColor: "black",
            //       //     shadowOffset: { width: 5, height: 5 },
            //       //     shadowOpacity: 0.6,
            //       //     elevation: 6,
            //       //   },
            //       // ]}
            //     />
            //   </>
            // );
          } else if (route.name === "Appointment") {
            iconName = "md-today";
          } else if (route.name === "Profile") {
            return (
              <>
                <Image
                  source={require("../../Assets/Images/Doctor.png")}
                  resizeMode="contain"
                  style={[
                    tw`w-7 h-7 `,
                    {
                      backgroundColor: "#b7b9b8",
                      borderRadius: 30,
                    },
                  ]}
                />
                <Text
                  style={{
                    color: focused ? "#fc932c" : "black",
                    fontSize: 12,
                    marginBottom: 8,
                  }}
                >
                  {route.name}
                </Text>
              </>
            );
          }

          // You can return any component that you like here!
          return (
            <>
              <Ionicons name={iconName} size={size} color={color} />
              <Text
                style={{
                  color: focused ? "#fc932c" : "black",
                  fontSize: 12,
                  marginBottom: 8,
                }}
              >
                {route.name}
              </Text>
            </>
          );
        },
        tabBarActiveTintColor: "#fc932c",
        tabBarInactiveTintColor: "black",
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12, paddingBottom: 5 },
        tabBarStyle: { padding: 10, height: 60 },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarBadge: 3 }}
      />
      <Tab.Screen name="Report" component={Report} />
      {/* <Tab.Screen
        name="Scan"
        component={QrCodeScanner}
        options={{ tabBarStyle: { display: "none" } }}
      /> */}
      <Tab.Screen name="Appointment" component={Appointment} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
