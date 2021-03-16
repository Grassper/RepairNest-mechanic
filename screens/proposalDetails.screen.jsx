import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

// importing components
import ProfileContainer from "../components/profileContainer.component";
import LocationDisplay from "../components/locationDisplay.component";
import Divider from "../components/divider.component";
import ProblemContainer from "../components/problemContainer.component";
import CustomButton from "../components/customButton.component";

const ProposalDetail = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={Styles.container}>
      <View style={Styles.topSection}>
        <ProfileContainer {...item} />
        <View style={Styles.contentContainer}>
          <LocationDisplay location={item.location} />
          <Divider />
          <ProblemContainer problem={item.problem} />
        </View>
      </View>
      <TouchableOpacity onPress={() => {}} style={Styles.bottomSection}>
        <Text style={Styles.repairText}>{"GO TO REPAIR".toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProposalDetail;

const Styles = StyleSheet.create({
  bottomSection: {
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    padding: 20,
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  contentContainer: {
    backgroundColor: Colors.white,
    padding: 20,
    width: "100%",
  },
  repairText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
  },
});
