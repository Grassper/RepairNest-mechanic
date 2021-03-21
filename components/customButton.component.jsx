import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

const CustomButton = ({
  buttonTitle,
  buttonTitleStyle,
  customStyles,
  onSelect,
}) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={{ ...Styles.Button, ...customStyles }}
    >
      <Text style={{ ...Styles.buttonTitle, ...buttonTitleStyle }}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const Styles = StyleSheet.create({
  Button: {
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    justifyContent: "center",
    paddingVertical: 10,
    width: "100%",
  },
  buttonTitle: {
    color: Colors.white,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
  },
});
