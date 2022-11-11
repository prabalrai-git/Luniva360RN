import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import StarOfLife from "../../Common/StarOfLife";
import Icon from "react-native-vector-icons/FontAwesome5";
import CommonBtn from "../../Common/CommonBtn";
import Backbtn from "../../Common/Backbtn";

const Login = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Backbtn />
      <View
        style={[
          tw`mt-10 mr-5`,
          {
            flexDirection: "row",
            justifyContent: "center",
            // alignItems: "center",
          },
        ]}
      >
        <StarOfLife />
        <StarOfLife />
      </View>
      <Text
        style={[tw`text-center mt-7 text-5xl font-thin`, { color: "#205072" }]}
      >
        Login
      </Text>
      <Text style={[tw`text-center mt-4 text-lg mb-10`, { color: "grey" }]}>
        Enter Your Login Details To Access{"\n"} Your Account
      </Text>
      <View style={[tw`mx-auto mb-10`, styles.inputSection]}>
        <Icon
          name="phone-square-alt"
          size={22}
          color="#e95420"
          style={[tw`ml-3 pr-5`, styles.inputIcon]}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="numeric"
        />
      </View>
      <View style={[tw`mx-auto`, styles.inputSection]}>
        <Icon
          name="user-lock"
          size={21}
          color="#e95420"
          style={[tw`ml-3`, styles.inputIcon]}
        />
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <CommonBtn title={"Login"} navigateTo={"Dashboard"} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputSection: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "black",

    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 2,
    backgroundColor: "white",
    width: 300,
    borderRadius: 4,
  },
  inputIcon: {
    padding: 14,
    borderWidth: 2,
    borderColor: "white",
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
});
