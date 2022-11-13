import React from "react";
import WelcomeScreen from "../../Screens/login/WelcomeScreen";
import Login from "../../Screens/login/Login";
import SendOTP from "../../Screens/login/SendOTP";
import OTPVerification from "../../Screens/login/OTPVerification";
import SetPassword from "../../Screens/login/SetPassword";
import Dashboard from "../../Screens/Dashboard";
import LabReports from "../../Screens/Lab Reports/LabReports";
import ViewYourReport from "../../Screens/Lab Reports/ViewYourReport";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QrCodeScanner from "../../Screens/DashboardScreens/QrCodeScanner";
import BottomNavigation from "./BottomNavigation";

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen
        name="QrCodeScanner"
        component={QrCodeScanner}
        options={{ title: "Scan QR code" }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SendOTP" component={SendOTP} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
      <Stack.Screen name="SetPassword" component={SetPassword} />
      <Stack.Screen name="LabReports" component={LabReports} />
      <Stack.Screen name="ViewYourReport" component={ViewYourReport} />
    </Stack.Navigator>
  );
};

export default HomeStack;
