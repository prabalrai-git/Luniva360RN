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
        <StarOfLife />
        <StarOfLife />
      </View>
      <Text style={[tw`text-center text-2xl mt-5`, { color: "#205072" }]}>
        Verify Your Number With {"\n"} Code Sent To You
      </Text>
      <TextInput
        style={[
          tw`w-70 mx-auto mt-15`,
          { borderBottomColor: "grey", borderBottomWidth: 0.5 },
        ]}
        placeholder="Received Code"
        keyboardType="numeric"
      />
      <TouchableOpacity>
        <Text style={[tw`text-center mt-10 font-bold`, { color: "#e95420" }]}>
          Receive the Code, Resend Code?
        </Text>
      </TouchableOpacity>
      <CommonBtn title={"Continue"} navigateTo={"SetPassword"} />
    </View>
  );
};

export default OTPVerification;
