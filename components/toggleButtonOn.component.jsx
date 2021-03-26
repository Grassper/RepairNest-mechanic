import React from "react";

// importing icons
import { FontAwesome } from "@expo/vector-icons";

// importing header buttons
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "./headerButton.component";

const ToggleButtonOn = ({ toggleOnline }) => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Toggle"
        iconName="toggle-on"
        IconComponent={FontAwesome}
        iconSize={30}
        onPress={() => toggleOnline()}
      />
    </HeaderButtons>
  );
};

export default ToggleButtonOn;
