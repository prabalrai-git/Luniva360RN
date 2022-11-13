import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React from "react";
import tw from "twrnc";
import FeaturesCarousel from "../../Components/FeaturesCarousel";
import TestCheckups from "../../Components/Test&Checkups";
import CardFeatures from "../../Components/CardFeatures";
import Specialist from "../../Components/Specialist";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={[{ flex: 1, backgroundColor: "white" }]}>
        {/* <View style={tw`mx-6`}>
        <View
          style={[
            tw`mt-5`,
            { flexDirection: "row", justifyContent: "space-between" },
          ]}
        >
          <Text style={[tw`text-2xl `, { color: " rgb(32, 80, 114)" }]}>
            Good Evening{"\n"}Alexis
          </Text>
          <Image
            source={require("../../Assets/Images/Doctor.png")}
            resizeMode="contain"
            style={[
              tw`w-15 h-15 `,
              {
                backgroundColor: "rgba(67, 121, 159, 1)",
                borderRadius: 30,
              },
            ]}
          />
        </View>
        <Text style={tw`mt-3 mb-2`}>
          Your target for today is to keep positive{"\n"}mindset and smile to
          everyone you meet
        </Text>
      </View> */}
        <CardFeatures />
        <FeaturesCarousel />
        {/* Test and Checkups */}

        <TestCheckups />
        <Specialist />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
