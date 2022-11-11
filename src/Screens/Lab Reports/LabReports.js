import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import CommonHeader from "../../Common/CommonHeader";
import Icon from "react-native-vector-icons/MaterialIcons";
import LabReportsHospitals from "./LabReportsHospitals";

const WIDTH = Dimensions.get("window").width;

const LabReports = () => {
  const pageTitle = "View Lab Reports";

  const data = [
    {
      id: 1,
      title: "View you report",
      img: require("../../Assets/Images/viewreport.png"),
      desc: "Scanning QR code/Credentials Input",
    },
    {
      id: 2,
      title: "View Report History",
      img: require("../../Assets/Images/reportHistory.png"),
      desc: "View Report History",
    },
  ];

  return (
    <>
      <CommonHeader Title={pageTitle} />
      <View>
        {data.map((item) => {
          return (
            <>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  // borderColor: "black",
                  // borderWidth: 2,
                  padding: 20,
                }}
              >
                <Image source={item.img} style={{ height: 70, width: 70 }} />
                <View style={{ margin: 5 }}>
                  <Text style={{ fontSize: 18 }}>{item.title}</Text>
                  <Text style={{ color: "grey", fontSize: 12 }}>
                    {item.desc}
                  </Text>
                </View>

                <Icon
                  name={"chevron-right"}
                  size={40}
                  style={{
                    alignSelf: "center",
                    position: "absolute",
                    right: 20,
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  width: WIDTH * 0.9,
                  backgroundColor: "grey",
                  marginLeft: 50,
                  height: 1,
                }}
              ></View>
            </>
          );
        })}
      </View>
      <LabReportsHospitals />
    </>
  );
};

export default LabReports;
