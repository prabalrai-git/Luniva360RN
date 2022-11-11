import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const CardFeatures = () => {
  const featureCardData = [
    {
      id: 1,
      img: require("../Assets/Images/laboratory.png"),
      text: `Book\nLab Tests`,
    },
    {
      id: 2,
      img: require("../Assets/Images/Doctor2.png"),
      text: "Doctor Appointment",
    },
  ];

  return (
    <>
      <View
        style={[
          tw`flex-row justify-around h-44 `,
          { backgroundColor: "#f5f5f5" },
        ]}
      >
        {featureCardData.map((item) => {
          const id = item.id;
          return (
            <View
              style={[
                tw`justify-center items-center mt-3 `,
                {
                  width: 90,
                  height: 90,
                  backgroundColor: id === 1 ? "#d8ecfd" : "#d1f0de",
                  borderRadius: 10,
                },
              ]}
              key={item.id}
            >
              <Image
                style={tw`h-19 w-16 mt-10`}
                source={item.img}
                resizeMode={"cover"}
              />
              <Text
                style={[
                  tw`relative top-5 text-center font-semibold`,
                  { color: "#205072" },
                ]}
              >
                {item.text}
              </Text>
            </View>
          );
        })}
      </View>
    </>
  );
};

export default CardFeatures;
