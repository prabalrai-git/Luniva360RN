import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import tw from "twrnc";

const StarOfLife = () => {
  return (
    <Icon name="star-of-life" size={30} color="#fbac5f" style={tw`ml-3`} />
  );
};

export default StarOfLife;
