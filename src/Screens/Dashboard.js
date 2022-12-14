import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/MaterialIcons";
import BottomNavigation from "../Components/Navigation/BottomNavigation";
import { useNavigation } from "@react-navigation/native";

const WIDTH = Dimensions.get("window").width;

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <View
          style={{
            flexDirection: "row",
            width: WIDTH,
            backgroundColor: "white",
            paddingBottom: 14,

            elevation: 6,
          }}
        >
          <TouchableOpacity>
            <Image
              style={tw`h-7 w-40 mt-4 ml-8 `}
              source={require("../Assets/Images/logo.webp")}
              resizeMode={"cover"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="notifications"
              size={30}
              color="#555555"
              style={tw`ml-15 mt-3`}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="call" size={30} color="#555555" style={tw`ml-4 mt-3`} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("QrCodeScanner");
            }}
          >
            <Icon
              name="qr-code-scanner"
              size={30}
              color="#555555"
              style={tw`ml-4 mt-3`}
            />
          </TouchableOpacity>
        </View>
      </View>
      <BottomNavigation />
    </>
  );
};

export default Dashboard;
