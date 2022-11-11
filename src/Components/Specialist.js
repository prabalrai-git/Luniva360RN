import { View, Text, Dimensions } from "react-native";
import React from "react";
import tw from "twrnc";
import CardSpecialist from "./CardSpecialist";
import SeeMoreBtn from "../Common/SeeMoreBtn";

const WIDTH = Dimensions.get("window").width;
const Specialist = () => {
  return (
    <View style={{ backgroundColor: "#f5f5f5", marginBottom: 100 }}>
      <View style={[tw`mx-auto`, { width: WIDTH * 0.94 }]}>
        <Text
          style={[
            tw` text-xl `,
            { color: "#205072", marginBottom: 10, marginTop: 20 },
          ]}
        >
          Specialist
        </Text>
        <Text style={[tw` mb-4`]}>
          Your target for today is to keep positive mindset and smile to
          everyone you meet.
        </Text>
        <CardSpecialist />
        <SeeMoreBtn />
      </View>
    </View>
  );
};

export default Specialist;
