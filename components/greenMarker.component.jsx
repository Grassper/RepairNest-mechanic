import React from "react";
import { StyleSheet, View } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

const GreenMarker = () => {
  return (
    <View style={Styles.marker}>
      <View style={Styles.innerCircle}>
        <View style={Styles.innerMarker}></View>
      </View>
    </View>
  );
};

export default GreenMarker;

const Styles = StyleSheet.create({
  innerCircle: {
    alignItems: "center",
    borderColor: Colors.primaryColor,
    borderRadius: 50,
    borderWidth: 10,
    justifyContent: "center",
  },
  innerMarker: {
    borderRadius: 50,
    height: 15,
    width: 15,
  },
  marker: {
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 50,
    height: 40,
    justifyContent: "center",
    width: 40,
  },
});
