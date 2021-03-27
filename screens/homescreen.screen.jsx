import React, { useState, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

// importing components
import ChooseLocationMap from "../components/chooseLocationMap.component";
import Dashboard from "../components/dashboard.component";
import Hamburger from "../components/hamburger.component";
import ToggleButtonOn from "../components/toggleButtonOn.component";
import ToggleButtonOff from "../components/toggleButtonOff.component";
import NotificationBanner from "../components/notificationBanner.component";

const Homescreen = ({ navigation }) => {
  const [online, setOnline] = useState(false);

  const toggleOnline = () => {
    console.log("button clicked");
  };

  const customstyles = {
    height: "70%",
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => Hamburger(navigation),
      headerRight: online
        ? () => <ToggleButtonOn toggleOnline={toggleOnline} />
        : () => <ToggleButtonOff toggleOnline={toggleOnline} />,
    });
  }, [navigation]);

  return (
    <View style={Styles.container}>
      <NotificationBanner
        text={"Go online to start accepting jobs"}
        // eslint-disable-next-line react-native/no-inline-styles
        customStyle={{ alignItems: "center" }}
      />
      <ChooseLocationMap customstyles={customstyles} />
      <Dashboard
        profileImage="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        profileName="Martha banks"
        amount="50"
      />
    </View>
  );
};

export default Homescreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
