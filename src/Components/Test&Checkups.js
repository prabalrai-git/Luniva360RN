import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import CardTestandCheckups from "./CardTest&Checkups";
import CommonBtn from "../Common/CommonBtn";
import SeeMoreBtn from "../Common/SeeMoreBtn";

const width = Dimensions.get("window").width;

const TestCheckups = () => {
  return (
    <View style={{ backgroundColor: "#f5f5f5" }}>
      <View style={[tw`mt-4 mx-auto`, { width: width * 0.97 }]}>
        <Text
          style={[tw` text-xl ml-1`, { color: "#205072", marginBottom: 10 }]}
        >
          Test & Checkups
        </Text>
        <Text style={{ marginLeft: 6, marginBottom: 8 }}>
          Your target for today is to keep positive mindset and smile to
          everyone you meet.
        </Text>
        <CardTestandCheckups />
        <SeeMoreBtn />
      </View>
    </View>
  );
};

export default TestCheckups;
