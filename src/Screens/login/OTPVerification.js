import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import StarOfLife from "../../Common/StarOfLife";
import Backbtn from "../../Common/Backbtn";
import tw from "twrnc";
import CommonBtn from "../../Common/CommonBtn";

const OTPVerification = () => {
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
        {/* <StarOfLife />
        <StarOfLife /> */}
      </View>
      <Text style={tw`text-4xl text-center mt-5`}>Verification</Text>

      <Text style={[tw`text-center text-sm mt-5`, { color: "#205072" }]}>
        You will get an OTP via SMS or Email
      </Text>
      <TextInput
        style={[
          tw`w-70 mx-auto mt-15`,
          { borderBottomColor: "grey", borderBottomWidth: 0.5 },
        ]}
        placeholder="Received Code"
        keyboardType="numeric"
        secureTextEntry={true}
      />
      <CommonBtn title={"Verify"} navigateTo={"SetPassword"} />
      <Text
        style={{
          color: "grey",
          textAlign: "center",
          marginTop: 18,
        }}
      >
        Didn't Receive the verification OTP?
        <Text
          style={[
            tw`  font-bold`,
            {
              color: "#e95420",
              textDecorationLine: "underline",
              // backgroundColor: "black",
            },
          ]}
          onPress={() => console.log("hello world")}
        >
          {" "}
          Resend Code?
        </Text>
      </Text>
    </View>
  );
};

export default OTPVerification;
