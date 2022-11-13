import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import CommonBtn from "../../Common/CommonBtn";
import Icon from "react-native-vector-icons/FontAwesome5";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      {/* <Image
        source={require("../../Assets/Images/heart.png")}
        resizeMode={"cover"}
      /> */}
      <Icon
        style={[tw`h-20 mt-7  `, { fontSize: 82, textAlign: "center" }]}
        name="heartbeat"
        size={60}
        color="#e95420"
      />

      {/* <Image
        style={tw`h-12 w-50 mt-2 ml-25`}
        source={require("../../Assets/Images/luniva.png")}
        resizeMode={"cover"}
      /> */}
      <Text style={[tw` text-center mt-4 text-3xl`, { color: "#e95420" }]}>
        Luniva<Text style={{ color: "#7b7b7b" }}>360</Text>
      </Text>
      <Text style={[tw` mt-3 text-center text-gray-400 font-medium text-sm`]}>
        A health app made with
        {"\n"}love for seeking online medical help
      </Text>
      <Image
        style={tw`h-64 w-55 mt-6 ml-20 `}
        source={require("../../Assets/Images/Default.png")}
        resizeMode={"cover"}
      />
      <CommonBtn title={"Get Started"} navigateTo={"Login"} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SendOTP");
        }}
      >
        <Text style={[tw`font-medium mt-4 text-center`, { color: "#e95420" }]}>
          Have an account? Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
