import { ScrollView, View } from "react-native";
import Dashboard from "./src/Screens/Dashboard";
import GlobalStyles from "./src/Common/GlobalStyles";
import WelcomeScreen from "./src/Screens/login/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Screens/login/Login";
import SendOTP from "./src/Screens/login/SendOTP";
import OTPVerification from "./src/Screens/login/OTPVerification";
import SetPassword from "./src/Screens/login/SetPassword";
import LabReports from "./src/Screens/Lab Reports/LabReports";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <View style={GlobalStyles.droidSafeArea}>
        {/* <Dashboard /> */}
        <Stack.Navigator
          initialRouteName="WelcomeScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SendOTP" component={SendOTP} />
          <Stack.Screen name="OTPVerification" component={OTPVerification} />
          <Stack.Screen name="SetPassword" component={SetPassword} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="LabReports" component={LabReports} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}
