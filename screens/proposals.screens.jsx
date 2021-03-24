import React, { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

// importing color
import Colors from "../colors/default.colors";

// importing components
import ProposalCard from "../components/proposalCard.component";
import Hamburger from "../components/hamburger.component";

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
      <View style={Styles.notificationContainer}>
        <Text style={Styles.notificationText}>You have 10 new requests</Text>
      </View>
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
  notificationContainer: {
    backgroundColor: Colors.notification_banner,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: "100%",
  },
  notificationText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
  },
});
