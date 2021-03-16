import React from "react";
import { StyleSheet, View } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

const Divider = ({ customStyles }) => {
  return <View style={{ ...Styles.divider, ...customStyles }}></View>;
};

export default Divider;

const Styles = StyleSheet.create({
  divider: {
    borderColor: Colors.borderColor,
    borderWidth: 0.5,
    marginVertical: 15,
  },
});
