import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Backbtn from "../../Common/Backbtn";
import tw from "twrnc";
import CommonBtn from "../../Common/CommonBtn";
import DateTimePicker from "@react-native-community/datetimepicker";

const SetPassword = () => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const onChangeData = () => {
    setShow(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Backbtn />

      <Text style={[tw`text-center mt-10 text-3xl`, { color: "#205072" }]}>
        Create Profile
      </Text>
      <TextInput
        style={[
          tw`w-70 mx-auto mt-10`,
          { borderBottomColor: "grey", borderBottomWidth: 0.5 },
        ]}
        placeholder="Full Name"
      />
      <TextInput
        style={[
          tw`w-70 mx-auto mt-10`,
          { borderBottomColor: "grey", borderBottomWidth: 0.5 },
        ]}
        placeholder="Address"
      />
      <Pressable onPress={() => setShow(true)} style={{ marginTop: 30 }}>
        {/* <TextInput
          style={[
            tw`w-70 mx-auto mt-10`,
            { borderBottomColor: "grey", borderBottomWidth: 0.5 },
          ]}
          placeholder="DOB"
        /> */}
        <Text style={{ marginLeft: 56, color: "grey" }}>
          DOB (Date of Birth)
        </Text>
        <View
          style={{
            width: "73%",
            height: 1,
            backgroundColor: "grey",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        ></View>
      </Pressable>
      {
        show && (
          <DateTimePicker
            testID="dateTimePicker"
            // timeZoneOffsetInMinutes={0}
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChangeData}
            maximumDate={new Date()}
          />
        )

        // <Text>Potato</Text>
      }
      <TextInput
        style={[
          tw`w-70 mx-auto mt-10`,
          { borderBottomColor: "grey", borderBottomWidth: 0.5 },
        ]}
        placeholder="Gender"
      />
      <TextInput
        style={[
          tw`w-70 mx-auto mt-10`,
          { borderBottomColor: "grey", borderBottomWidth: 0.5 },
        ]}
        placeholder="New Password"
        secureTextEntry={true}
      />
      <TextInput
        style={[
          tw`w-70 mx-auto mt-10`,
          { borderBottomColor: "grey", borderBottomWidth: 0.5 },
        ]}
        placeholder="Re-Type Password"
        secureTextEntry={true}
      />

      <CommonBtn title={"Create"} navigateTo={"Login"} />
    </View>
  );
};

export default SetPassword;
