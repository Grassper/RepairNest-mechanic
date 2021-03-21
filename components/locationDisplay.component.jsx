import React from "react";
import { View, StyleSheet, Text } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

// importing icons
import { Ionicons } from "@expo/vector-icons";

const LocationDisplay = ({ location }) => {
  return (
    <View>
      <Text style={Styles.locationTitle}>
        {"Repair location".toUpperCase()}
      </Text>
      <View style={Styles.location}>
        <Ionicons name="location-sharp" size={24} color={Colors.red} />
        <View>
          <Text style={Styles.locationText} numberOfLines={1}>
            {location ? location.substring(0, 35) : null}...
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LocationDisplay;

const Styles = StyleSheet.create({
  location: {
    alignItems: "flex-end",
    flexDirection: "row",
    paddingVertical: 10,
  },
  locationText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
    paddingLeft: 5,
  },
  locationTitle: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 10,
  },
});
