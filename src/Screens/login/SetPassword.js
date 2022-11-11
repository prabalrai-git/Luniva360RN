import { View, Text, TextInput } from "react-native";
import React from "react";
import Backbtn from "../../Common/Backbtn";
import StarOfLife from "../../Common/StarOfLife";
import tw from "twrnc";
import CommonBtn from "../../Common/CommonBtn";

const SetPassword = () => {
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
      <Text style={[tw`text-center mt-5 text-2xl`, { color: "#205072" }]}>
        Set Your Password
      </Text>
      <TextInput
        style={[
          tw`w-70 mx-auto mt-15`,
          { borderBottomColor: "grey", borderBottomWidth: 0.5 },
        ]}
        placeholder="New Password"
      />
      <TextInput
        style={[
          tw`w-70 mx-auto mt-10`,
          { borderBottomColor: "grey", borderBottomWidth: 0.5 },
        ]}
        placeholder="Re-Type Password"
      />
      <CommonBtn title={"Save & Login"} />
    </View>
  );
};

export default SetPassword;
