import React from "react";

// importing icons
import { FontAwesome } from "@expo/vector-icons";

// importing colors
import Colors from "../colors/default.colors";

// importing header buttons
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "./headerButton.component";

const ToggleButtonOff = ({ toggleOnline }) => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Toggle"
        iconName="toggle-off"
        iconSize={30}
        IconComponent={FontAwesome}
        onPress={() => toggleOnline()}
        color={Colors.primaryColor}
      />
    </HeaderButtons>
  );
};

export default ToggleButtonOff;
