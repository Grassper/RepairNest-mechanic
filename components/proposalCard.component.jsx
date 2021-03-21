import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

// import Colors
import Colors from "../colors/default.colors";

// importing icons
import { Ionicons } from "@expo/vector-icons";

// importing component
import CustomButton from "../components/customButton.component";
import ProfileContainer from "../components/profileContainer.component";
import LocationDisplay from "../components/locationDisplay.component";

const ProposalCard = ({
  onSelect,
  id,
  location,
  profileImage,
  profileName,
  proposalType,
  fare,
  distance,
}) => {
  const [buttonToggle, setbuttonToggle] = useState(true);
  const buttonCustomSolidStyles = {
    backgroundColor: Colors.primaryColor,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    width: "45%",
  };
  const buttonCustomOutlineStyles = {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.accentColor,
    width: "45%",
  };
  const buttonTitleStyle = {
    color: Colors.accentColor,
  };
  return (
    <TouchableOpacity
      onPress={() => {
        setbuttonToggle(!buttonToggle);
      }}
    >
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
          {!buttonToggle ? (
            <View style={Styles.buttonContainer}>
              <CustomButton
                buttonTitle="Cancel"
                customStyles={buttonCustomOutlineStyles}
                buttonTitleStyle={buttonTitleStyle}
                onSelect={() => {
                  console.log("cancel pressed");
                }}
              />
              <CustomButton
                buttonTitle="Accept"
                customStyles={buttonCustomSolidStyles}
                onSelect={onSelect}
              />
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProposalCard;

const Styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
  },
  container: {
    alignItems: "center",
    elevation: 5,
    justifyContent: "space-between",
    marginBottom: 10,
    width: "100%",
  },
  locationContainer: {
    backgroundColor: Colors.white,
    padding: 20,
    width: "100%",
  },
});
