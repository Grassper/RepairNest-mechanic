import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

// import colors
import Colors from "../colors/default.colors";

// importing icons
import { FontAwesome } from "@expo/vector-icons";

const ProfileContainer = ({
  profileImage,
  profileName,
  proposalType,
  fare,
  distance,
}) => {
  return (
    <View style={Styles.profileContainer}>
      <View style={Styles.profileLeftSection}>
        <View style={Styles.profilePhotoContainer}>
          <Image
            style={Styles.profilePhoto}
            source={{
              uri: profileImage,
            }}
          />
        </View>
        <View style={Styles.profileContent}>
          <Text style={Styles.mainText}>{profileName}</Text>
          {proposalType && (
            <View style={Styles.proposalTypeContainer}>
              <Text style={Styles.subText}>{proposalType}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={Styles.profileRightSection}>
        <View style={Styles.fareContainer}>
          <FontAwesome
            name="rupee"
            size={18}
            style={Styles.icon}
            color={Colors.black}
          />
          <Text style={Styles.mainText}>{fare}</Text>
        </View>
        <Text style={Styles.subText}>{distance}Km</Text>
      </View>
    </View>
  );
};

export default ProfileContainer;

const Styles = StyleSheet.create({
  fareContainer: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 5,
  },
  mainText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 10,
  },
  profileContainer: {
    alignItems: "center",
    backgroundColor: Colors.profileCardBackgroud,
    flexDirection: "row",
    padding: 20,
    width: "100%",
  },
  profileContent: {
    height: "100%",
  },
  profileLeftSection: {
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
  },
  profilePhoto: {
    height: "100%",
    width: "100%",
  },
  profilePhotoContainer: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    height: 60,
    marginRight: 15,
    overflow: "hidden",
    width: 60,
  },
  profileRightSection: {
    width: "20%",
  },
  proposalTypeContainer: {
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    maxWidth: "50%",
    minWidth: "50%",
    paddingVertical: 5,
  },
  subText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
  },
});
