import { ScrollView, View } from "react-native";
import Dashboard from "./src/Screens/Dashboard";
import GlobalStyles from "./src/Common/GlobalStyles";
import { NavigationContainer } from "@react-navigation/native";

import HomeStack from "./src/Components/Navigation/HomeStack";

export default function App() {
  return (
    <NavigationContainer>
      <View style={GlobalStyles.droidSafeArea}>
        {/* <Dashboard /> */}
        <HomeStack />
      </View>
    </NavigationContainer>
  );
}
