import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

// import Colors
import Colors from "../colors/default.colors";

// importing icons
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const ProposalCard = ({
  navigation,
  id,
  profileImage,
  profileName,
  proposalType,
  fare,
  distance,
  location,
}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={Styles.container}>
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
              <View style={Styles.proposalTypeContainer}>
                <Text style={Styles.subText}>{proposalType}</Text>
              </View>
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
        <View style={Styles.locationContainer}>
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
      </View>
    </TouchableOpacity>
  );
};

export default ProposalCard;

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    elevation: 5,
    justifyContent: "space-between",
    marginBottom: 10,
    width: "100%",
  },
  fareContainer: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 5,
  },
  location: {
    alignItems: "flex-end",
    flexDirection: "row",
    paddingVertical: 10,
  },
  locationContainer: {
    backgroundColor: Colors.white,
    padding: 20,
    width: "100%",
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
