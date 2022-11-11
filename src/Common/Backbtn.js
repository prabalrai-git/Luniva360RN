import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Backbtn = ({}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon
        style={{ marginLeft: 20, marginTop: 20 }}
        name="arrow-back"
        size={30}
        color="black"
      />
    </TouchableOpacity>
  );
};

export default Backbtn;
