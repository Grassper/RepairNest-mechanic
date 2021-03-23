import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

// import colors
import Colors from "../colors/default.colors";

// importing icons
import { FontAwesome } from "@expo/vector-icons";

const DashBoardDriverCard = ({ profileImage, profileName, amount }) => {
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
          <Text style={Styles.subText}>Mechanic</Text>
        </View>
      </View>
      <View style={Styles.profileRightSection}>
        <View style={Styles.amountContainer}>
          <FontAwesome
            name="rupee"
            size={18}
            style={Styles.icon}
            color={Colors.black}
          />
          <Text style={Styles.mainText}>{amount}</Text>
        </View>
        <Text style={Styles.subText}>Earned</Text>
      </View>
    </View>
  );
};

export default DashBoardDriverCard;

const Styles = StyleSheet.create({
  amountContainer: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 5,
  },
  mainText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
    lineHeight: 20,
  },
  profileContainer: {
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    width: "100%",
  },
  profileContent: {
    height: "100%",
  },
  profileLeftSection: {
    alignItems: "flex-start",
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
    height: 50,
    marginRight: 15,
    overflow: "hidden",
    width: 50,
  },
  profileRightSection: {
    width: "20%",
  },
  subText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
    marginTop: 10,
  },
});
