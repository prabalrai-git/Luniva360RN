import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import tw from "twrnc";

const cardData = [
  { id: 1, title: "Whole Body Checkup", Price: "Rs.4500", Button: "Book Test" },
  { id: 2, title: "Whole Body Checkup", Price: "Rs.4500", Button: "Book Test" },
  { id: 3, title: "Whole Body Checkup", Price: "Rs.4500", Button: "Book Test" },
  { id: 4, title: "Whole Body Checkup", Price: "Rs.4500", Button: "Book Test" },
  { id: 5, title: "Whole Body Checkup", Price: "Rs.4500", Button: "Book Test" },
  { id: 6, title: "Whole Body Checkup", Price: "Rs.4500", Button: "Book Test" },
];

const cardTestData = [
  "RBC Test",
  "Urine Sample Test",
  "WBC Count Test",
  "Body Sugar Count",
];

const CardTestandCheckups = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {cardData.map((item) => {
        return (
          <View
            key={item.id}
            style={[
              {
                backgroundColor: "white",
                width: 220,
                borderRadius: 15,
                marginLeft: 3,
                marginRight: 10,
                marginTop: 5,
                marginBottom: 5,
                padding: 10,
                height: 210,
              },
            ]}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
              {item.title}
            </Text>
            {cardTestData.map((item) => {
              return (
                <View style={tw`flex-row`}>
                  <Icon
                    name="ios-checkmark-sharp"
                    size={20}
                    style={{ color: "green", marginRight: 5 }}
                  />
                  <Text style={{ color: "grey", lineHeight: 27 }}>{item}</Text>
                </View>
              );
            })}
            <View
              style={{ backgroundColor: "grey", height: 0.5, marginTop: 10 }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 6,
              }}
            >
              <Text style={{ color: "#e95420", marginTop: 3 }}>
                {item.Price}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#205072",
                  padding: 5,
                  width: 80,
                  borderRadius: 6,
                }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  {item.Button}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default CardTestandCheckups;
