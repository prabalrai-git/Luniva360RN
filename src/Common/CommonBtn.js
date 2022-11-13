import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const CommonBtn = ({ title, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[
        tw`w-75 h-13  mt-10 mx-auto flex justify-center rounded-md `,
        { backgroundColor: "#205072" },
      ]}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    >
      <Text style={[tw`text-center text-white font-normal`]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonBtn;
