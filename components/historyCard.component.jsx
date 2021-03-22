import React from "react";
import { Text, View, StyleSheet } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

// importing components
import ProfileContainer from "../components/profileContainer.component";
import LocationDisplay from "../components/locationDisplay.component";

const HistoryCard = ({
  profileImage,
  profileName,
  proposalType,
  fare,
  distance,
  location,
}) => {
  return (
    <View style={Styles.container}>
      <ProfileContainer
        profileImage={profileImage}
        profileName={profileName}
        proposalType={proposalType}
        fare={fare}
        distance={distance}
      />
      <View style={Styles.locationContainer}>
        <LocationDisplay location={location} />
      </View>
    </View>
  );
};

export default HistoryCard;

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    elevation: 5,
    justifyContent: "space-between",
    marginBottom: 15,
    width: "100%",
  },
  locationContainer: {
    backgroundColor: Colors.white,
    padding: 20,
    width: "100%",
  },
});
