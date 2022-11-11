import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import StarOfLife from "../../Common/StarOfLife";
import Backbtn from "../../Common/Backbtn";
import tw from "twrnc";
import CommonBtn from "../../Common/CommonBtn";

const SendOTP = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Backbtn />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <StarOfLife />
        <StarOfLife />
      </View>
      <Image
        style={tw`h-24 w-30 mt-9 mx-auto  `}
        source={require("../../Assets/Images/Verification.png")}
        resizeMode={"cover"}
      />
      <Text style={tw`text-center mt-5 text-lg text-gray-400`}>
        Enter your mobile number and we will send {"\n"}you the OTP for
        verification
      </Text>
      <TextInput
        style={[
          tw`w-70 mx-auto mt-15`,
          { borderBottomColor: "grey", borderBottomWidth: 0.5 },
        ]}
        placeholder="Your Mobile Number"
        keyboardType="numeric"
      />
      <TextInput
        style={[
          tw`w-70 mx-auto mt-15`,
          { borderBottomColor: "grey", borderBottomWidth: 0.5 },
        ]}
        placeholder="Your Email"
      />
      <CommonBtn title={"Register"} navigateTo={"OTPVerification"} />
      <Text style={[tw`text-center mt-5 `, { color: "#e95420" }]}>
        By Registering You Are Accepting Out {"\n"} Terms & Conditions
      </Text>
    </View>
  );
};

export default SendOTP;
