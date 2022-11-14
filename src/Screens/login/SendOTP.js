import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import StarOfLife from "../../Common/StarOfLife";
import Backbtn from "../../Common/Backbtn";
import tw from "twrnc";
import CommonBtn from "../../Common/CommonBtn";
import PhoneInput from "react-native-phone-number-input";

const WIDTH = Dimensions.get("window").width;

const SendOTP = () => {
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
        {/* <StarOfLife />
        <StarOfLife /> */}
      </View>
      <Image
        style={tw`h-24 w-30 mt-9 mx-auto  `}
        source={require("../../Assets/Images/Verification.png")}
        resizeMode={"cover"}
      />
      <Text style={tw`text-4xl text-center mt-5`}>Verification</Text>
      <Text style={tw`text-center mt-5 text-sm text-gray-400`}>
        Enter your mobile number or Email and we {"\n"}will send you the OTP for
        verification
      </Text>
      {/* <TextInput
        style={[
          tw`w-70 mx-auto mt-15`,
          { borderBottomColor: "grey", borderBottomWidth: 0.5 },
        ]}
        placeholder="Your Mobile Number"
        keyboardType="numeric"
      /> */}
      <View style={[tw`w-80 mx-auto mt-10 ml-10`]}>
        <PhoneInput
          defaultValue=""
          defaultCode="NP"
          layout="second"
          // withDarkTheme
          withShadow
          autoFocus
        />
      </View>
      {/* <TextInput
        style={[
          tw`w-70 mx-auto mt-15`,
          { borderBottomColor: "grey", borderBottomWidth: 0.5 },
        ]}
        placeholder="Your Email"
      /> */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        secureTextEntry={true}
      />
      <CommonBtn title={"Get OTP"} navigateTo={"OTPVerification"} />
      <Text style={[tw`text-center mt-5 `, { color: "#e95420" }]}>
        By Registering You Are Accepting Out {"\n"} Terms & Conditions
      </Text>
    </View>
  );
};

export default SendOTP;

const styles = StyleSheet.create({
  input: {
    // borderWidth: 1,
    // borderColor: "black",
    width: WIDTH * 0.8,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    padding: 12,
    //
    shadowColor: "black",

    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 6,
    backgroundColor: "white",
  },
});
