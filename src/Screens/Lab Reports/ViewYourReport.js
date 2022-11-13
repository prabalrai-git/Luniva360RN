import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import CommonHeader from "../../Common/CommonHeader";
import tw from "twrnc";
import { TextInput } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import CommonBtn from "../../Common/CommonBtn";
import { useNavigation } from "@react-navigation/native";

const WIDTH = Dimensions.get("window").width;

const ViewYourReport = () => {
  const navigation = useNavigation();

  return (
    <>
      <CommonHeader Title={"View Your Report"} />

      <View
        style={{
          width: WIDTH * 0.8,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 18 }}>
          Fill the information to get your Lab Report. You can also scan QR code
          which is provided on the bill
        </Text>
        <TextInput
          style={[
            tw`w-70 mx-auto mt-15`,
            // { borderBottomColor: "grey", borderBottomWidth: 0.5 },
          ]}
          placeholder="Report Code"
          keyboardType="numeric"
        />
        <TextInput
          style={[
            tw`w-70 mx-auto mt-15`,
            // { borderBottomColor: "grey", borderBottomWidth: 0.5 },
          ]}
          placeholder="Report Password"
          secureTextEntry={true}
        />
        <View
          style={{
            marginTop: 40,
            flexDirection: "row",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <View
            style={{
              width: 100,
              height: 2,
              backgroundColor: "grey",
              marginRight: 15,
            }}
          ></View>
          <Text
            style={{
              marginTop: -10,
              marginRight: 15,
              color: "#e95420",
              fontWeight: "bold",
            }}
          >
            OR
          </Text>
          <View
            style={{
              width: 100,
              height: 2,
              backgroundColor: "grey",
            }}
          ></View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("QrCodeScanner");
          }}
        >
          <Ionicons
            style={{ textAlign: "center", marginTop: 20 }}
            name="qr-code-sharp"
            size={60}
            color="#e95420"
          />
          <Text style={{ textAlign: "center" }}>Scan Code</Text>
        </TouchableOpacity>
        <CommonBtn title="Find Report" />
      </View>
    </>
  );
};

export default ViewYourReport;
