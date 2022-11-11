import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const SeeMoreBtn = () => {
  return (
    <TouchableOpacity
      style={[
        tw`mx-auto`,
        {
          borderColor: "#205072",
          width: 370,
          borderWidth: 2,
          padding: 13,
          marginTop: 20,
          borderRadius: 10,
        },
      ]}
    >
      <Text style={{ color: "#205072", textAlign: "center" }}>See More</Text>
    </TouchableOpacity>
  );
};

export default SeeMoreBtn;
