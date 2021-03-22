import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

// importing color
import Colors from "../colors/default.colors";

// importing components
import ContractCard from "../components/contractCard.component";

// importing dummydata
import dummy from "../data/proposal.dummy.data";

const Contracts = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <ContractCard
      id={item.id}
      profileImage={item.profileImage}
      proposalType={item.proposalType}
      profileName={item.profileName}
      fare={item.fare}
      distance={item.distance}
      location={item.location}
      onSelect={() => navigation.navigate("HistoryScreen")}
    />
  );
  return (
    <View style={Styles.container}>
      <View style={Styles.notificationContainer}>
        <Text style={Styles.notificationText}>You have 1 active contract</Text>
      </View>
      <FlatList
        data={dummy.slice(0, 1)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Contracts;

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
