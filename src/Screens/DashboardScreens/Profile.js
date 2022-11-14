import { View, Text } from "react-native";
import React from "react";
import CommonBtn from "../../Common/CommonBtn";

const Profile = () => {
  return (
    <View>
      <CommonBtn title={"Logout"} navigateTo={"WelcomeScreen"} />
    </View>
  );
};

export default Profile;
