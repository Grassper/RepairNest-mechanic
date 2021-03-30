import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

// importing components
import ProfileContainer from "../components/profileContainer.component";
import LocationDisplay from "../components/locationDisplay.component";
import Divider from "../components/divider.component";
import ProblemContainer from "../components/problemContainer.component";

// importing redux
import { connect } from "react-redux";

// importing selectors
import { selectIndividualProposal } from "../redux/proposals/proposals.selectors.redux";

const ProposalDetail = ({ navigation, proposal }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.topSection}>
        <ProfileContainer
          profileName={proposal.clientName}
          profileImage={proposal.clientImageUrl}
          proposalType={proposal.repairType}
          fare={proposal.fare}
          distance={proposal.distance}
        />
        <View style={Styles.contentContainer}>
          <LocationDisplay location={proposal.location} />
          <Divider />
          <ProblemContainer problem={proposal.problem} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProposalNavigation", {
            proposal,
          });
        }}
        style={Styles.bottomSection}
      >
        <Text style={Styles.repairText}>{"GO TO REPAIR".toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state, props) => ({
  proposal: selectIndividualProposal(props.route.params.proposalId)(state),
});

export default connect(mapStateToProps)(ProposalDetail);

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
