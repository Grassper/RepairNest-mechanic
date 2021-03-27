import React from "react";
import { View, Text, StyleSheet } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

const NotificationBanner = ({ text, customStyle }) => {
  return (
    <View style={{ ...Styles.notificationContainer, ...customStyle }}>
      <Text style={Styles.notificationText}>{text}</Text>
    </View>
  );
};

export default NotificationBanner;

const Styles = StyleSheet.create({
  notificationContainer: {
    backgroundColor: Colors.notification_banner,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: "100%",
  },
  notificationText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
  },
});
