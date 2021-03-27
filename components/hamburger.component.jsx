import React from "react";

// importing icons
import { Ionicons } from "@expo/vector-icons";

// importing colors
import Colors from "../colors/default.colors";

// importing headerbutton
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/headerButton.component";

const Hamburger = (navigation) => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        IconComponent={Ionicons}
        iconSize={30}
        color={Colors.accentColor}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  );
};

export default Hamburger;
