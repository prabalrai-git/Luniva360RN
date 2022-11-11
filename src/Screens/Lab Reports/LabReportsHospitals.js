import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Linking,
} from "react-native";
import React from "react";
import { openBrowserAsync } from "expo-web-browser";

const URL =
  "https://lunivacare.crystaldiagnosticlab.com/crystal/Carelab/Report/Account/Login";
const WIDTH = Dimensions.get("window").width;
const LabReportsHospitals = () => {
  const data = [
    { id: 1, name: "NRL", img: require("../../Assets/Images/nrl.jpg") },
    {
      id: 2,
      name: "Samjhana Laboratory",
      img: require("../../Assets/Images/samjhana.jpg"),
    },
    {
      id: 3,
      name: "Crystal Diagonistic",
      img: require("../../Assets/Images/crystal.jpg"),
    },
    {
      id: 4,
      name: "ManMohan Memorial",
      img: require("../../Assets/Images/manmohan.jpg"),
    },
  ];

  return (
    <View
      style={{
        marginTop: 30,
        width: WIDTH * 0.95,
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 30 }}>
        Lab Reports
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {data.map((item) => {
          return (
            <View
              style={{
                width: WIDTH * 0.275,
                marginBottom: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  padding: 20,
                  paddingTop: 15,
                  paddingBottom: 15,
                  borderRadius: 14,
                  backgroundColor: "white",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,

                  elevation: 4,
                }}
                onPress={() => {
                  openBrowserAsync(URL);
                }}
              >
                <Image
                  source={item.img}
                  style={{ height: 70, width: 70 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={{ textAlign: "center", marginTop: 8 }}>
                {item.name}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default LabReportsHospitals;
