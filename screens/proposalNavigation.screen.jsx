import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// importing dummy data

import dummy from "../data/proposal.dummy.data";

// importing colors
import Colors from "../colors/default.colors";

// importing components
import ChooseLocationMap from "../components/chooseLocationMap.component";
import ProfileContainer from "../components/profileContainer.component";
import LocationDisplay from "../components/locationDisplay.component";
import CustomButton from "../components/customButton.component";

const ProposalNavigation = () => {
  const [startNavigation, setStartNavigation] = useState(false);
  const {
    id,
    profileImage,
    profileName,
    proposalType,
    fare,
    distance,
    location,
  } = dummy[0];

  const customstyles = {
    height: "60%",
  };

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

  const ArrivedHandler = () => {
    console.log("ArrivedHandler clicked");
  };

  const NavigationHandler = () => {
    setStartNavigation(true);
  };

  return (
    <View style={Styles.container}>
      <ChooseLocationMap customstyles={customstyles} />
      <View>
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
            buttonTitle={startNavigation ? "Arrived" : "Navigate"}
            customStyles={buttonCustomSolidStyles}
            onSelect={startNavigation ? ArrivedHandler : NavigationHandler}
          />
        </View>
      </View>
    </View>
  );
};

export default ProposalNavigation;

const Styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    alignItems: "center",
    backgroundColor: Colors.white,
    flex: 1,
  },
  locationContainer: {
    padding: 20,
  },
});
