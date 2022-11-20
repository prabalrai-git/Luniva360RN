import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import {
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HEIGHT = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function QrCodeScanner() {
  const navigation = useNavigation();
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const maskRowHeight = Math.round((HEIGHT - 300) / 20);
  const maskColWidth = (width - 300) / 2;

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <TouchableOpacity
          onPress={requestPermission}
          style={{
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto",
            padding: 14,
            backgroundColor: "#205072",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "normal",
              textAlign: "center",
            }}
          >
            Grant Permission
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[styles.container]}>
      <Camera style={styles.camera} type={type}>
        <View
          style={{
            paddingBottom: 5,
            backgroundColor: "white",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon
              style={{ marginLeft: 20, marginTop: 20 }}
              name="arrow-back"
              size={30}
              color="black"
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 18 }}>
            Scan QR code
          </Text>
        </View>
        <View style={styles.maskOutter}>
          <View
            style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]}
          />
          <View style={[{ flex: 30 }, styles.maskCenter]}>
            <View style={[{ width: maskColWidth }, styles.maskFrame]} />
            <View style={styles.maskInner} />
            <View style={[{ width: maskColWidth }, styles.maskFrame]} />
          </View>
          <View
            style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]}
          >
            <Text
              style={{
                color: "white",
                alignSelf: "center",
                marginTop: "auto",
                marginBottom: "auto",
                fontSize: 18,
              }}
            >
              Place the QR Code in the Frame Above.
            </Text>
          </View>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  maskOutter: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  maskInner: {
    width: 300,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
  },
  maskFrame: {
    backgroundColor: "rgba(1,1,1,0.6)",
  },
  maskRow: {
    width: "100%",
  },
  maskCenter: { flexDirection: "row" },
});
