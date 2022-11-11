import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";

const WIDTH = Dimensions.get("window").width;

const Report = () => {
  const navigation = useNavigation();

  const data = [
    {
      name: "Lab Reports",
      id: 1,
      nav: "LabReports",

      image: require("../../Assets/Images/labReports.jpg"),
    },
    {
      name: "Radiology",
      nav: "Radiology",
      id: 2,

      image: require("../../Assets/Images/radiology.jpg"),
    },
    {
      name: "Medical Report",
      nav: "MedicalReport",
      id: 3,

      image: require("../../Assets/Images/medicalReport.jpg"),
    },
    {
      name: "Prescription",
      nav: "Prescription",
      id: 4,

      image: require("../../Assets/Images/prescription.jpg"),
    },
    {
      name: "Medical Bill",
      nav: "MedicalBill",
      id: 5,

      image: require("../../Assets/Images/medicalBills.jpg"),
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* <Text style={{ marginLeft: 24, marginTop: 20, fontSize: 30 }}>
        Reports
      </Text> */}
      <View
        style={{
          // marginTop: 40,
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: WIDTH * 0.9,
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        {data.map((item) => {
          return (
            <TouchableOpacity
              style={{
                // backgroundColor: "white",
                // padding: 30,
                width: WIDTH * 0.4,
                marginTop: 40,
              }}
              onPress={() => navigation.navigate(item.nav)}
              key={item.id}
            >
              <ImageBackground
                source={item.image}
                imageStyle={{
                  borderRadius: 16,
                }}
                resizeMode="cover"
                style={{ height: 120 }}
              >
                <BlurView
                  intensity={180}
                  style={{
                    position: "absolute",
                    top: 90,
                    // left: 25,
                    width: WIDTH * 0.4,
                    height: 30,
                    backgroundColor: "rgba(255, 255, 255, 0.01)",
                    borderBottomEndRadius: 15,
                    borderBottomLeftRadius: 15,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      color: "#205072",
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </Text>
                </BlurView>
              </ImageBackground>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Report;
