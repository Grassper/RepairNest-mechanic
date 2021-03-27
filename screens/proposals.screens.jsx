import React, { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

// importing color
import Colors from "../colors/default.colors";

// importing components
import ProposalCard from "../components/proposalCard.component";
import Hamburger from "../components/hamburger.component";
import NotificationBanner from "../components/notificationBanner.component";

// importing dummydata
import dummy from "../data/proposal.dummy.data";

// importing redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// importing selectors
import { selectProposalList } from "../redux/proposals/proposals.selectors.redux";

const ProposalScreen = ({ navigation, proposalList }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => Hamburger(navigation),
    });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <ProposalCard
      id={item.id}
      profileName={item.clientName}
      profileImage={item.clientImageUrl}
      fare={item.fare}
      proposalType={item.repairType}
      distance={item.distance}
      location={item.location}
      onSelect={() => {
        navigation.navigate("ProposalDetail", { item });
      }}
    />
  );
  return (
    <View style={Styles.container}>
      <NotificationBanner
        text={`You have ${proposalList.length} new requests`}
      />
      <FlatList
        data={proposalList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  proposalList: selectProposalList,
});

export default connect(mapStateToProps)(ProposalScreen);

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
});
