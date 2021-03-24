import React, { useLayoutEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";

// importing components
import HistorySummary from "../components/historySummary.component";
import HistoryCard from "../components/historyCard.component";
import Hamburger from "../components/hamburger.component";

// importing dummydata
import dummy from "../data/proposal.dummy.data";

const HistoryScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => Hamburger(navigation),
    });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <HistoryCard
      profileImage={item.profileImage}
      proposalType={item.proposalType}
      profileName={item.profileName}
      fare={item.fare}
      distance={item.distance}
      location={item.location}
    />
  );
  return (
    <View style={Styles.container}>
      <HistorySummary TotalJobs={dummy.length} AmountEarned="10K" />
      <View style={Styles.historyList}>
        <FlatList
          data={dummy}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default HistoryScreen;

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
});
