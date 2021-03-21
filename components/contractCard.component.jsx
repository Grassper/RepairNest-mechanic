import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

// import Colors
import Colors from "../colors/default.colors";

// importing component
import CustomButton from "../components/customButton.component";
import ProfileContainer from "../components/profileContainer.component";
import LocationDisplay from "../components/locationDisplay.component";

const ContractCard = ({
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
    width: "100%",
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
                buttonTitle="Mark as completed"
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

export default ContractCard;

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
