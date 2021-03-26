import React from "react";
import { HeaderButton, Item } from "react-navigation-header-buttons";

// importing colors
import Colors from "../colors/default.colors";

const CustomHeaderButton = (props) => {
  return <HeaderButton {...props} color={Colors.notification_banner} />;
};

export default CustomHeaderButton;
