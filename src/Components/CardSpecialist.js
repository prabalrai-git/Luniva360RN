import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const cardData = [
  {
    img: require("../Assets/Images/heart.png"),
    title: "Cardiologist",
    Doctors: 10,
    themeColor: "#856dff",
  },
  {
    img: require("../Assets/Images/lungs.png"),
    title: "Cardiologist",
    Doctors: 27,
    themeColor: "#fe6f6f",
  },
  {
    img: require("../Assets/Images/skull.png"),
    title: "Cardiologist",
    Doctors: 30,
    themeColor: "#fea17a",
  },
  {
    img: require("../Assets/Images/tooth.png"),
    title: "Cardiologist",
    Doctors: 17,
    themeColor: "#4688b3",
  },
  {
    img: require("../Assets/Images/wheelchair.png"),
    title: "Cardiologist",
    Doctors: 20,
    themeColor: "#7db360",
  },
  {
    img: require("../Assets/Images/brain.png"),
    title: "Cardiologist",
    Doctors: 5,
    themeColor: "#cc6d45",
  },
];

const WIDTH = Dimensions.get("window").width;

const CardSpecialist = () => {
  return (
    <View
      style={[
        tw`mx-auto mb-5`,
        { flexDirection: "row", flexWrap: "wrap", width: WIDTH * 0.98 },
      ]}
    >
      {cardData.map((item) => {
        return (
          <TouchableOpacity
            style={{
              width: WIDTH * 0.29,
              padding: 10,
              backgroundColor: item.themeColor,
              margin: 5,
              borderRadius: 15,
              height: 130,
            }}
            id={item.name}
          >
            <Image source={item.img} style={tw`mx-auto m-4`} />
            <Text style={{ textAlign: "center", color: "white" }}>
              {item.title}
            </Text>
            <Text style={{ textAlign: "center", color: "white" }}>
              {item.Doctors} Doctors
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CardSpecialist;
