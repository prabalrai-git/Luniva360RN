import { View, Text, Dimensions } from "react-native";
import React from "react";
import Backbtn from "./Backbtn";

const WIDTH = Dimensions.get("window").width;
const CommonHeader = ({ Title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: WIDTH,
        backgroundColor: "white",
        paddingBottom: 5,

        elevation: 6,
      }}
    >
      <Backbtn />
      <Text style={{ marginLeft: 10, marginTop: 20, fontSize: 18 }}>
        {Title}
      </Text>
    </View>
  );
};

export default CommonHeader;
