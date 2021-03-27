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

const ProposalScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => Hamburger(navigation),
    });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <ProposalCard
      id={item.id}
      profileImage={item.profileImage}
      proposalType={item.proposalType}
      profileName={item.profileName}
      fare={item.fare}
      distance={item.distance}
      location={item.location}
      onSelect={() => {
        navigation.navigate("ProposalDetail", { item });
      }}
    />
  );
  return (
    <View style={Styles.container}>
      <NotificationBanner text={"You have 10 new requests"} />
      <FlatList
        data={dummy}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProposalScreen;

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
});
