import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButton, Item } from "react-navigation-header-buttons";

// importing colors
import Colors from "../colors/default.colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Colors.accentColor}
    />
  );
};

export default CustomHeaderButton;
